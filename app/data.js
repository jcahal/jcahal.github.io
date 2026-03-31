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
      imageAlt: "ML Pipeline API project screenshot",
      source: "https://github.com/jcahal/ml-pipeline-api",
      url: null,
      tags: ["Python", "FastAPI", "Docker", "AWS", "MLflow"]
    },
    {
      name: "PyTorch Sentiment Classifier",
      description: "DistilBERT fine-tuned for sentiment classification, served via FastAPI. Vue.js frontend for live inference.",
      image: "assets/images/sentiment-classifier.png",
      imageAlt: "PyTorch Sentiment Classifier project screenshot",
      source: "https://github.com/jcahal/sentiment-classifier",
      url: "https://github.com/jcahal/sentiment-classifier",
      tags: ["Python", "PyTorch", "NLP", "FastAPI", "Vue.js"]
    },
    {
      name: "Model Monitoring System",
      description: "Evidently AI integration for detecting data drift on a deployed model. Scheduled reports and alerting when feature distributions shift.",
      image: "assets/images/model-monitoring.png",
      imageAlt: "Model Monitoring System project screenshot",
      source: "https://github.com/jcahal/model-monitoring",
      url: null,
      tags: ["Python", "Evidently AI", "MLOps", "Docker"]
    },
    {
      name: "Production SaaS App",
      description: "Appwrite backend, Vue.js frontend, real users in production. Private repo.",
      image: "assets/images/saas-app.png",
      imageAlt: "Production SaaS App screenshot",
      source: null,
      url: null,
      tags: ["Vue.js", "Appwrite", "Fullstack", "SaaS"]
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
