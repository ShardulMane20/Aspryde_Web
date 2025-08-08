// src/data/projectData.js
import aerobotz from '../assets/aerobotz1.png';
import FoodApp1 from '../assets/FoodApp1.png';
import logo from '../assets/logo.png';
// import irrigation from '../assets/irrigation.png';
// import edutrack from '../assets/edutrack.png';
// import quizapp from '../assets/quizapp.png';

const projectData = [
  {
    id: 1,
    title: "Ground Control Station for Aerobotz Pvt. Ltd.",
    image: aerobotz, // Main display image for project cards
    images: [
      {
        src: logo,
        caption: "System Dashboard",
        type: "interface"
      },
      {
        src: logo,
        caption: "Mobile Control App",
        type: "mobile"
      },
      {
        src: logo,
        caption: "Hardware Setup",
        type: "hardware"
      },
      {
        src: logo,
        caption: "Data Analytics",
        type: "analytics"
      }
    ],
    summary: "IoT-based system that monitors soil moisture and automates watering.",
    description: "This project uses a moisture sensor connected to a microcontroller which communicates with a web interface. Farmers can monitor real-time data and reduce water wastage. The system includes automated scheduling, weather integration, and comprehensive analytics to optimize water usage and improve crop yields.",
    techStack: ["React", "IoT", "Firebase", "NodeMCU", "Arduino"],
    features: [
      "Real-time soil moisture monitoring",
      "Automated irrigation scheduling",
      "Weather API integration",
      "Mobile-responsive dashboard",
      "Historical data analytics"
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
    title: "QuickQuiz Android App",
    image: logo,
    images: [
      {
        src: logo,
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
    summary: "Mobile app for practicing quizzes with instant feedback.",
    description: "QuickQuiz helps users take multiple-choice quizzes, view results, and track progress over time. It features a clean UI, offline functionality, and uses SQLite for local storage. The app includes various quiz categories, difficulty levels, and comprehensive performance analytics.",
    techStack: ["Java", "Android Studio", "SQLite", "Material Design"],
    features: [
      "Multiple quiz categories",
      "Offline functionality",
      "Progress tracking",
      "Instant feedback",
      "Performance analytics"
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