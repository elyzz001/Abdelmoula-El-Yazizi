import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  // =====================
  // Machine Learning / AI
  // =====================
  {
    name: "PyTorch",
    description:
      "Build and optimize deep learning models, including generative models, RBMs, and custom architectures.",
    rating: 5,
    icon: Icons.pytorch,
  },
  {
    name: "TensorFlow",
    description:
      "Design neural networks, train RBMs, and run end-to-end ML pipelines with GPUs.",
    rating: 4,
    icon: Icons.tensorflow,
  },
  {
    name: "Scikit-learn",
    description:
      "Perform data preprocessing, classical ML modeling, cross-validation, and rapid experimentation.",
    rating: 5,
    icon: Icons.sklearn,
  },
  {
    name: "Generative Models (RBM, qGAN)",
    description:
      "Design, train, and analyze classical and quantum-enhanced generative models for structured and high-dimensional data.",
    rating: 5,
    icon: Icons.mlBrain,
  },

  // =====================
  // Data Science & Analytics
  // =====================
  {
    name: "Python",
    description:
      "Highly experienced in scientific computing, data processing, modeling, automation, and research workflows.",
    rating: 5,
    icon: Icons.python,
  },
  {
    name: "SQL",
    description:
      "Write optimized queries, joins, aggregations, and analytical queries for data pipelines and dashboards.",
    rating: 4,
    icon: Icons.sql,
  },
  {
    name: "Pandas & NumPy",
    description:
      "Efficiently manipulate, clean, and analyze large datasets with vectorized operations.",
    rating: 5,
    icon: Icons.pandas,
  },
  {
    name: "Matplotlib",
    description:
      "Create clear, publication-quality visualizations for research and analytics.",
    rating: 5,
    icon: Icons.matplotlib,
  },

  // =====================
  // Quantum Computing
  // =====================
  {
    name: "D-Wave Quantum Annealing",
    description:
      "Implement QUBOs, train quantum-assisted RBMs, analyze sampling performance, and benchmark against MCMC.",
    rating: 5,
    icon: Icons.dWave,
  },
  {
    name: "Qiskit",
    description:
      "Develop variational circuits, qGANs, TPQ state simulations, and quantum machine learning experiments.",
    rating: 4,
    icon: Icons.qiskit,
  },
  {
    name: "Quantum Algorithms (QA, TPQ, QML)",
    description:
      "Research and implement quantum state generation, optimization, and annealing-based learning.",
    rating: 5,
    icon: Icons.mlBrain,
  },

  // =====================
  // High-Performance Computing & Optimization
  // =====================
  {
    name: "C/C++",
    description:
      "Develop efficient, low-level, high-performance simulation and optimization code.",
    rating: 4,
    icon: Icons.cpp,
  },
  {
    name: "Parallel Programming",
    description:
      "Use multiprocessing, multithreading, vectorization, and HPC techniques for large-scale workloads.",
    rating: 4,
    icon: Icons.parallel,
  },
  {
    name: "MCMC & Stochastic Optimization",
    description:
      "Model physical systems, sample complex energy landscapes, and compare classical vs quantum sampling.",
    rating: 5,
    icon: Icons.mlBrain,
  },

  // =====================
  // Engineering & Embedded Systems
  // =====================
  {
    name: "Embedded C/C++",
    description:
      "Develop, test, and debug firmware for STM32, AVR, and PIC microcontrollers.",
    rating: 4,
    icon: Icons.cpp,
  },
  {
    name: "PCB & Hardware Design",
    description:
      "Design and test mixed-signal boards using Altium, LTspice, and industry-standard tools.",
    rating: 4,
    icon: Icons.work,
  },
  {
    name: "Hardware Testing & Validation",
    description:
      "Perform board bring-up, debugging, signal integrity testing, and automated validation.",
    rating: 5,
    icon: Icons.check,
  },

  // =====================
  // Tools & Dev Environment
  // =====================
  {
    name: "Git & GitHub",
    description:
      "Version control, branching strategies, collaborative workflows, and CI/CD basics.",
    rating: 5,
    icon: Icons.gitHub,
  },
  {
    name: "Linux",
    description:
      "Proficient with command-line workflows for development, automation, and HPC environments.",
    rating: 5,
    icon: Icons.linux,
  },
  {
    name: "Docker",
    description:
      "Create reproducible development environments for ML, HPC, and experimental research.",
    rating: 4,
    icon: Icons.docker,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
