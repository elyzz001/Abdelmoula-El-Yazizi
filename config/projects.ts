import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr?: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  
{
 
  id: "flight-price-prediction",
  companyName: "Flight Price Prediction",
  type: "Personal",
  category: ["ML/DS", "Regression", "Data Science"],
  shortDescription:
    "End-to-end machine learning pipeline for predicting flight prices using temporal, categorical, and route-based features.",
  githubLink: "https://github.com/elyzz001/ds-projects/tree/main/flight-price-prediction",
  techStack: ["Python", "Pandas", "Scikitlearn", "Numpy", "Matplotlib", "Seaborn"],
  startDate: new Date("2025-12-01"),
  endDate: new Date("2025-12-25"),
  companyLogoImg: "/projects/flight_price_prediction/img1.png",

  // ⛔ Remove Page Info entirely
  pagesInfoArr: [],

descriptionDetails: {
  paragraphs: [
    "#Objective",
    "To build a machine learning model that predicts flight prices based on journey date, departure time, arrival time, duration, airline, number of stops, and route information.",

    "#Key Steps",
    "The workflow started with data reading and cleaning, followed by extensive feature engineering to extract meaningful temporal and categorical insights from raw flight data.",
	"***Loaded the dataset and handled missing values using appropriate imputation techniques.",
    "***Extracted day, month, and weekday from Date_of_Journey.",
    "***Processed Dep_Time and Arrival_Time to extract hour and minute features.",
    "***Split Duration into hours and minutes for improved interpretability.",

    "#EDA",
    "Exploratory data analysis was performed to analyze flight departure patterns, understand how duration impacts pricing, and investigate frequently used airline-route combinations.",
      "***Analyzed flight departure patterns.",
      "***Explored how duration impacts price.",
      "***Investigated routes where Jet Airways is frequently used.",

    "#Encoding",
    "Categorical variables were encoded using both one-hot encoding and target-guided encoding, with custom mappings created for features such as Total_Stops.",
	"***Implemented one-hot encoding from scratch.",
      "***Applied target-guided encoding for categorical variables.",
      "***Created custom mappings for Total_Stops.",

    "#Modeling",
    "A complete machine learning pipeline was built, automated, and optimized using RandomizedSearchCV for hyperparameter tuning and feature selection.",
	"***Identified and handled outliers using statistical analysis and median imputation.",
      "***Performed feature selection using Mutual Information and model-based techniques.",
      "***Built and saved the ML model and automated the training pipeline.",
      "***Applied RandomizedSearchCV to improve model accuracy.",

    "#Outcome",
    "Successfully created a robust flight price prediction model with a well-engineered feature set and an optimized ML pipeline suitable for real-world pricing prediction.",
  ],
  bullets: [],
  
},
},
{
  id: "password-strength-nlp",
  companyName: "Password Strength Prediction",
  type: "Personal",
  category: ["ML/DS", "NLP", "Classification"],
  shortDescription:
    "Developed an NLP-based machine learning model to classify password strength using statistical and semantic features.",
  githubLink: "https://github.com/elyzz001/ds-projects/tree/main/password-strength-prediction",
  techStack: ["Python", "SQL", "Scikitlearn", "NLTK", "TF-IDF", "Matplotlib"],
  startDate: new Date("2025-11-15"),
  endDate: new Date("2025-12-01"),
  companyLogoImg: "/projects/password_strength_prediction/img1.png",
  pagesInfoArr: [],
  descriptionDetails: {
    paragraphs: [
		"#Objective:",
		"To build a Natural Language Processing (NLP) based machine learning model that predicts the strength of a password (weak, medium, or strong).",



		"#Key Highlights:",

		"##Data Sourcing:",
		"Retrieved and loaded data from an SQL database into a Python environment for analysis.",



		"##Text Preprocessing & Semantic Analysis:",
		"Analyzed password structure and patterns using semantic and statistical methods.",



		"##Feature Engineering:",
		"Extracted features such as password length, use of uppercase/lowercase letters, numbers, and special characters.",



		"##Feature Importance Analysis:",
		"Visualized feature relevance using violin plots and distribution charts to understand their impact on strength classification.",



		"##NLP Application:",
		"Applied TF-IDF vectorization to transform password text into meaningful numerical features for modeling.",



		"##Modeling & Evaluation:",

		"***Implemented multiple ML algorithms (e.g., Logistic Regression, Decision Trees, Random Forest).",

		"***Built a custom Python function to automate the modeling process.",

		"***Evaluated model performance using metrics like Accuracy, Precision, Recall, and F1 Score.",



		"#Outcome:",
		"Successfully built a password strength classifier powered by NLP and machine learning, capable of real-time password validation and classification.",      
	  ],
    bullets: [],
  },
},
{
  id: "stock-price-forecasting",
  companyName: "Stock Price Forecasting",
  type: "Personal",
  category: ["ML/DS", "Time Series", "Forecasting"],
  shortDescription:
    "Implemented ARIMA and Auto-ARIMA models to forecast stock prices and analyze financial time series behavior.",
  githubLink: "https://github.com/elyzz001/ds-projects/tree/main/stock-price-prediction",
  techStack: ["Python", "Pandas", "Statsmodels", "pmdarima", "Matplotlib"],
  startDate: new Date("2025-12-01"),
  endDate: new Date("2025-12-31"),
  companyLogoImg: "/projects/stock_vwap_pred/img1.png",
  pagesInfoArr: [],
  descriptionDetails: {
    paragraphs: [
			"# Objective:",
			"To predict future stock prices using time series forecasting techniques, with a focus on ARIMA and Auto-ARIMA models.",



			"# Key Highlights:",

			"## Exploratory Data Analysis:",
			"Performed in-depth time series analysis to identify trends, seasonality, and stock price volatility over time.",



			"## Data Preparation:",
			"Cleaned, indexed, and transformed time series data to fit forecasting models.",



			"## ARIMA Modeling:",

			"Broke down the intuition behind AR (Autoregressive), MA (Moving Average), and I (Integration) components of ARIMA.",

			"Implemented Auto-ARIMA for automated model selection using AIC and BIC scores.",



			"## Model Evaluation:",
			"Evaluated forecasting accuracy using RMSE and MAPE, and validated results through visual inspection and statistical testing.",



			"## Outcome:",
			"Built a reliable stock price forecasting model, providing valuable insights for financial analysis and investment planning.	",
			],
    bullets: [],
  },
},
{
  id: "movie-recommendation-nlp",
  companyName: "Movie Recommendation System",
  type: "Personal",
  category: ["ML/DS", "NLP", "Recommendation Systems"],
  shortDescription:
    "Built and deployed a movie recommendation system using NLP-based content filtering and multiple recommendation strategies.",
  githubLink: "https://github.com/elyzz001/ds-projects/tree/main/movie-recommendation",
  techStack: [
    "Python",
    "Pandas",
    "Scikitlearn",
    "TF-IDF",
    "NLP",
    "Streamlit"
  ],
  startDate: new Date("2025-12-01"),
  endDate: new Date("2025-12-31"),
  companyLogoImg: "/projects/movie_recomm_system/img1.png",
  pagesInfoArr: [  ],
  descriptionDetails: {
    paragraphs: [
      "# Objective:",
    "To build and deploy a complete movie recommendation system using Natural Language Processing techniques and multiple recommendation strategies to deliver personalized movie suggestions.",

    "# Key Highlights:",

    "## Data Processing & Feature Extraction:",
    "Processed movie metadata and textual descriptions to extract meaningful features for recommendation modeling.",

    "## Content-Based Recommendation:",
    "Applied TF-IDF vectorization to transform movie descriptions into numerical representations and used cosine similarity to build a content-based recommender system.",

    "## Recommendation Strategies:",
    "Implemented popularity-based and weighted average recommendation systems to provide flexible recommendation options alongside content-based filtering.",

    "## System Deployment:",
    "Deployed the complete recommendation system as an interactive web application using Streamlit, enabling real-time movie exploration and recommendations through an intuitive user interface.",

    "## Outcome:",
    "Successfully delivered an end-to-end movie recommendation platform combining NLP, multiple recommender strategies, and a production-ready Streamlit web application."    ],
    bullets: [],
  },
},
{
    id: "quantum-rbm",
    companyName: "Catastrophic Forgetting Mitigation",
    type: "Academic",
    category: ["ML", "Quantum Computing", "Generative Models", "Continual Learning"],
    shortDescription:
      "Developed a Quantum-Assisted Restricted Boltzmann Machine (RBM) to mitigate catastrophic forgetting and accelerate convergence in sequential learning tasks.",
    githubLink: "https://github.com/elyzz001/Classical-and-Quantum-Assisted-RBM",
    techStack: ["Python", "PyTorch", "D-Wave", "Quantum Annealing", "ML", "RBM"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-08-01"),
    companyLogoImg: "/projects/quantum-rbm/img2.png",
    pagesInfoArr: [
      {
        title: "RBM Model Architecture",
        description:
          "Overview of the RBM architecture integrating quantum annealer data for sequential learning tasks.",
        //imgArr: ["/projects/quantum-rbm/img3.png"],
      },
      {
        title: "Catastrophic Forgetting Results",
        description:
          "Visualization of the model's performance showing near-complete mitigation of forgetting.",
        //imgArr: ["/projects/quantum-rbm/img4.png"],
      },
      {
        title: "Convergence Analysis",
        description:
          "Comparison of convergence speed between classical-only and quantum-assisted training.",
        //imgArr: ["/projects/quantum-rbm/img1.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "As part of my PhD research, I implemented a Quantum-Assisted Restricted Boltzmann Machine (RBM) that leverages quantum annealing to enhance sequential learning. The project focused on mitigating catastrophic forgetting while improving convergence speed.",
        "The model achieved near-complete mitigation of forgetting (reducing from ~50% to near 0% over 1000 epochs) and demonstrated faster convergence compared to classical-only RBM training. This illustrates the practical benefit of incorporating quantum sampling in generative models.",
        "Technologies used include Python, PyTorch for classical RBM implementation, and D-Wave quantum annealer for generating training data samples. This work combines expertise in machine learning, quantum computing, and high-performance computation.",
      ],
      bullets: [
        "Developed a Quantum-Assisted RBM to address catastrophic forgetting in sequential tasks.",
        "Achieved near-zero forgetting over 1000 epochs while accelerating convergence.",
        "Implemented classical RBM in PyTorch and integrated quantum annealing data from D-Wave.",
        "Analyzed model performance with extensive experiments, visualizations, and benchmarks.",
        "Demonstrated feasibility of hybrid quantum-classical ML models for generative tasks.",
      ],
    },
  },
  {
    id: "ml-classification",
    companyName: "Quantum-Classical Training",
    type: "Academic",
    category: ["ML/DS", "Classification", "Generative Models"],
    shortDescription:
      "Implemented classical RBMs and baseline ML models for digit classification and feature learning on MNIST dataset.",
    githubLink: "https://github.com/Abdel-ElYazizi/ml-classification",
    techStack: ["Python", "TensorFlow", "PyTorch", "Numpy", "ML", "RBM"],
    startDate: new Date("2022-06-01"),
    endDate: new Date("2024-08-01"),
    companyLogoImg: "/projects/ml-classification/img2.png",
    pagesInfoArr: [
      {
        title: "Dataset and Preprocessing",
        description:
          "1000 MNIST images, class-balanced; preprocessing and normalization steps for RBM training.",
        //imgArr: ["/projects/ml-classification/img2.png"],
      },
      {
        title: "Model Architecture",
        description:
          "RBM models with 74 visible and 74 hidden units; trained using contrastive divergence.",
        //imgArr: ["/projects/ml-classification/img3.png"],
      },
      {
        title: "Performance Results",
        description:
          "Classification accuracy and generative reconstructions evaluated across multiple experiments.",
       // imgArr: ["/projects/ml-classification/img1.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This project involved building classical Restricted Boltzmann Machines (RBMs) and other ML models to study feature learning and classification performance on the MNIST dataset. The dataset included 1000 images across all digit classes, with experiments on subsets to analyze learning behavior.",
        "RBMs were implemented in Python using TensorFlow and PyTorch, with training guided by contrastive divergence. The project demonstrated model behavior with varying dataset sizes and highlighted limitations when trained with fewer classes or patterns.",
        "The work provided a foundation for later integration with quantum-assisted RBM methods, offering insights into convergence, reconstruction, and classification accuracy.",
      ],
      bullets: [
        "Implemented classical RBMs for feature learning and digit classification on MNIST.",
        "Used contrastive divergence (CD-k) and gradient descent for training.",
        "Evaluated accuracy and generative performance on multiple data subsets.",
        "Analyzed limitations with smaller datasets and reduced class counts.",
        "Established baseline results for comparison with quantum-assisted RBM models.",
      ],
    },
  },
 
  {
  id: "injector-spray",
    companyName: "Injector Spay Prediction",
    type: "Personal",
    category: ["ML", "Regression", "Predictive Modeling","Decision Trees"],
    shortDescription:
      "Built predictive models for injector spray profiles, analyzing experimental fluid dynamics data to improve accuracy and guide engineering decisions.",
    githubLink: "https://github.com/Abdel-ElYazizi/injector-spray",
    techStack: ["Python", "Scikitlearn", "Pandas", "Matplotlib", "Numpy", "Regression"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-01"),
    companyLogoImg: "/projects/injector-spray/img1.png",
    pagesInfoArr: [
      {
        title: "Experimental Dataset",
        description:
          "Time-series measurements including temperature, pressure, and spray penetration.",
       // imgArr: ["/projects/injector-spray/img1.png"],
      },
      {
        title: "Predictive Model Results",
        description:
          "Regression models achieving 90%+ prediction accuracy on liquid penetration and pressure-volume targets.",
        imgArr: ["/projects/ml-classification/img1.png"],
      },
      {
        title: "Visualization & Insights",
        description:
          "Interpretable plots guiding design and experimental optimization decisions.",
        imgArr: ["/projects/ml-classification/img1.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed regression-based predictive models using experimental data from injector spray tests. Features included time, temperature, and pressure measurements.",
        "Applied feature engineering and data preprocessing to enhance model accuracy. Achieved >90% predictive accuracy on liquid penetration and pressure-volume outputs.",
        "Visualized model predictions and experimental results to provide actionable insights for engineering design and experimentation.",
      ],
      bullets: [
        "Applied regression and feature engineering to experimental fluid dynamics data.",
        "Built predictive models with >90% accuracy for liquid penetration and pressure-volume.",
        "Produced interpretable visual analytics guiding engineering decisions.",
        "Established reproducible ML workflows for experimental datasets.",
      ],
    },
  },

  {
    id: "yolov3-vehicle",
    companyName: "Object Detection",
    type: "Academic",
    category: ["ML", "Computer Vision", "Object Detection"],
    shortDescription:
      "Applied YOLOv3 for object detection in autonomous vehicle simulations, improving robustness under occlusion and varied conditions.",
    githubLink: "https://github.com/Abdel-ElYazizi/yolov3-autonomous",
    techStack: ["Python", "PyTorch", "YOLOv3", "OpenCV", "Computer Vision"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-05-01"),
    companyLogoImg: "/projects/yolov3-vehicle/img1.png",
    pagesInfoArr: [
      {
        title: "Simulation Environment",
        description: "Autonomous vehicle simulation dataset with multiple objects and occlusions.",
        //imgArr: ["/projects/yolov3-vehicle/img1.png"],
      },
      {
        title: "Detection Performance",
        description: "YOLOv3 predictions showing improved robustness to occlusion and lighting variation.",
       // imgArr: ["/projects/ml-classification/img1.png"],
      },
      {
        title: "Model Tuning",
        description:
          "Iterative hyperparameter tuning for better detection accuracy and reduced false positives.",
        //imgArr: ["/projects/ml-classification/img1.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Implemented YOLOv3 for object detection in autonomous vehicle simulations. Focused on improving robustness under occlusions and variable lighting conditions.",
        "Trained models with simulated datasets and performed iterative tuning to optimize detection performance.",
        "Demonstrated practical skills in computer vision pipelines, model evaluation, and data visualization for autonomous systems.",
      ],
      bullets: [
        "Applied YOLOv3 for object detection in simulated autonomous driving scenarios.",
        "Improved detection robustness under occlusion and varied environmental conditions.",
        "Performed hyperparameter tuning and model evaluation to enhance accuracy.",
        "Produced visualizations demonstrating detection performance and model reliability.",
      ],
    },
  },
];
export const featuredProjects = Projects.slice(0, 5);

