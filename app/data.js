var Data = {
  about: "Computer Systems Engineer with a nearly-complete MIT Professional Certificate in AI/ML. I build end-to-end machine learning systems — training pipelines, containerized APIs, production monitoring. Looking for remote ML Engineer roles.",

  projects: [
    {
      name: "ML Pipeline API",
      description: "Classification model wrapped in a FastAPI service, containerized with Docker and deployed to AWS. MLflow tracks experiment runs and model versions.",
      image: "assets/images/ml-pipeline-api.png",
      imageAlt: "ML Pipeline API project screenshot",
      source: "https://github.com/jcahal/ml-pipeline-api",
      url: null
    },
    {
      name: "PyTorch Sentiment Classifier",
      description: "DistilBERT fine-tuned for sentiment classification, served via FastAPI. Vue.js frontend for live inference.",
      image: "assets/images/sentiment-classifier.png",
      imageAlt: "PyTorch Sentiment Classifier project screenshot",
      source: "https://github.com/jcahal/sentiment-classifier",
      url: "https://github.com/jcahal/sentiment-classifier"
    },
    {
      name: "Model Monitoring System",
      description: "Evidently AI integration for detecting data drift on a deployed model. Scheduled reports and alerting when feature distributions shift.",
      image: "assets/images/model-monitoring.png",
      imageAlt: "Model Monitoring System project screenshot",
      source: "https://github.com/jcahal/model-monitoring",
      url: null
    },
    {
      name: "Production SaaS App",
      description: "Appwrite backend, Vue.js frontend, real users in production. Private repo.",
      image: "assets/images/saas-app.png",
      imageAlt: "Production SaaS App screenshot",
      source: null,
      url: null
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
