import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Code2,
  Database,
  Server,
  Layout,
  Smartphone,
  PenTool,
  BarChart3,
  Wrench,
} from "lucide-react";

import thristoAppIcon from "../assets/thristo-app.png";
import thristoPartnerIcon from "../assets/thristo-partner.png";

export const portfolioData = {
  personalInfo: {
    name: "Narayanan M S",
    firstName: "Narayanan",
    initials: "NM",
    title: "Full Stack & Flutter Developer",
    tagline:
      "I build production-ready mobile and web applications — from pixel-perfect Flutter apps live on the App Store to scalable MERN platforms.",
    email: "narayanan.muralidhar2604@gmail.com",
    phone: "+91 9080423335",
    phoneDigits: "919080423335",
    location: "Coimbatore, India",
    availability: "Available for opportunities",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/narayananns",
        icon: Github,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/narayanan-ms/",
        icon: Linkedin,
      },
      {
        name: "Email",
        url: "mailto:narayanan.muralidhar2604@gmail.com",
        icon: Mail,
      },
      {
        name: "WhatsApp",
        url: "https://wa.me/919080423335",
        icon: MessageCircle,
      },
    ],
  },

  // Shown under the name in the hero, straight from the resume's career objective.
  specializations: ["MERN Stack", "Flutter", "Next.js", "Machine Learning"],

  stats: [
    { value: 3, suffix: "", label: "Apps live on app stores" },
    { value: 9, suffix: "+", label: "Projects shipped" },
    { value: 2, suffix: "", label: "Oracle certifications" },
    { value: 2, prefix: "#", suffix: "", label: "KEC Hackathon 2026" },
  ],

  about: {
    bio: "I'm a Full Stack Developer specializing in the MERN stack, Flutter and Next.js, currently pursuing my B.Tech in AI & Machine Learning at Kongu Engineering College. I've shipped cross-platform apps that are live on both the Google Play Store and the Apple App Store, integrated RESTful APIs against production backends, and translated Figma designs into pixel-perfect interfaces.",
    bioSecondary:
      "Beyond product work, I'm drawn to Machine Learning, Deep Learning and AI chatbot development — designing intelligent, user-centric solutions for real problems. I care about clean architecture, smooth interactions and interfaces that feel effortless to use.",
    highlights: [
      "Shipped Flutter apps to Google Play & the App Store, end to end",
      "Integrated REST APIs with an Odoo ERP backend using Riverpod",
      "Built ML Kit-based face validation for a live production app",
      "~95% accuracy CNN model for handwritten digit recognition",
    ],
    interests: [
      "Mobile App Development",
      "Web Development",
      "Machine Learning",
      "Deep Learning",
      "AI Chatbots",
      "UI/UX Design",
      "Data Visualization",
    ],
    softSkills: [
      "Team Collaboration",
      "Communication",
      "Problem Solving",
      "Logical Reasoning",
    ],
  },

  experience: [
    {
      role: "Flutter Developer",
      company: "Soulocal Technologies",
      type: "Freelance",
      duration: "Jul 2026 – Present",
      current: true,
      description: [
        "Developed and maintained a live production cross-platform delivery partner application using Flutter for Android and iOS.",
        "Built pixel-perfect, responsive UIs from Figma designs and integrated RESTful APIs with an Odoo ERP backend using Riverpod state management.",
        "Implemented advanced device features, including ML Kit-based face validation and Firebase push notifications.",
        "Collaborated with backend, UI/UX and QA teams to ship scalable features and performance improvements.",
      ],
      tech: ["Flutter", "Riverpod", "Odoo ERP", "ML Kit", "Firebase"],
    },
    {
      role: "Flutter Developer",
      company: "Thristo Market Place",
      type: "Freelance",
      duration: "Nov 2025 – Jun 2026",
      apps: [
        {
          name: "Thristo",
          subtitle: "Customer app",
          icon: thristoAppIcon,
          url: "https://play.google.com/store/apps/details?id=com.mycompany.thristoApp&hl=en_IN",
        },
        {
          name: "Thristo Partner",
          subtitle: "Seller app",
          icon: thristoPartnerIcon,
          url: "https://play.google.com/store/apps/details?id=com.mycompany.storeappthristo&hl=en_IN",
        },
      ],
      current: false,
      description: [
        "Built a live production cross-platform local-store partner application from scratch with Flutter, managing inventory, orders and store operations on Android and iOS.",
        "Built pixel-perfect, responsive UIs from Figma designs and engineered end-to-end features across both the partner and customer-facing apps.",
        "Implemented a Fashion AI-powered virtual try-on experience alongside a full-suite integration of RESTful APIs and Firebase services.",
        "Shipped both apps to the Google Play Store and Apple App Store.",
      ],
      tech: ["Flutter", "Dart", "REST APIs", "Firebase", "Figma"],
    },
  ],

  education: [
    {
      degree: "B.Tech — Artificial Intelligence & Machine Learning",
      institution: "Kongu Engineering College",
      location: "Erode, India",
      score: "CGPA 7.24 (6th semester)",
      year: "Sep 2023 – Present",
    },
    {
      degree: "HSC — Higher Secondary",
      institution: "Vijayalakshmi Matric Higher Secondary School",
      location: "Mettupalayam, India",
      score: "84%",
      year: "2022 – 2023",
    },
  ],

  skills: [
    {
      category: "Languages",
      icon: Code2,
      skills: ["Java", "JavaScript", "TypeScript", "Python", "Dart"],
    },
    {
      category: "Frontend",
      icon: Layout,
      skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      category: "Mobile",
      icon: Smartphone,
      skills: ["Flutter", "Riverpod", "ML Kit", "Play Store", "App Store"],
    },
    {
      category: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      category: "Databases",
      icon: Database,
      skills: ["MongoDB", "Firebase", "SQL", "SQLite"],
    },
    {
      category: "ML & AI",
      icon: BarChart3,
      skills: ["TensorFlow", "CNN", "Streamlit", "OpenCV"],
    },
    {
      category: "Design",
      icon: PenTool,
      skills: ["Figma", "Canva", "Illustrator"],
    },
    {
      category: "Tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "Power BI", "VS Code"],
    },
  ],

  projectFilters: ["All", "Mobile App", "Web App", "ML Project"],

  projects: [
    {
      title: "Tailoring Hub",
      description:
        "A MERN platform for machine trading and technician connectivity with secure payments, authentication and real-time data handling for seamless end-to-end workflows.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      type: "Web App",
      featured: true,
      link: "#",
      github: "https://github.com/narayananns/Tailoring-Hub",
    },
    {
      title: "Feastopedia",
      description:
        "A food discovery platform where users find and submit recipes, backed by an admin approval workflow and Redux-managed state.",
      tech: ["MERN Stack", "Tailwind CSS", "Redux"],
      type: "Web App",
      featured: true,
      link: "#",
      github: "https://github.com/narayananns/Feastopedia",
    },
    {
      title: "Handwritten Digit Classification",
      description:
        "A CNN model built with Python and Streamlit reaching ~95% accuracy, enabling real-time digit recognition directly from user input in the browser.",
      tech: ["Python", "CNN", "Streamlit"],
      type: "ML Project",
      featured: true,
      link: "#",
      github: "https://github.com/narayananns/Hand-written-digit-classifier",
    },
    {
      title: "Ledger App",
      description:
        "A Flutter expense tracker with Firebase integration for real-time data storage, giving a clear picture of day-to-day spending.",
      tech: ["Flutter", "Firebase", "Charts"],
      type: "Mobile App",
      featured: true,
      link: "#",
      github: "https://github.com/narayananns/Ledger-App-using-Flutter-",
    },
    {
      title: "FreshMart",
      description:
        "An online grocery platform with delivery-slot scheduling, inventory management and Stripe checkout for a seamless shopping experience.",
      tech: ["MERN Stack", "Stripe", "Leaflet"],
      type: "Web App",
      link: "#",
      github: "https://github.com/kirthiadhithya/Freashmart-Online-Grocery-Shopping-",
    },
    {
      title: "Smart Queue Manager",
      description:
        "A queue management system that streamlines customer flow and cuts waiting time with live token tracking.",
      tech: ["Flutter", "Dart"],
      type: "Mobile App",
      link: "#",
      github: "https://github.com/narayananns/Smart-Queue-Manager-",
    },
    {
      title: "To-Do List App",
      description:
        "A task manager that keeps daily activities organised with persistent local storage and a clean, focused UI.",
      tech: ["Flutter", "Dart"],
      type: "Mobile App",
      link: "#",
      github: "https://github.com/narayananns/To-Do-List-using-Flutter",
    },
    {
      title: "BMI Calculator",
      description:
        "A health-focused Flutter app that calculates Body Mass Index and presents results with clear, readable visual feedback.",
      tech: ["Flutter", "Dart"],
      type: "Mobile App",
      link: "#",
      github: "https://github.com/narayananns/Bmi_calculator",
    },
    {
      title: "Calculator App",
      description:
        "A Flutter calculator with a clean interface and full support for standard arithmetic operations.",
      tech: ["Flutter", "Dart"],
      type: "Mobile App",
      link: "#",
      github: "https://github.com/narayananns/calculator-app-using-Flutter",
    },
  ],

  certifications: [
    {
      name: "Oracle Apex Cloud Developer",
      issuer: "Oracle",
    },
    {
      name: "Oracle Certified Java SE 17 Developer",
      issuer: "Oracle",
    },
  ],

  achievements: [
    {
      title: "2nd Place — KEC Hackathon 2026",
      detail: "24-hour hackathon, Kongu Engineering College",
    },
  ],
};
