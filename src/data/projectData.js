// src/data/projectData.js
import aerobotz from '../assets/aerobotz1.jpg';
import FoodApp1 from '../assets/FoodApp1.png';
import logo from '../assets/logo.png';
import aerobotz2 from '../assets/aerobotz2.png';
import aerobotz3 from '../assets/aerobotz3.png';
import aerobotz4 from '../assets/aerobotz4.png';
import aerobotz5 from '../assets/aerobotz5.png';
import zanvar1 from '../assets/zanvar1.jpg';
import zanvar2 from '../assets/zanvar2.jpg';
// import zanvar3 from '../assets/zanvar3.png';
// import zanvar4 from '../assets/zanvar4.png';  
// import { a } from 'framer-motion/client';

const projectData = [
  {
    id: 1,
    title: "Ground Control Station for Aerobotz",
    image: aerobotz, // Main display image for project cards
    images: [
      {
        src: aerobotz2,
        caption: "",
        type: "interface"
      },
      {
        src: aerobotz3,
        caption: "",
        type: "mobile"
      },
      {
        src: aerobotz4,
        caption: "",
        type: "hardware"
      },
      {
        src: aerobotz5,
        caption: "",
        type: "analytics"
      }
    ],
    summary: "Developed a tailored Ground Control Station for seamless AeroBotz drone operations.",
    description: "Built a dedicated Ground Control Station tailored for AeroBotz UAVs to support real-time telemetry monitoring, mission planning, and autonomous flight control. The system enables seamless UAV operations with live map tracking, waypoint-based navigation, and in-flight command execution. Designed with an intuitive interface to streamline mission workflows and improve drone deployment efficiency.",
    techStack: ["C++", "Qt", "MAVLink", "Networking"],
    features: [
      "Live telemetry monitoring",
      "Waypoint-based mission planning",
      "Autonomous flight control",
      "Map-based UAV tracking",
      "Simple and responsive UI"
    ],
    liveDemo: "https://smart-irrigation-demo.com",
    githubRepo: "https://github.com/yourusername/smart-irrigation",
    status: "completed"
  },
  {
    id: 2,
    title: "Food Ordering App",
    image: FoodApp1, // Main display image for project cards
    images: [
      {
        src: logo,
        caption: "Student Dashboard",
        type: "dashboard"
      },
      {
        src: logo,
        caption: "Teacher Interface",
        type: "interface"
      },
      {
        src: logo,
        caption: "Analytics View",
        type: "analytics"
      },
      {
        src: logo,
        caption: "Mobile App",
        type: "mobile"
      }
    ],
    summary: "Online Food Ordering TO Minimize Manual Error & Provide Better Customer Experience.",
    description: "A mobile application for a local restaurant, enabling customers to browse menus, place orders, and track deliveries. Built with Kotlin and Firebase for a robust and scalable solution.",
    techStack: ["Kotlin", "Firebase", "XML", "Cloudinory"],
    features: [
      "Role-based access control",
      "Push notifications for order updates",
      "Menu browsing with categories",
      "Admin Dashboard",
      "Enquiry Form & Feedback"
    ],
    liveDemo: "https://edutrack-demo.com",
    githubRepo: "https://github.com/yourusername/edutrack",
    status: "completed"
  },
  {
    id: 3,
    title: "Software for Zanvar Group of Industries",
    image: zanvar1,
    images: [
      {
        src: zanvar2,
        caption: "Quiz Interface",
        type: "mobile"
      },
      {
        src: logo,
        caption: "Results Screen",
        type: "results"
      },
      {
        src: logo,
        caption: "Progress Tracking",
        type: "analytics"
      },
      {
        src: logo,
        caption: "Category Selection",
        type: "interface"
      }
    ],
    summary: "Enables multi-database SQL Server query execution and management with a user-friendly Tkinter interface..",
    description: "Developed a robust SQL Tool application for managing and querying SQL Server databases with a user-friendly interface. The tool facilitates seamless database connections, query execution across multiple databases, and result visualization, enhancing productivity for database administrators and developers.",
    techStack: ["Python", "PyODBC", "Threading", "PIL"],
    features: [
      "Database Connectivity",
      "Multi-Database Queries",
      "Interactive Explorer",
      "Result Logging",
      "Safety Checks"
    ],
    liveDemo: null, // Mobile app - no web demo
    githubRepo: "https://github.com/yourusername/quickquiz",
    playStoreLink: "https://play.google.com/store/apps/quickquiz",
    status: "completed"
  },
  {
    id: 4,
    title: "Portfolio Website",
    image: logo,
    images: [
      {
        src: logo,
        caption: "Home Page",
        type: "interface"
      },
      {
        src: logo,
        caption: "Projects Section",
        type: "showcase"
      },
      {
        src: logo,
        caption: "Contact Form",
        type: "interface"
      },
      {
        src: logo,
        caption: "Responsive Design",
        type: "mobile"
      }
    ],
    summary: "Modern, responsive portfolio website showcasing projects and skills.",
    description: "A fully responsive portfolio website built with React and modern web technologies. Features smooth animations, dark/light mode toggle, and optimized performance. Showcases projects with interactive elements and provides easy contact methods for potential clients and employers.",
    techStack: ["React", "CSS3", "JavaScript", "Framer Motion"],
    features: [
      "Responsive design",
      "Dark/Light mode",
      "Smooth animations",
      "SEO optimized",
      "Fast loading times"
    ],
    liveDemo: "https://your-portfolio.com",
    githubRepo: "https://github.com/yourusername/portfolio",
    status: "in-progress"
  }
];

export default projectData;