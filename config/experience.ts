import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "msu-research",
    position: "Graduate Research Assistant — Machine Learning",
    company: "Mississippi State University",
    location: "Starkville, MS",
    startDate: new Date("2021-01-01"),
    endDate: new Date("2025-12-31"),
    description: [
      "Research in generative modeling, probabilistic ML, and large-scale experimental design.",
      "Built and optimized ML pipelines, deep generative models, and sampling workflows.",
    ],
    achievements: [
      "Developed PyTorch generative models improving convergence and inference stability by 20–50%.",
      "Designed large-scale experiments comparing MCMC and quantum annealing sampling performance.",
      "Created reproducible ML pipelines with preprocessing, training, evaluation, and MLflow tracking.",
      "Implemented generative replay to eliminate catastrophic forgetting, reducing error from ~50% to ~0%.",
      "Published research on quantum-assisted ML optimization and sampling efficiency.",
    ],
    skills: [
      "Python",
      "PyTorch",
      "Tensorflow",
      "Scikitlearn",
      "Numpy",
      "Pandas",
      "MLflow",
      "Matplotlib",
      "MCMC",
    ],
    companyUrl: "https://www.msstate.edu",
    logo: "/experience/bcoe.jpg",
  },

  {
    id: "msu-ta",
    position: "Graduate Teaching Assistant",
    company: "Mississippi State University",
    location: "Starkville, MS",
    startDate: new Date("2020-08-01"),
    endDate: new Date("2021-01-01"),
    description: [
      "Supported instruction in digital logic and microcontroller programming.",
      "Helped students connect hardware behavior to algorithmic and statistical modeling concepts.",
    ],
    achievements: [
      "Improved lab debugging efficiency through structured troubleshooting methods.",
      "Developed hands-on exercises linking embedded systems and computational modeling.",
    ],
    skills: ["C", "C++", "Python", "EmbeddedC"],
    companyUrl: "https://www.msstate.edu",
    logo: "/experience/bcoe.jpg",
  },

   {
    id: "maks",
    position: "Project Engineer",
    company: "MAKS Inc.",
    location: "Troy, MI",
    startDate: new Date("2019-06-01"),
    endDate: new Date("2020-08-01"),
    description: [
      "Developed performance-critical C/C++ algorithms and optimization routines.",
      "Performed system-level debugging, profiling, and computational bottleneck analysis.",
    ],
    achievements: [
      "Improved computation throughput and memory efficiency with optimized C/C++ routines.",
      "Enhanced system reliability through structured performance profiling and root-cause diagnostics.",
      "Developed skills directly supporting efficient ML training, inference, and data-pipeline optimization.",
    ],
    skills: ["C", "C++", "Python", "Optimization"],
    companyUrl: "https://www.maks.com",
    logo: "/experience/maks.jfif",
  },
];
