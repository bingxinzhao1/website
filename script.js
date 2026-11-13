/* Renders the publication list from publications.js and wires the
   "Featured papers: by Topic / by Year" controls. */
(function () {
  'use strict';

  var pubs = window.PUBLICATIONS || [];
  var listEl = document.getElementById('pub-list');
  var modeBar = document.getElementById('pub-filter-bar');
  var tagBar = document.getElementById('pub-tag-bar');
  if (!listEl || !modeBar || !tagBar) return;

  var state = { mode: 'topic', topic: 'all', year: 'all' };
  var ME = 'Bingxin Zhao';

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function topicsOf(p) {
    return Array.isArray(p.topic) ? p.topic : [p.topic];
  }

  function card(p) {
    var article = el('article', 'pub-card');

    if (p.image) {
      var left = el('div', 'pub-card-left');
      var img = document.createElement('img');
      img.src = p.image;
      img.alt = '';
      img.loading = 'lazy';
      img.width = 300;
      img.height = 180;
      left.appendChild(img);
      article.appendChild(left);
    }

    var right = el('div', 'pub-card-right');
    var links = (p.links || []).slice();
    var main = links.filter(function (l) { return l.label === 'Paper'; })[0] ||
      links.filter(function (l) { return l.label === 'Preprint'; })[0];
    var title = el(main ? 'a' : 'span', 'papertitle', p.title);
    if (main) {
      title.href = main.url;
      title.target = '_blank';
      title.rel = 'noopener noreferrer';
    }
    right.appendChild(title);

    var authors = el('div', 'pub-authors');
    String(p.authors || '').split(ME).forEach(function (part, i) {
      if (i > 0) authors.appendChild(el('b', null, ME));
      if (part) authors.appendChild(document.createTextNode(part));
    });
    if (p.note) authors.appendChild(el('span', 'pub-note', ' (' + p.note + ')'));
    right.appendChild(authors);

    var venue = el('div', 'pub-venue');
    venue.appendChild(el('i', null, p.venue));
    venue.appendChild(document.createTextNode(', ' + p.year));
    links.forEach(function (l) {
      if (l === main) return;
      venue.appendChild(document.createTextNode(' / '));
      var a = el('a', null, l.label);
      a.href = l.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      venue.appendChild(a);
    });
    right.appendChild(venue);

    var tagWrap = el('div', 'pub-tags');
    topicsOf(p).forEach(function (t) { tagWrap.appendChild(el('span', 'pub-tag', t)); });
    right.appendChild(tagWrap);

    if (p.highlights && p.highlights.length) {
      var list = el('ul', 'pub-highlights');
      p.highlights.forEach(function (line) {
        var li = document.createElement('li');
        li.innerHTML = line; // lines come from publications.js and may contain links
        Array.prototype.forEach.call(li.querySelectorAll('a'), function (a) {
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
        });
        list.appendChild(li);
      });
      right.appendChild(list);
    }

    article.appendChild(right);
    return article;
  }

  function topics() {
    var seen = (window.TOPIC_ORDER || []).slice();
    pubs.forEach(function (p) {
      topicsOf(p).forEach(function (t) {
        if (seen.indexOf(t) < 0) seen.push(t);
      });
    });
    return seen.filter(function (t) {
      return pubs.some(function (p) { return topicsOf(p).indexOf(t) >= 0; });
    });
  }

  // Year groups: one per year for the last five years, older papers together.
  var CUTOFF = new Date().getFullYear() - 4;
  function yearGroup(y) {
    return y >= CUTOFF ? String(y) : String(CUTOFF - 1) + ' and earlier';
  }

  // Ordering within a topic or year: own papers first (first, last, co-first, or
  // co-corresponding author), then contributing-author papers; within each group, by
  // the journal order in publications.js, then newest first, then file order.
  var JOURNALS = window.JOURNAL_ORDER || [];
  function isOwn(p) {
    var a = String(p.authors || '');
    return a.indexOf(ME) === 0 || /Bingxin Zhao$/.test(a) || a.indexOf(ME + '*') >= 0;
  }
  function journalRank(p) {
    var r = JOURNALS.indexOf(String(p.venue).replace(/ \(.*\)$/, ''));
    return r < 0 ? JOURNALS.length : r;
  }
  function compare(a, b, extra) {
    return (isOwn(b.p) - isOwn(a.p)) || (extra ? extra(a, b) : 0) ||
      (journalRank(a.p) - journalRank(b.p)) || (b.p.year - a.p.year) || (a.i - b.i);
  }

  // In "All Topics" / "All Years", each group shows its first few papers and a button
  // to show the rest. Picking a single topic or year always shows every paper.
  var PREVIEW = 3;
  var expanded = {};

  function appendGroup(key, heading, items) {
    var showAll = !heading || expanded[key];
    if (heading) listEl.appendChild(el('h3', 'pub-year-heading', heading));
    items.forEach(function (p, i) {
      if (showAll || i < PREVIEW) listEl.appendChild(card(p));
    });
    if (heading && items.length > PREVIEW) {
      var btn = el('button', 'pub-more', expanded[key]
        ? 'Show fewer'
        : 'Show all papers in ' + heading);
      btn.type = 'button';
      btn.addEventListener('click', function () {
        expanded[key] = !expanded[key];
        renderList();
      });
      listEl.appendChild(btn);
    }
  }

  function renderList() {
    listEl.textContent = '';
    if (state.mode === 'year') {
      var sorted = pubs
        .map(function (p, i) { return { p: p, i: i }; })
        .sort(function (a, b) {
          var ya = yearGroup(a.p.year), yb = yearGroup(b.p.year);
          return ya === yb ? compare(a, b) : (b.p.year - a.p.year);
        });
      var groups = [], byGroup = {};
      sorted.forEach(function (x) {
        var g = yearGroup(x.p.year);
        if (!byGroup[g]) { byGroup[g] = []; groups.push(g); }
        byGroup[g].push(x.p);
      });
      groups.forEach(function (g) {
        if (state.year !== 'all' && g !== state.year) return;
        appendGroup('year:' + g, state.year === 'all' ? g : null, byGroup[g]);
      });
    } else {
      topics().forEach(function (t) {
        if (state.topic !== 'all' && state.topic !== t) return;
        // Within own and contributing groups, papers whose main topic is t come first.
        var main = function (x) { return topicsOf(x.p)[0] === t ? 1 : 0; };
        var items = pubs.map(function (p, i) { return { p: p, i: i }; })
          .filter(function (x) { return topicsOf(x.p).indexOf(t) >= 0; })
          .sort(function (a, b) { return compare(a, b, function (a, b) { return main(b) - main(a); }); })
          .map(function (x) { return x.p; });
        appendGroup('topic:' + t, state.topic === 'all' ? t : null, items);
      });
    }
  }


  function years() {
    var list = pubs.map(function (p) { return p.year; })
      .sort(function (a, b) { return b - a; })
      .map(yearGroup);
    return list.filter(function (g, i) { return list.indexOf(g) === i; });
  }

  // The second row of buttons: topics in the topic view, years in the year view.
  function buildFilterBar() {
    tagBar.textContent = '';
    var key = state.mode === 'year' ? 'year' : 'topic';
    var options = key === 'year'
      ? [['all', 'All Years']].concat(years().map(function (y) { return [y, y]; }))
      : [['all', 'All Topics']].concat(topics().map(function (t) { return [t, t]; }));
    options.forEach(function (o) {
      var b = el('button', null, o[1]);
      b.type = 'button';
      b.setAttribute('aria-pressed', state[key] === o[0] ? 'true' : 'false');
      b.addEventListener('click', function () {
        state[key] = o[0];
        renderControls();
        renderList();
      });
      tagBar.appendChild(b);
    });
  }

  function renderControls() {
    Array.prototype.forEach.call(modeBar.querySelectorAll('button[data-pub-mode]'), function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-pub-mode') === state.mode ? 'true' : 'false');
    });
    tagBar.hidden = false;
    buildFilterBar();
  }

  Array.prototype.forEach.call(modeBar.querySelectorAll('button[data-pub-mode]'), function (b) {
    b.addEventListener('click', function () {
      state.mode = b.getAttribute('data-pub-mode');
      renderControls();
      renderList();
    });
  });

  renderControls();
  renderList();
})();
