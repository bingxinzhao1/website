/* Publication list for the Research section.
   To add a paper, copy one entry and edit it. Fields:
     title          paper title
     authors        short author list: "Bingxin Zhao et al." when first author, "First Author, …, Bingxin Zhao"
                    when last author, "First Author, …, Bingxin Zhao, …, Last Author" when a contributing
                    author (the name "Bingxin Zhao" is shown in bold)
     note           optional short label after the authors, e.g. "*co-corresponding authors" (mark the names with * in authors)
     venue, year    shown as "Venue, year"
     topic          one topic from window.TOPIC_ORDER at the end of this file, or a list such as
                    ["Inter-organ Connections", "Genetics of the Human Brain"] for a paper in two;
                    order within a topic follows JOURNAL_ORDER at the end of this file
     highlights     bullet lines for awards and coverage; [] for none.
                    Each line is text and may contain links: <a href="https://...">label</a>
     image          optional figure path, e.g. "images/papers/x.png" (5:3 works well); leave out for none
     links          zero or more {label, url}
*/
window.PUBLICATIONS = [
  {
    "title": "Heart-brain connections: phenotypic and genetic insights from magnetic resonance images",
    "authors": "Bingxin Zhao et al.",
    "venue": "Science",
    "year": 2023,
    "topic": "Inter-organ Connections",
    "highlights": [
      "Featured in a <a href=\"https://www.science.org/doi/10.1126/science.adi2392\">Science Perspective</a> and a <a href=\"https://doi.org/10.1038/s41569-023-00905-y\">Nature Reviews Cardiology research highlight</a>, and covered by <a href=\"https://alzforum.org/node/2775541\">Alzforum</a>.",
      "Recognized by the <a href=\"https://www.ukbiobank.ac.uk/news/uk-biobank-unveils-winner-of-the-scientific-impact-awards-2025-at-annual-conference/\">inaugural UK Biobank Scientific Impact Awards</a> and named one of the <a href=\"https://www.ukbiobank.ac.uk/research-stories/10-research-findings-from-our-imaging-projects-first-decade/\">top 10 findings</a> from the first decade of UK Biobank imaging (<a href=\"https://www.ukbiobank.ac.uk/research-stories/how-keeping-the-heart-healthy-could-benefit-the-brain/\">interview</a>)."
    ],
    "links": [
      {
        "label": "Paper",
        "url": "https://www.science.org/doi/10.1126/science.abn6598"
      }
    ]
  },
  {
    "title": "Engineering AI co-scientists for statistical genetics applications",
    "authors": "Bingxin Zhao",
    "venue": "Nature Genetics",
    "year": 2026,
    "topic": "AI for Science and Research Platforms",
    "highlights": [
      "Discussed in an <a href=\"https://statsupai.org/quarto_web/site/posts/agentic-ai-genetics-interview.html\">interview with StatsUpAI</a>."
    ],
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1038/s41588-025-02487-6"
      }
    ]
  },
  {
    "title": "Common genetic variation influencing human white matter microstructure",
    "authors": "Bingxin Zhao et al.",
    "venue": "Science",
    "year": 2021,
    "topic": "Genetics of the Human Brain",
    "highlights": [
      "Featured in a <a href=\"https://www.science.org/doi/abs/10.1126/science.abj1881\">Science Perspective</a>, and covered by <a href=\"https://medicalxpress.com/news/2021-06-combining-mri-imaging-brain-genetic.amp\">Medical Xpress</a>."
    ],
    "links": [
      {
        "label": "Paper",
        "url": "https://science.sciencemag.org/content/372/6548/eabf3736"
      }
    ]
  },
  {
    "title": "Common variants contribute to intrinsic human brain functional networks",
    "authors": "Bingxin Zhao et al.",
    "venue": "Nature Genetics",
    "year": 2022,
    "topic": "Genetics of the Human Brain",
    "highlights": [],
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1038/s41588-022-01039-6"
      }
    ]
  },
  {
    "title": "Genome-wide association analysis of 19,629 individuals identifies variants influencing regional brain volumes and refines their genetic co-architecture with cognitive and mental health traits",
    "authors": "Bingxin Zhao et al.",
    "venue": "Nature Genetics",
    "year": 2019,
    "topic": "Genetics of the Human Brain",
    "highlights": [
      "Featured on the cover of Nature Genetics."
    ],
    "links": [
      {
        "label": "Paper",
        "url": "https://www.nature.com/articles/s41588-019-0516-6"
      }
    ]
  },
  {
    "title": "Self-rankings as a predictor of scientific impact beyond peer review",
    "authors": "Buxin Su, …, Bingxin Zhao*, Weijie Su*",
    "note": "*co-corresponding authors",
    "venue": "Nature Computational Science",
    "year": 2026,
    "topic": "AI for Science and Research Platforms",
    "highlights": [
      "Cited as a basis for the <a href=\"https://blog.icml.cc/2026/01/12/introducing-icml-2026-policy-for-self-ranking-in-reviews/\">ICML 2026 self-ranking policy</a>.",
      "Featured in <a href=\"https://www.nature.com/articles/s43588-026-01046-1\">Nature Computational Science News &amp; Views</a> and a <a href=\"https://www.nature.com/articles/d41586-026-00059-0\">Nature Index research highlight</a>, and covered by <a href=\"https://penntoday.upenn.edu/news/wharton-ai-initiative-why-authors-are-better-predicting-impact-peer-review\">Penn Today</a>, <a href=\"https://www.thedp.com/article/2026/09/penn-artificial-intelligence-peer-review-ranking-study-wharton\">The Daily Pennsylvanian</a>, and <a href=\"https://ai-analytics.wharton.upenn.edu/insights/why-authors-are-better-at-predicting-impact-than-peer-review/\">Wharton AI &amp; Analytics Insight</a>."
    ],
    "links": [
      {
        "label": "Paper",
        "url": "https://www.nature.com/articles/s43588-026-01039-0"
      }
    ]
  },
  {
    "title": "Multi-organ imaging genetics: towards an integrated view of brain, body and brain diseases",
    "authors": "Zirui Fan and Bingxin Zhao",
    "venue": "Nature Reviews Neurology",
    "year": 2026,
    "topic": [
      "Inter-organ Connections",
      "AI for Science and Research Platforms"
    ],
    "highlights": [],
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1038/s41582-026-01276-x"
      }
    ]
  },
  {
    "title": "Inferring multi-organ genetic connections using imaging and clinical data through Mendelian randomization",
    "authors": "Juan Shu, …, Bingxin Zhao",
    "venue": "Nature Biomedical Engineering",
    "year": 2026,
    "topic": [
      "Inter-organ Connections",
      "Aging and Disease Risk"
    ],
    "highlights": [
      "2023 ASHG Reviewers’ Choice Award (top 10%)."
    ],
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1038/s41551-025-01554-x"
      }
    ]
  },
  {
    "title": "The landscape of plasma proteomic links to human organ imaging",
    "authors": "Zirui Fan, …, Bingxin Zhao",
    "venue": "Nature Communications",
    "year": 2026,
    "topic": "Inter-organ Connections",
    "highlights": [
      "Selected for Nature Communications <a href=\"https://www.nature.com/collections/ecgchegdhe\">Editors’ Highlights</a> in translational and clinical research (the 50 best recent papers in the area)."
    ],
    "links": [
      {
        "label": "Paper",
        "url": "https://www.nature.com/articles/s41467-026-74715-4"
      }
    ]
  },
  {
    "title": "Mapping rare protein-coding variants on multi-organ imaging traits",
    "authors": "Yijun Fan, …, Bingxin Zhao",
    "venue": "Nature Communications",
    "year": 2026,
    "topic": "Inter-organ Connections",
    "highlights": [
      "2024 ASHG Reviewers’ Choice Award (top 10%)."
    ],
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1038/s41467-025-67431-y"
      }
    ]
  },
  {
    "title": "Eye-brain connections revealed by multimodal retinal and brain imaging genetics",
    "authors": "Bingxin Zhao et al.",
    "venue": "Nature Communications",
    "year": 2024,
    "topic": "Inter-organ Connections",
    "highlights": [],
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1038/s41467-024-50309-w"
      }
    ]
  },
  {
    "title": "Transcriptome-wide association analysis of brain structures yields insights into pleiotropy with complex neuropsychiatric traits",
    "authors": "Bingxin Zhao et al.",
    "venue": "Nature Communications",
    "year": 2021,
    "topic": "Genetics of the Human Brain",
    "highlights": [],
    "links": [
      {
        "label": "Paper",
        "url": "https://www.nature.com/articles/s41467-021-23130-y"
      }
    ]
  },
  {
    "title": "High-dimensional statistical inference for linkage disequilibrium score regression and its cross-ancestry extensions",
    "authors": "Fei Xue and Bingxin Zhao",
    "venue": "Annals of Statistics",
    "year": 2025,
    "topic": "Statistical Methods and Theory",
    "highlights": [
      "Recognized by the 2025 <a href=\"https://imstat.org/2025/03/22/bingxin-zhao-receives-2025-ims-tweedie-new-researcher-award/\">IMS (Institute of Mathematical Statistics) Tweedie New Researcher Award</a>."
    ],
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1214/25-AOS2523"
      }
    ]
  },
  {
    "title": "On block-wise and reference panel-based estimators for genetic data prediction in high dimensions",
    "authors": "Bingxin Zhao, Shurong Zheng, and Hongtu Zhu",
    "venue": "Annals of Statistics",
    "year": 2024,
    "topic": "Statistical Methods and Theory",
    "highlights": [],
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1214/24-AOS2378"
      }
    ]
  },
  {
    "title": "Analyzing cross-trait genetic architecture with the BIGA cloud computing platform",
    "authors": "Yujue Li, …, Bingxin Zhao",
    "venue": "Journal of the American Statistical Association",
    "year": 2026,
    "topic": "AI for Science and Research Platforms",
    "highlights": [],
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1080/01621459.2026.2615068"
      },
      {
        "label": "Website",
        "url": "https://bigagwas.org/"
      }
    ]
  },
  {
    "title": "Estimating trans-ancestry genetic correlation with unbalanced data resources",
    "authors": "Bingxin Zhao, Xiaochen Yang, and Hongtu Zhu",
    "venue": "Journal of the American Statistical Association",
    "year": 2024,
    "topic": "Statistical Methods and Theory",
    "highlights": [],
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1080/01621459.2024.2344703"
      }
    ]
  },
  {
    "title": "On genetic correlation estimation with summary statistics from genome-wide association studies",
    "authors": "Bingxin Zhao and Hongtu Zhu",
    "venue": "Journal of the American Statistical Association",
    "year": 2022,
    "topic": "Statistical Methods and Theory",
    "highlights": [
      "2020 ENAR Distinguished Student Paper Award."
    ],
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1080/01621459.2021.1906684"
      }
    ]
  },
  {
    "title": "On polygenic risk scores for complex polygenic trait prediction",
    "authors": "Bingxin Zhao and Fei Zou",
    "venue": "Biometrics",
    "year": 2022,
    "topic": "Statistical Methods and Theory",
    "highlights": [],
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1111/biom.13466"
      }
    ]
  },
  {
    "title": "Cross-trait prediction accuracy of high-dimensional ridge-type estimators in genome-wide association studies",
    "authors": "Bingxin Zhao, Fei Zou, and Hongtu Zhu",
    "venue": "Biometrics",
    "year": 2023,
    "topic": "Statistical Methods and Theory",
    "highlights": [],
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1111/biom.13661"
      }
    ]
  },
  {
    "title": "Large-scale GWAS reveals genetic architecture of brain white matter microstructure and genetic overlap with cognitive and mental health traits",
    "authors": "Bingxin Zhao et al.",
    "venue": "Molecular Psychiatry",
    "year": 2021,
    "topic": "Genetics of the Human Brain",
    "highlights": [],
    "links": [
      {
        "label": "Paper",
        "url": "https://www.nature.com/articles/s41380-019-0569-z"
      }
    ]
  },
  {
    "title": "PennPRS: a centralized cloud computing platform for efficient polygenic risk score training in precision medicine",
    "authors": "Jin Jin, …, Bingxin Zhao",
    "venue": "Nature Methods (accepted)",
    "year": 2026,
    "topic": [
      "AI for Science and Research Platforms",
      "Statistical Methods and Theory"
    ],
    "highlights": [
      "2025 ASHG Reviewers’ Choice Award (top 10%)."
    ],
    "links": [
      {
        "label": "Preprint",
        "url": "https://doi.org/10.1101/2025.02.07.25321875"
      },
      {
        "label": "Website",
        "url": "https://pennprs.org/"
      }
    ]
  },
  {
    "title": "A multi-cohort genome-wide association study in African ancestry individuals reveals risk loci for primary open-angle glaucoma",
    "authors": "Shefali S. Verma, …, Bingxin Zhao, …, Joan M. O’Brien",
    "venue": "Cell",
    "year": 2024,
    "topic": "Aging and Disease Risk",
    "highlights": [],
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1016/j.cell.2023.12.006"
      }
    ]
  },
  {
    "title": "The genetic architecture of biological age in nine human organ systems",
    "authors": "Junhao Wen, …, Bingxin Zhao, …, Christos Davatzikos",
    "venue": "Nature Aging",
    "year": 2024,
    "topic": "Aging and Disease Risk",
    "highlights": [],
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1038/s43587-024-00662-8"
      }
    ]
  },
  {
    "title": "UKB-MDRMF: a multi-disease risk and multimorbidity framework based on UK Biobank data",
    "authors": "Yukang Jiang*, Bingxin Zhao*, …, Hongtu Zhu",
    "note": "*co-first authors",
    "venue": "Nature Communications",
    "year": 2025,
    "topic": "Aging and Disease Risk",
    "highlights": [],
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1038/s41467-025-58724-3"
      }
    ]
  },
  {
    "title": "Early vascular aging determined by three-dimensional aortic geometry: genetic determinants and clinical consequences",
    "authors": "Cameron Beeche, Bingxin Zhao, …, Julio A. Chirinos",
    "venue": "Circulation",
    "year": 2025,
    "topic": "Aging and Disease Risk",
    "highlights": [],
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1161/CIRCULATIONAHA.125.074554"
      }
    ]
  },
  {
    "title": "Geometric aging of the thoracic aorta: insights from 2 large cohorts",
    "authors": "Cameron A. Beeche, …, Bingxin Zhao, …, Julio A. Chirinos",
    "venue": "Hypertension",
    "year": 2025,
    "topic": "Aging and Disease Risk",
    "highlights": [],
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1161/HYPERTENSIONAHA.125.25259"
      }
    ]
  },
  {
    "title": "The genetic architecture of multimodal human brain age",
    "authors": "Junhao Wen, Bingxin Zhao, …, Christos Davatzikos",
    "venue": "Nature Communications",
    "year": 2024,
    "topic": [
      "Genetics of the Human Brain",
      "Aging and Disease Risk"
    ],
    "highlights": [],
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1038/s41467-024-46796-6"
      }
    ]
  },
  {
    "title": "A genetically informed brain atlas for enhancing brain imaging genomics",
    "authors": "Jingxuan Bao, …, Bingxin Zhao, …, Li Shen",
    "venue": "Nature Communications",
    "year": 2025,
    "topic": "Genetics of the Human Brain",
    "highlights": [],
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1038/s41467-025-57636-6"
      }
    ]
  },
  {
    "title": "Cross-ancestry and sex-stratified genome-wide association analyses of brain white matter principal components",
    "authors": "Junlin Shen, …, Bingxin Zhao, …, Chunshui Yu",
    "venue": "Nature Communications (accepted in principle)",
    "year": 2026,
    "topic": "Genetics of the Human Brain",
    "highlights": [],
    "links": [
      {
        "label": "Preprint",
        "url": "https://doi.org/10.21203/rs.3.rs-6018863/v1"
      }
    ]
  },
  {
    "title": "The X chromosome’s influences on the human brain",
    "authors": "Zhiwen Jiang, …, Bingxin Zhao, …, Hongtu Zhu",
    "venue": "Science Advances",
    "year": 2025,
    "topic": "Genetics of the Human Brain",
    "highlights": [],
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1126/sciadv.adq5360"
      }
    ]
  },
  {
    "title": "A phenome-wide association and Mendelian randomization study for suicide attempt within UK Biobank",
    "authors": "Meiyan Huang, …, Bingxin Zhao, …, Wenliang Pan",
    "venue": "Molecular Psychiatry",
    "year": 2026,
    "topic": "Aging and Disease Risk",
    "highlights": [],
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1038/s41380-025-03214-7"
      }
    ]
  },
  {
    "title": "Large-scale evaluation of proteomic and polygenic risk scores reveals complementary contributions to incident disease prediction",
    "authors": "Jakob Woerner, …, Bingxin Zhao, …, Dokyoon Kim",
    "venue": "Nature Genetics (accepted in principle)",
    "year": 2026,
    "topic": "Aging and Disease Risk",
    "highlights": [],
    "links": [
      {
        "label": "Preprint",
        "url": "https://doi.org/10.1101/2025.07.10.25331242"
      }
    ]
  },
  {
    "title": "Benchmarking DNA foundation models for genomic and genetic tasks",
    "authors": "Haonan Feng, …, Bingxin Zhao, …, Chong Wu",
    "venue": "Nature Communications",
    "year": 2025,
    "topic": "AI for Science and Research Platforms",
    "highlights": [],
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1038/s41467-025-65823-8"
      }
    ]
  },
  {
    "title": "Generalizable CT vision-language modeling for population health and disease risk",
    "authors": "Cameron A. Beeche, …, Bingxin Zhao, …, Walter R. Witschey",
    "venue": "npj Digital Medicine",
    "year": 2026,
    "topic": [
      "AI for Science and Research Platforms",
      "Aging and Disease Risk"
    ],
    "highlights": [
      "Covered by <a href=\"https://lifespan.io/ai-extracts-broader-health-insights-from-routine-ct-scans/\">Lifespan.io</a>."
    ],
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1038/s41746-026-03257-2"
      }
    ]
  }
];

/* Order of the "by Topic" buttons and groups. */
window.TOPIC_ORDER = [
  "Inter-organ Connections",
  "Genetics of the Human Brain",
  "Statistical Methods and Theory",
  "AI for Science and Research Platforms",
  "Aging and Disease Risk"
];

/* Journal order used to sort papers within a topic or year: own papers (first, last,
   co-first, or co-corresponding author) come first, then contributing-author papers;
   each group follows this list, then newest first. Add new journals where they belong. */
window.JOURNAL_ORDER = [
  "Science",
  "Cell",
  "Nature Genetics",
  "Nature Reviews Neurology",
  "Nature Methods",
  "Nature Biomedical Engineering",
  "Nature Computational Science",
  "Nature Aging",
  "Annals of Statistics",
  "Journal of the American Statistical Association",
  "Circulation",
  "Nature Communications",
  "Science Advances",
  "Molecular Psychiatry",
  "npj Digital Medicine",
  "Hypertension",
  "Biometrics"
];
