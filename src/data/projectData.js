// src/data/projectData.js
import aerobotz from '../assets/aerobotz1.jpg';
import FoodApp1 from '../assets/FoodApp1.png';
import FoodApp2 from '../assets/FoodApp2.jpg';
import FoodApp3 from '../assets/FoodApp3.jpg';
import FoodApp4 from '../assets/FoodApp4.jpg';
import FoodApp5 from '../assets/FoodApp5.jpg';
import FoodApp6 from '../assets/FoodApp6.jpg';
import FoodApp7 from '../assets/FoodApp7.jpg';
import FoodApp8 from '../assets/FoodApp8.jpg';
import FoodApp9 from '../assets/FoodApp9.jpg';
import FoodApp10 from '../assets/FoodApp10.jpg';
import logo from '../assets/logo.png';
import aerobotz2 from '../assets/aerobotz2.png';
import aerobotz3 from '../assets/aerobotz3.png';
import aerobotz4 from '../assets/aerobotz4.png';
import aerobotz5 from '../assets/aerobotz5.png';
import PG1 from '../assets/PG1.jpg';
import PG2 from '../assets/PG2.jpg';
import PG3 from '../assets/PG3.jpg';
import PG4 from '../assets/PG4.jpg';


const projectData = [
  {
    id: 1,
    title: "Ground Control Station for Aerobotz Pvt. Ltd.",
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
    techStack: ["C++", "Qt", "MAVLink", "Networking (UDP/TCP)", "Git"],
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
        src: FoodApp2,
        caption: "Admin Dashboard",
        type: "dashboard"
      },
      {
        src: FoodApp3,
        caption: "Manage Items",
        type: "interface"
      },
      {
        src: FoodApp4,
        caption: "Cart & Checkout",
        type: "analytics"
      },
      {
        src: FoodApp5,
        caption: "Order History",
        type: "mobile"
      }
      ,
      {
        src: FoodApp6,
        caption: "Advertisement Management",
        type: "mobile"
      },
      {
        src: FoodApp7,
        caption: "Profile Settings",
        type: "mobile"
      },
      {
        src: FoodApp8,
        caption: "Order Summary",
        type: "mobile"
      },
      {
        src: FoodApp9,
        caption: "Main Screen",
        type: "mobile"
      },
      {
        src: FoodApp10,
        caption: "Food Details",
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
    title: "PG Bhosale Farms",
    image: PG1,
    images: [
      {
        src: PG2,
        caption: "Home Page",
        type: "interface"
      },
      {
        src: PG3,
        caption: "Projects Section",
        type: "showcase"
      },
      {
        src: PG4,
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
    techStack: ["HTML", "CSS3", "JS", "SQL","PHP"],
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