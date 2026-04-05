var Data = {
  profile: {
    picture: "assets/images/ProfilePicture.jpeg",
    about: "IT professional with 13 years of hands-on experience and a background in data analysis. Currently completing a Professional Certificate in Applied AI and Data Science through MIT Professional Education (May 2026). My goal is to transition into AI/ML full time — ideally remote.",
    email: "jacahal+website@gmail.com",
    resume: "assets/Jonathan-Cahal-Resume.pdf",
    githubUrl: "https://github.com/jcahal",
    linkedinUrl: "https://www.linkedin.com/in/jonathan-cahal/",
  },

  projects: [
    {
      status: "inProgress",
      name: "ML Pipeline API",
      description: "Classification model wrapped in a FastAPI service, containerized with Docker and deployed to AWS. MLflow tracks experiment runs and model versions.",
      image: "assets/images/ml-pipeline-api.png",
      imageAlt: "MLflow experiment tracking dashboard showing model runs and metrics.",
      source: "https://github.com/jcahal/ml-pipeline-api",
      url: null,
      tags: ["Python", "FastAPI", "Docker", "AWS", "MLflow"]
    },
    {
      status: "inProgress",
      name: "Sentiment Classifier",
      description: "Fine-tuned DistilBERT model for text sentiment analysis, served via FastAPI with a Vue.js frontend. Enter any text and get a real-time prediction.",
      image: "assets/images/sentiment-classifier.png",
      imageAlt: "Sentiment classifier web interface showing a text input and live prediction result.",
      source: "https://github.com/jcahal/sentiment-classifier",
      url: "https://your-live-demo-url-here.com",
      tags: ["PyTorch", "HuggingFace", "FastAPI", "Vue.js", "NLP"]
    },
    {
      status: "planned",
      name: "Model Monitoring System",
      description: "Data drift detection layer built on top of a deployed ML model. Evidently AI runs scheduled comparisons against training data baselines and surfaces drift reports via API.",
      image: "assets/images/model-monitoring.png",
      imageAlt: "Evidently AI drift report showing feature distribution shifts over time.",
      source: "https://github.com/jcahal/model-monitoring",
      url: null,
      tags: ["Python", "Evidently AI", "FastAPI", "Docker", "MLOps"]
    },
    {
      status: "complete",
      name: "CSV Data Pipeline",
      description: "Locally configureable ETL pipeline built with OOP and a CLI interface. Handles validation, null removal, normalization, and encoding.",
      image: "assets/images/CSVPipelineProject.png",
      imageAlt: "Terminal output showing the pipeline processing a CSV file end to end.",
      source: "https://github.com/jcahal/csv-pipeline",
      url: null,
      tags: ["Python", "pandas", "OOP", "CLI", "argparse"]
    },
    {
      status: "complete",
      name: "E-Rate Scout",
      description: "Full-stack SaaS platform for exploring and monitoring the FCC's E-Rate program. Search millions of data points across forms, entities, and providers with real-time filters, interactive visualizations, and daily change alerts.",
      image: "assets/images/ERateScoutProject.png",
      imageAlt: "E-Rate Scout App screenshot",
      source: null,
      url: "https://eratescout.com",
      tags: ["Vue.js", "Appwrite", "Fullstack", "SaaS", "Production"]
    },
    {
      status: 'complete',
      name: "ANSR Ascend Project",
      description: "As lead firmware engineer, designed and developed sensory, recording and communications systems for a high altitude balloon payload — collecting the most data points in program history.",
      image: "assets/images/AscendProject.JPG",
      imageAlt: "Ascend project payloads photographed at near space altitude.",
      source: "https://github.com/PC-Ascend-Team",
      url: "http://pc-ascend-team.github.io",
      tags: ["C/C++", "Embedded Systems", "Firmware", "Sensors"]
    },
    {
      status: 'complete',
      name: "incoGNITO",
      description: "Self-destructing secret message app. Messages are encrypted and permanently deleted on first read. Built with Vue.js, Express, and MongoDB.",
      image: "assets/images/GnitoProject.png",
      imageAlt: "incoGNITO app screenshot",
      source: "https://github.com/jcahal/gnito",
      url: "https://gnito-app.onrender.com",
      tags: ["Vue.js", "Node.js", "MongoDB", "Fullstack"]
    }
  ],

  experience: [
    {
      company: "Champion Schools",
      title: "IT Director",
      dateRange: "2012 – Present",
      bullets: [
        "Built and scaled the organization's IT department from the ground up, growing from zero infrastructure to a multi-site operation supporting 120 staff and 1,500 students across 3 locations.",
        "Authored and secured $1.1M+ in technology grants — identifying funding opportunities, writing proposals independently, and managing award allocation across network infrastructure and hardware.",
        "Analyze student enrollment and retention data year-over-year, identifying trends that directly influenced leadership's marketing decisions.",
        "Use GA4 to track and correlate web traffic patterns with active marketing campaigns, providing data-backed validation of campaign timing and effectiveness."
      ]
    },
    {
      company: "Pear, LLC",
      title: "Founder & President",
      dateRange: "2015 – Present",
      bullets: [
        "Founded and operate a small web services company offering SaaS solutions and custom web design.",
        "Designed and developed client websites end-to-end, handling everything from architecture to deployment.",
        "Built and maintain a live SaaS product independently, managing all development, infrastructure, and client relationships."
      ]
    },
  ],

  education: [
    {
      institution: "MIT Professional Education",
      credential: "Professional Certificate – Applied AI and Data Science",
      dateRange: "January 2026 – May 2026",
      notes: "In Progress"
    },
    {
      institution: "Arizona State University",
      credential: "B.S. Computer Systems Engineering",
      dateRange: "2021",
      notes: "Magna Cum Laude, 3.75 GPA"
    }
  ],

  skillGroups: [
    {
      name: "Languages & Frameworks",
      skills: ["JavaScript", "Python", "C/C++", "Java", "Vue.js", "NodeJS"]
    },
    {
      name: "Infrastructure & Tools",
      skills: ["Git", "Docker", "MongoDB", "WordPress", "Networking", "Embedded Linux"]
    },
    {
      name: "Currently Developing",
      skills: ["PyTorch", "scikit-learn", "FastAPI", "MLflow", "SQL"]
    }
  ]
}
