// src/data/projectData.js
import aerobotz from '../assets/aerobotz1.jpg';
import logo from '../assets/logo.png';
import aerobotz2 from '../assets/aerobotz2.png';
import aerobotz3 from '../assets/aerobotz3.png';
import aerobotz4 from '../assets/aerobotz4.png';
import aerobotz5 from '../assets/aerobotz5.png';
import { a } from 'framer-motion/client';

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
    title: "EduTrack",
    image: logo,
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
    summary: "Student performance monitoring web app for teachers and parents.",
    description: "EduTrack provides intuitive dashboards for attendance, assignments, and progress analytics. It supports role-based access and real-time updates. The platform enables seamless communication between teachers, students, and parents while providing comprehensive insights into academic performance.",
    techStack: ["React", "Firebase", "CSS", "Chart.js", "Material-UI"],
    features: [
      "Role-based access control",
      "Real-time attendance tracking",
      "Assignment management",
      "Progress analytics",
      "Parent-teacher communication"
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