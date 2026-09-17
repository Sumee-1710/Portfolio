// ─── Portfolio Data ───────────────────────────────────────────────────────────
// All content is sourced from Sumeet Powar's resume and verified GitHub repos.
// Do not add information not present in those sources.

export const personal = {
  name: "Sumeet Powar",
  title: "AI/ML & Data Professional | Data Science | Generative AI",
  tagline:
    "Computer Science graduate with hands-on experience building machine learning, Generative AI, computer vision, NLP, and data analytics solutions using Python and SQL.",
  email: "sumeet.powar1710@gmail.com",
  phone: "+918928489835",
  location: "Pune / Mumbai, India",
  github: "https://github.com/Sumee-1710",
  linkedin: "https://www.linkedin.com/in/sumeet-powar",
  resumeFile: "/Sumeet-Powar-Resume.pdf",
};

export const about = {
  paragraphs: [
    "I'm a Computer Science graduate specialising in AI and Analytics from MIT School of Computing, Pune. My work focuses on machine learning, data analytics, computer vision, and Generative AI, with Python as my primary programming language.",
    "I've built end-to-end projects across computer vision (YOLO-based player re-identification), generative AI (natural language to SQL with LangChain and GPT), and data processing and analytics (automated financial reconciliation). I also completed a Data Analyst internship where I worked with 50,000+ real customer interaction records and built interfaces and dashboards using Streamlit to surface insights.",
    "I'm actively looking for entry-level roles in Data Science, Machine Learning, Data Analytics, AI/ML Engineering, or Generative AI Development where I can keep building practical, high-impact solutions.",
  ],
};

export const skills = [
  {
    category: "Programming",
    items: ["Python", "SQL", "R"],
  },
  {
    category: "Databases & Data",
    items: [
      "MySQL",
      "MongoDB (Basics)",
      "SQLite",
      "CSV-based data management",
      "BigQuery",
    ],
  },
  {
    category: "Machine Learning & Data Science",
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "TensorFlow",
      "PyTorch",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    category: "Generative AI & NLP",
    items: ["LangChain", "RAG", "FAISS", "Gemini API"],
  },
  {
    category: "Computer Vision",
    items: ["YOLO", "Ultralytics", "OpenCV", "DeepSORT"],
  },
  {
    category: "Applications & BI",
    items: ["Streamlit", "Power BI"],
  },
  {
    category: "Cloud & Tools",
    items: [
      "AWS",
      "GCP",
      "Azure",
      "FastAPI",
      "Git/GitHub",
      "Jupyter",
      "Google Colab",
      "Apache Spark",
    ],
  },
  {
    category: "Languages",
    items: ["English", "Hindi", "Marathi", "German"],
  },
];

