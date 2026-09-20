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
  ShoppingBag,
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
      "Full Stack Developer specializing in the MERN stack, Flutter, and Next.js, with hands-on experience building and deploying scalable web and mobile applications. Experienced in developing production-ready Flutter applications, integrating RESTful APIs, creating pixel-perfect user interfaces, and publishing applications on both the Google Play Store and Apple App Store. Passionate about Machine Learning, Deep Learning, AI chatbot development, and e-commerce technologies including WordPress and WooCommerce, with a focus on designing intelligent, user-centric solutions for real-world problems.",
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
        // Routed to the on-page form instead of mailto: a submission reaches the
        // inbox reliably, where a mail client hand-off often does not.
        name: "Email",
        scrollTo: "contact",
        icon: Mail,
      },
      {
        name: "WhatsApp",
        url: "https://wa.me/919080423335",
        icon: MessageCircle,
      },
    ],
  },

  // Narrated when a visitor taps Overview in the hero. Written to be heard, not read:
  // short sentences, expanded abbreviations, no on-screen-only references.
  overview:
    "Hello, and welcome. You are visiting the portfolio of Narayanan M S. Here is a short overview of who he is and what he does. Narayanan is a Full Stack Developer based in Coimbatore, India, currently pursuing a B.Tech in Artificial Intelligence and Machine Learning at Kongu Engineering College. On the web, he builds with the MERN stack, that is MongoDB, Express, React and Node, along with Next.js, TypeScript and Tailwind CSS. On mobile, he builds cross platform applications with Flutter, working across the major state management approaches including Provider, Riverpod, GetX and BLoC, and structuring projects with clean architecture. He uses Firebase for real time data and authentication. Day to day he works with Git, GitHub, Figma, Power BI and Claude. He holds two Oracle certifications, Oracle Apex Cloud Developer and Oracle Certified Java SE 17 Developer. He also placed second in the KEC Hackathon 2026, a twenty four hour college level competition. Professionally, he currently works as a freelance Flutter Developer at Soulocal Technologies, where he builds and maintains a live production delivery partner application for Android and iOS. There he integrates REST APIs with an Odoo ERP backend, and has implemented features such as ML Kit based face validation and Firebase push notifications. Before that, from November 2025 to June 2026, he worked as a freelance Flutter Developer for Thristo Market Place. He built two production applications from scratch there, the Thristo customer app and the Thristo Partner seller app, including a Fashion A I powered virtual try on experience. Both applications are live today on the Google Play Store and the Apple App Store. Beyond that work, he has built many other projects across web, mobile and machine learning. Rather than list them here, scroll down to the Projects section to explore them, or visit his GitHub, where the source code is available. If you would like to get in touch, there are several ways. You can send an email, call the number listed, or use the message form in the Contact section below. Any of them will reach him. Thank you for taking the time to look through this portfolio. I hope you found it useful. Have a great day.",

  // Shown under the name in the hero, straight from the resume's career objective.
  specializations: ["MERN Stack", "Flutter", "Next.js", "Machine Learning"],

  stats: [
    { value: 3, suffix: "", label: "Live production apps" },
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
      "Implemented ML Kit-based face validation for a live production app",
      "Trained a CNN reaching ~95% accuracy on handwritten digit recognition",
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
        "Implemented advanced device features, including ML Kit-based face validation and Firebase push notifications, while leveraging Claude Pro for optimized debugging and code generation.",
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
          slug: "thristo",
          subtitle: "Customer app",
          icon: thristoAppIcon,
          play: "https://play.google.com/store/apps/details?id=com.mycompany.thristoApp&hl=en_IN",
          appStore: "https://apps.apple.com/in/app/thristo/id6742734112",
        },
        {
          name: "Thristo Partner",
          slug: "partner",
          subtitle: "Seller app",
          icon: thristoPartnerIcon,
          play: "https://play.google.com/store/apps/details?id=com.mycompany.storeappthristo&hl=en_IN",
          appStore: "https://apps.apple.com/in/app/thristo-partner/id6742093666",
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
      skills: [
        "Flutter",
        "Provider",
        "Riverpod",
        "GetX",
        "BLoC",
        "Clean Architecture",
        "ML Kit",
      ],
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
      category: "E-commerce",
      icon: ShoppingBag,
      skills: ["WordPress", "WooCommerce"],
    },
    {
      category: "Design",
      icon: PenTool,
      skills: ["Figma", "Canva", "Illustrator"],
    },
    {
      category: "Tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "Power BI", "VS Code", "Claude Pro"],
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
