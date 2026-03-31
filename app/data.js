var Data = {
  profile: {
    picture: "assets/images/ProfilePicture.jpeg",
    about: "Computer Systems Engineer with a nearly-complete MIT Professional Certificate in AI/ML. I build end-to-end machine learning systems — training pipelines, containerized APIs, production monitoring. Looking for remote ML Engineer roles.",
    email: "jacahal+website@gmail.com",
    resume: "assets/Jonathan-Cahal-Résumé.pdf",
    githubUrl: "https://github.com/jcahal",
    linkedinUrl: "https://www.linkedin.com/in/jonathan-cahal/",
  },

  projects: [
    {
      name: "ML Pipeline API",
      description: "Classification model wrapped in a FastAPI service, containerized with Docker and deployed to AWS. MLflow tracks experiment runs and model versions.",
      image: "assets/images/ml-pipeline-api.png",
      imageAlt: "MLflow experiment tracking dashboard showing model runs and metrics.",
      source: "https://github.com/jcahal/ml-pipeline-api",
      url: null,
      tags: ["Python", "FastAPI", "Docker", "AWS", "MLflow"]
    },
    {
      name: "Sentiment Classifier",
      description: "Fine-tuned DistilBERT model for text sentiment analysis, served via FastAPI with a Vue.js frontend. Enter any text and get a real-time prediction.",
      image: "assets/images/sentiment-classifier.png",
      imageAlt: "Sentiment classifier web interface showing a text input and live prediction result.",
      source: "https://github.com/jcahal/sentiment-classifier",
      url: "https://your-live-demo-url-here.com",
      tags: ["PyTorch", "HuggingFace", "FastAPI", "Vue.js", "NLP"]
    },
    {
      name: "Model Monitoring System",
      description: "Data drift detection layer built on top of a deployed ML model. Evidently AI runs scheduled comparisons against training data baselines and surfaces drift reports via API.",
      image: "assets/images/model-monitoring.png",
      imageAlt: "Evidently AI drift report showing feature distribution shifts over time.",
      source: "https://github.com/jcahal/model-monitoring",
      url: null,
      tags: ["Python", "Evidently AI", "FastAPI", "Docker", "MLOps"]
    },
    {
      name: "CSV Data Pipeline",
      description: "Modular ETL pipeline built with OOP — DataLoader, DataTransformer, and Reporter classes with a CLI interface. Handles validation, null removal, normalization, and encoding.",
      image: "assets/images/csv-pipeline.png",
      imageAlt: "Terminal output showing the pipeline processing a CSV file end to end.",
      source: "https://github.com/jcahal/csv-pipeline",
      url: null,
      tags: ["Python", "pandas", "OOP", "CLI", "argparse"]
    },
    {
      name: "E-Rate Scout",
      description: "Full-stack SaaS platform for exploring and monitoring the FCC's E-Rate program. Search millions of data points across forms, entities, and providers with real-time filters, interactive visualizations, and daily change alerts.",
      image: "assets/images/e-rate-scout.png",
      imageAlt: "E-Rate Scout App screenshot",
      source: null,
      url: "https://eratescout.com",
      tags: ["Vue.js", "Appwrite", "Fullstack", "SaaS", "Production"]
    },
    {
      name: "ANSR Ascend Project",
      description: "As lead firmware engineer, designed and developed sensory, recording and communications systems for a high altitude balloon payload — collecting the most data points in program history.",
      image: "assets/images/AscendProject.JPG",
      imageAlt: "Ascend project payloads photographed at near space altitude.",
      source: "https://github.com/PC-Ascend-Team",
      url: "http://pc-ascend-team.github.io",
      tags: ["C/C++", "Embedded Systems", "Firmware", "Sensors"]
    },
    {
      name: "incoGNITO",
      description: "Self-destructing secret message app. Messages are encrypted and permanently deleted on first read. Built with Vue.js, Express, and MongoDB, deployed on Render.",
      image: "assets/images/incognito.png",
      imageAlt: "incoGNITO app screenshot",
      source: "https://github.com/jcahal/gnito",
      url: "https://gnito-app.onrender.com",
      tags: ["Vue.js", "Node.js", "MongoDB", "Fullstack"]
    }
  ],

  skillGroups: [
    {
      name: "ML & Data",
      skills: ["Python", "PyTorch", "scikit-learn", "FastAPI", "MLflow", "Docker", "REST APIs"]
    },
    {
      name: "Web & Infra",
      skills: ["Vue.js", "JavaScript", "HTML/CSS", "Appwrite", "Git"]
    }
  ]
}
