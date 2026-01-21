import { Github, Linkedin, Mail, FileText, Code, Database, Server, Layout, Smartphone } from "lucide-react";

export const portfolioData = {
  personalInfo: {
    name: "Narayanan M S",
    title: "MERN Stack Application & Flutter Developer",
    email: "narayanan.muralidhar2604@gmail.com",
    phone: "+91 7603824220",
    location: "Coimbatore, India",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/narayananns",
        icon: Github,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/narayanan-ms",
        icon: Linkedin,
      },
      {
        name: "Email",
        url: "mailto:narayanan.muralidhar2604@gmail.com",
        icon: Mail,
      },
    ],
  },
  roles: ["MERN Stack Developer", "Flutter Developer", "AIML Student"],
  about: {
    bio: "I am a passionate developer with a strong foundation in both web and mobile application development. Currently pursuing my B.Tech in AIML, I bridge the gap between intelligent algorithms and user-centric interfaces. My experience ranges from building pixel-perfect Flutter apps to robust MERN stack platforms.",
    interests: [
      "Full Stack Development",
      "Mobile App Development",
      "Machine Learning",
      "UI/UX Design",
      "Power BI"
    ],
  },
  experience: [
    {
      role: "Flutter Developer Intern",
      company: "Thristo Marketplace",
      duration: "Nov 2025 – Feb 2026",
      description: [
        "Built pixel-perfect responsive Flutter UI from Figma designs.",
        "Implemented modular widget architecture for scalability.",
        "Ensured smooth Android & iOS interactions and performance.",
        "Collaborated with backend team to integrate RESTful APIs.",
        "Integrated virtual try-on feature to enhance User Experience.",
      ],
    },
  ],
  education: [
    {
      degree: "B.Tech AIML",
      institution: "Kongu Engineering College",
      score: "CGPA 7.10*",
      year: "2023 - 2027",
    },
    {
      degree: "HSC",
      institution: "Vijayalakshmi MHSS",
      score: "84%",
      year: "2023",
    },
  ],
  skills: [
    {
      category: "Frontend",
      skills: ["React", "Tailwind CSS", "Flutter", "HTML5", "CSS3"],
      icon: Layout,
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Java", "JavaScript", "TypeScript"],
      icon: Server,
    },
    {
      category: "Database",
      skills: ["MongoDB", "Firebase", "SQL"],
      icon: Database,
    },
    {
      category: "ML / AI",
      skills: ["Python", "CNN", "Streamlit", "TensorFlow"],
      icon: Code,
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub"],
      icon: Smartphone,
    },
    {
        category: "UI/UX Design",
        skills: ["Figma", "Canva" , "Illustrator"],
        icon: Layout,
    },
    {
        category: "Data Analyst",
        skills: ["Power BI"],
        icon: Smartphone,
    }
  ],
  projects: [
    {
      title: "Feastopedia",
      description: "A comprehensive food discovery platform allowing users to find recipes, submit their own, and features an admin approval system.",
      tech: ["MERN Stack", "Tailwind CSS", "Redux"],
      type: "Website Application",
      link: "#",
      github: "#",
    },
    {
      title: "FreshMart",
      description: "Online grocery platform features delivery-slot scheduling and inventory management for a seamless shopping experience.",
      tech: ["MERN Stack", "Stripe", "Leaflet"],
      type: "Website Application",
      link: "#",
      github: "#",
    },
    {
      title: "Chat Application",
      description: "Real-time messaging application with authentication, media sharing, and instant notifications.",
      tech: ["Flutter", "Firebase", "Dart"],
      type: "Mobile App",
      link: "#",
      github: "#",
    },
    {
      title: "Ledger App",
      description: "Personal finance and expense tracking application with local SQL storage for offline access.",
      tech: ["Flutter", "SQLite", "Charts"],
      type: "Mobile App",
      link: "#",
      github: "#",
    },
    {
      title: "Handwritten Digit Classification",
      description: "Deep learning model capable of recognizing handwritten digits with high accuracy, visualized via Streamlit.",
      tech: ["Python", "CNN", "Streamlit"],
      type: "ML Project",
      link: "#",
      github: "#",
    },
    {
      title: "Lung Cancer Detection",
      description: "Medical imagery classifier using Convolutional Neural Networks to detect early signs of lung cancer.",
      tech: ["Python", "TensorFlow", "OpenCV"],
      type: "ML Project",
      link: "#",
      github: "#",
    },
  ],
  certifications: [
    "MongoDB Associate Developer",
    "Oracle Java SE17 Developer Professional",
  ],
};