export const experience = [
  {
    role: "Data Analyst Intern",
    company: "CS Infocomm Private Limited",
    type: "Internship",
    period: "Jan 2026 – Apr 2026",
    location: "On-site · Mumbai, Maharashtra",
    bullets: [
      "Processed and analysed 50,000+ customer interaction records to identify trends in customer behaviour, agent performance, and call outcomes.",
      "Developed and optimised machine learning models, achieving 87% prediction accuracy for call outcome prediction.",
      "Designed and implemented data validation and quality-check frameworks, reducing inconsistent records and improving dataset reliability for analytics and reporting.",
      "Generated actionable insights through statistical analysis and visualisation, supporting data-driven decision-making and operational efficiency improvements.",
    ],
    tech: ["Python", "Pandas", "EDA", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Streamlit"],
  },
];

export const projects = [
  {
    id: "genai-data-analyst",
    name: "GenAI Data Analyst",
    role: "GenAI Developer / Python Developer",
    period: "Jun 2026 – Aug 2026",
    summary:
      "GenAI-powered BI platform that enables natural-language querying of CSV/Excel datasets, automated data profiling, visualization generation, anomaly detection, forecasting, and AI-powered business insight summarization.",
    description:
      "Built a GenAI-powered BI platform using the Gemini API and LangChain that allows users to query CSV/Excel datasets in plain English. The system uses LLM-based Text-to-Code generation with Pandas and SQL to answer data questions, runs automated data profiling, generates visualizations, detects anomalies, performs forecasting, and summarizes business insights using AI. Integrated RAG with FAISS embeddings and vector search for context-aware document analysis and conversational follow-up queries. Deployed through a Streamlit interface.",
    problem:
      "Business analysts without coding skills cannot independently explore datasets, generate visualizations, or extract insights from structured data. Manual analysis is slow and doesn't scale to conversational, follow-up queries.",
    approach:
      "LLM-based Text-to-Code generation converts natural-language questions into executable Pandas/SQL code against the uploaded dataset. RAG with FAISS enables context-aware document retrieval for follow-up queries. Streamlit provides the conversational interface and visualization output.",
    workflow: [
      "User uploads a CSV or Excel dataset via Streamlit",
      "Automated data profiling runs on the uploaded dataset",
      "User enters a natural-language question",
      "Gemini API generates Pandas/SQL code to answer the question",
      "Code executes against the dataset; results and visualizations are displayed",
      "RAG with FAISS enables context-aware follow-up queries",
      "AI summarizes key business insights from the analysis",
    ],
    features: [
      "Natural-language querying of CSV/Excel datasets via LLM Text-to-Code generation",
      "Automated data profiling on upload",
      "Visualization generation from natural-language requests",
      "Anomaly detection and forecasting",
      "AI-powered business insight summarization",
      "RAG with FAISS embeddings for context-aware document analysis and follow-up queries",
      "Conversational interface deployed via Streamlit",
    ],
    metrics: [],
    tech: ["Python", "Pandas", "SQLite", "Gemini API", "LangChain", "FAISS", "Scikit-learn", "Streamlit", "Git/GitHub", "RAG"],
    github: "https://github.com/Sumee-1710",
    live: null,
    color: "#ec4899",
  },
  {
    id: "sql-query-generator",
    name: "SQL Query Generator using Natural Language",
    role: "Generative AI Developer",
    period: "May 2026 – Jun 2026",
    summary:
      "NL-to-SQL system powered by LangChain that converts plain-English questions into executable SQL queries against a SQLite database.",
    description:
      "Built a LangChain-based SQL agent that accepts natural-language questions, reasons over the database schema, generates valid SQL, executes it against a SQLite database, and returns a formatted result. The system includes two agent scripts — one for a quotes SQLite database and one for the 11-table Chinook music database — with schema-aware prompting that significantly improved query reliability.",
    problem:
      "Non-technical users cannot write SQL, which limits their access to data stored in relational databases. A natural language interface removes that barrier without requiring custom query builders.",
    approach:
      "LangChain SQL agents connect an LLM to a SQLite database via SQLAlchemy. The agent inspects the schema, formulates a SQL query from the natural-language input, executes it, and returns the result in plain English. Schema-aware prompting further improves accuracy.",
    workflow: [
      "Natural language question entered by user",
      "LangChain SQL agent inspects database schema",
      "LLM generates candidate SQL query",
      "Query executed against SQLite database via SQLAlchemy",
      "Result returned to the user in plain language",
    ],
    features: [
      "Natural language to SQL conversion using LangChain SQL agents",
      "Supports the 11-table Chinook SQLite database and a custom quotes database",
      "Schema-aware prompting for improved query accuracy",
      "Interactive query interface via Streamlit",
    ],
    metrics: [
      { label: "SQL generation accuracy", value: "90%" },
      { label: "Execution accuracy", value: "95%" },
      { label: "Queries tested", value: "50+" },
      { label: "Query reliability improvement", value: "30%" },
    ],
    tech: ["Python", "LangChain", "SQL", "SQLite", "SQLAlchemy", "Streamlit", "Gemini API"],
    github: "https://github.com/Sumee-1710/SQL-Query-Generator-using-Natural-Language",
    live: null,
    color: "#7c6af7",
  },
  {
    id: "sports-reidentification",
    name: "Re-identification for Sports Analytics",
    role: "AI/ML Developer",
    period: "Dec 2025 – May 2026",
    summary:
      "Computer vision pipeline using YOLO for real-time player detection, tracking, and re-identification in sports video footage.",
    description:
      "Developed a computer vision pipeline that uses YOLO (via Ultralytics) to detect and track 20+ objects per frame in sports footage, maintaining consistent player identities across occlusions and re-entries. Model tuning and feature matching techniques were applied to improve tracking stability and re-identification accuracy, targeting reliable real-time sports analytics.",
    problem:
      "Tracking individual players consistently in fast-paced sports video is difficult due to frequent occlusions, players leaving and re-entering the frame, and visual similarity between teammates.",
    approach:
      "YOLO-based detection with Ultralytics provided frame-by-frame object detection. Feature matching and model tuning techniques were applied to improve identity consistency across frames, occlusions, and re-entries.",
    features: [
      "YOLO-based object detection tracking 20+ objects per frame",
      "Consistent identity maintenance across occlusions and re-entries",
      "Model tuning for improved detection accuracy",
      "Feature matching for re-identification stability",
      "Designed for real-time sports analytics workflows",
    ],
    metrics: [
      { label: "Objects tracked per frame", value: "20+" },
      { label: "Project ranking", value: "Top 5 at college level (2026)" },
    ],
    tech: ["Python", "YOLO", "Ultralytics", "OpenCV", "Roboflow", "TensorFlow", "Computer Vision"],
    github: "https://github.com/Sumee-1710",
    live: null,
    color: "#f59e0b",
  },
  {
    id: "transaction-reconciliation",
    name: "Transaction Reconciliation System",
    role: "Python Developer",
    period: "Jun 2026 – Aug 2026",
    summary:
      "Automated financial transaction reconciliation system that compares transaction and settlement records, classifies discrepancies by severity, and surfaces exception reports.",
    description:
      "Built an end-to-end reconciliation pipeline using Python and Pandas to perform 100% record-level validation between transaction and settlement datasets. The system detects five or more categories of financial exceptions — including duplicate transactions, missing settlements, amount mismatches, and settlement delays — then classifies each by severity. Results are surfaced through an interactive Streamlit dashboard for reconciliation analytics, issue tracking, and data quality monitoring.",
    problem:
      "Manual reconciliation of financial records is error-prone, time-consuming, and doesn't scale. Exceptions such as duplicates, missing settlements, and amount mismatches are hard to catch reliably at volume.",
    approach:
      "Automated matching using Python and Pandas with rule-based exception classification. Every record is validated, exceptions are tagged by category and severity, and an interactive dashboard provides real-time visibility into settlement health.",
    features: [
      "Automated comparison of transaction vs. settlement records",
      "Detection of 5+ exception categories: duplicates, missing settlements, amount mismatches, settlement delays",
      "Severity-based issue classification for prioritised investigation",
      "Automated exception reporting for financial operations monitoring",
      "Interactive Streamlit dashboard for reconciliation analytics and data quality monitoring",
    ],
    metrics: [
      { label: "Record-level validation", value: "100%" },
      { label: "Exception categories detected", value: "5+" },
    ],
    tech: ["Python", "Streamlit", "Pandas", "NumPy", "PyTorch"],
    github: "https://github.com/Sumee-1710",
    live: null,
    color: "#34d399",
  },
];

export const education = [
  {
    institution: "MIT School of Computing",
    location: "Pune, Maharashtra",
    degree: "Bachelor of Technology — Computer Science Engineering (AI and Analytics)",
    period: "Sep 2022 – May 2026",
    note: "Specialisation in Artificial Intelligence and Analytics",
  },
];

export const certifications = [
  {
    title: "Introduction to Machine Learning (4 courses)",
    issuer: "IBM",
    link: null,
  },
  {
    title: "AWS Academy Graduate — Cloud Foundations",
    issuer: "Amazon Web Services",
    link: null,
  },
  {
    title: "Databricks Fundamentals Accreditation",
    issuer: "Databricks",
    link: null,
  },
  {
    title: "AI Foundations for Business",
    issuer: "IBM",
    link: null,
  },
  {
    title: "Introduction to Business Analysis",
    issuer: "IBM",
    link: null,
  },
];

export const achievements = [
  {
    title: "2nd Place — Internal Hackathon",
    description:
      "Secured 2nd place among 600 competing teams in an internal hackathon and qualified for the Smart India Hackathon (SIH) 2024.",
    icon: "trophy",
  },
  {
    title: "Top 5 Project — College Level 2026",
    description:
      "Re-identification for Sports Analytics project was ranked among the Top 5 projects at the college level in 2026.",
    icon: "star",
  },
];
