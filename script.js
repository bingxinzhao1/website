/* Renders the publication list from publications.js and wires the
   "Show: Selected / by Year / by Topic" controls. */
(function () {
  'use strict';

  var pubs = window.PUBLICATIONS || [];
  var listEl = document.getElementById('pub-list');
  var modeBar = document.getElementById('pub-filter-bar');
  var tagBar = document.getElementById('pub-tag-bar');
  if (!listEl || !modeBar || !tagBar) return;

  var state = { mode: 'selected', topic: 'all' };
  var ME = 'Bingxin Zhao';

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function card(p) {
    var article = el('article', 'pub-card');

    var left = el('div', 'pub-card-left');
    if (p.image) {
      var img = document.createElement('img');
      img.src = p.image;
      img.alt = '';
      img.loading = 'lazy';
      img.width = 300;
      img.height = 180;
      left.appendChild(img);
    }
    article.appendChild(left);

    var right = el('div', 'pub-card-right');
    right.appendChild(el('div', 'papertitle', p.title));

    var authors = el('div', 'pub-authors');
    String(p.authors || '').split(ME).forEach(function (part, i) {
      if (i > 0) authors.appendChild(el('b', null, ME));
      if (part) authors.appendChild(document.createTextNode(part));
    });
    right.appendChild(authors);

    var tagWrap = el('div');
    tagWrap.appendChild(el('span', 'pub-tag', p.topic));
    right.appendChild(tagWrap);

    var venue = el('div', 'pub-venue');
    venue.appendChild(el('b', null, p.venue));
    venue.appendChild(document.createTextNode(', ' + p.year));
    right.appendChild(venue);

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

    var links = el('div', 'pub-links');
    (p.links || []).forEach(function (l, i) {
      if (i > 0) links.appendChild(document.createTextNode(' / '));
      var a = el('a', null, l.label);
      a.href = l.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      links.appendChild(a);
    });
    right.appendChild(links);

    article.appendChild(right);
    return article;
  }

  function topics() {
    var seen = [];
    pubs.forEach(function (p) {
      if (seen.indexOf(p.topic) < 0) seen.push(p.topic);
    });
    return seen;
  }

  function renderList() {
    listEl.textContent = '';
    if (state.mode === 'selected') {
      pubs.filter(function (p) { return p.selected; }).forEach(function (p) {
        listEl.appendChild(card(p));
      });
    } else if (state.mode === 'year') {
      var sorted = pubs
        .map(function (p, i) { return { p: p, i: i }; })
        .sort(function (a, b) { return b.p.year - a.p.year || a.i - b.i; });
      var current = null;
      sorted.forEach(function (x) {
        if (x.p.year !== current) {
          current = x.p.year;
          listEl.appendChild(el('h3', 'pub-year-heading', String(current)));
        }
        listEl.appendChild(card(x.p));
      });
    } else {
      pubs.filter(function (p) { return state.topic === 'all' || p.topic === state.topic; })
        .forEach(function (p) { listEl.appendChild(card(p)); });
    }
  }

  function renderControls() {
    Array.prototype.forEach.call(modeBar.querySelectorAll('button[data-pub-mode]'), function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-pub-mode') === state.mode ? 'true' : 'false');
    });
    tagBar.hidden = state.mode !== 'topic';
    Array.prototype.forEach.call(tagBar.querySelectorAll('button'), function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-topic') === state.topic ? 'true' : 'false');
    });
  }

  function buildTagBar() {
    [['all', 'All Topics']].concat(topics().map(function (t) { return [t, t]; })).forEach(function (t) {
      var b = el('button', null, t[1]);
      b.type = 'button';
      b.setAttribute('data-topic', t[0]);
      b.addEventListener('click', function () {
        state.topic = t[0];
        renderControls();
        renderList();
      });
      tagBar.appendChild(b);
    });
  }

  Array.prototype.forEach.call(modeBar.querySelectorAll('button[data-pub-mode]'), function (b) {
    b.addEventListener('click', function () {
      state.mode = b.getAttribute('data-pub-mode');
      renderControls();
      renderList();
    });
  });

  buildTagBar();
  renderControls();
  renderList();
})();
