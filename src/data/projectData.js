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
import zanvar1 from '../assets/zanvar1.png';
import zanvar2 from '../assets/zanvar2.png';
import zanvar3 from '../assets/zanvar3.png';
import zanvar4 from '../assets/zanvar4.png';  
import zanvar5 from '../assets/zanvar5.jpg';
import zanvar6 from '../assets/zanvar6.jpg';
import PG1 from '../assets/PG1.jpg';
import PG2 from '../assets/PG2.jpg';
import PG3 from '../assets/PG3.jpg';
import PG4 from '../assets/PG4.jpg';
import PG5 from '../assets/PG5.jpg';
import mg from '../assets/mg1.png';
import mg2 from '../assets/mg2.png';
import mg3 from '../assets/mg3.png';
import mg4 from '../assets/mg4.png';
import mg5 from '../assets/mg5.png';
import mg6 from '../assets/mg6.png';
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import s4 from '../assets/s4.png';
import per1 from '../assets/per1.jpg';
import per2 from '../assets/per2.jpg';
import per3 from '../assets/per3.jpg';
import per4 from '../assets/per4.jpg';


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
    title: "Software for Zanvar Group of Industries",
    image: zanvar1,
    images: [
      {
        src: zanvar2,
        caption: "",
        type: "mobile"
      },
      {
        src: zanvar3,
        caption: "",
        type: "results"
      },
      {
        src: zanvar4,
        caption: "",
        type: "analytics"
      },
      {
        src: zanvar5,
        caption: "",
        type: "interface"
      },

      {
        src: zanvar6,
        caption: "",
        type: "analytics"
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
    title: "PG Bhosale Farms",
    image: PG5,
    images: [

       {
        src: PG5,
        caption: "1",
        type: "interface"
      },

      {
        src: PG2,
        caption: "2",
        type: "interface"
      },
      {
        src: PG3,
        caption: "3",
        type: "showcase"
      },
      {
        src: PG4,
        caption: "4",
        type: "interface"
      },
      {
        src: PG1,
        caption: "5",
        type: "mobile"
      }
    ],
    summary: "Responsive Farms website showcasing product and quality.",
    description: "A fully responsive farms website built with PHP and web technologies. Features smooth animations and optimized performance. Showcases products with interactive elements and provides easy contact methods for potential clients and employers.",
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
  },


  {
    id: 5,
    title: "E-Commerce Website",
    image: mg,
    images: [

       {
        src: mg,
        caption: "1",
        type: "interface"
      },


      {
        src: mg2,
        caption: "2",
        type: "interface"
      },
      {
        src: mg3,
        caption: "3",
        type: "showcase"
      },
      {
        src: mg4,
        caption: "4",
        type: "interface"
      },
      {
        src: mg5,
        caption: "5",
        type: "mobile"
      },

      {
        src: mg6,
        caption: "6",
        type: "mobile"
      }
    ],
    summary: "MG-Technology – Smart Online Store for Laptops & Accessories.",
    description: "MG-Technology is a sponsored, enterprise-grade e-commerce platform developed in collaboration with an industry partner to modernize the retail experience for laptops and accessories. Designed with scalability, security, and performance at its core, the platform delivers a seamless shopping experience for customers while providing powerful management tools for administrators.",
    techStack: ["HTML5", "CSS3 (Tailwind CSS)", "JavaScript (Alpine.js)", "MySQL","PHP"],
    features: [
      "Responsive design",
      "Role-based access control",
      "Real-time inventory tracking",
      "SEO optimized",
      "Scalable architecture"
    ],
    liveDemo: "https://your-portfolio.com",
    githubRepo: "https://github.com/yourusername/portfolio",
    status: "in-progress"
  }
  ,


  {
    id: 6,
    title: "A Real Estate Platform",
    image: s1,
    images: [
      {
        src: s1,
        caption: "1",
        type: "interface"
      },
      {
        src: s2,
        caption: "2",
        type: "showcase"
      },
      {
        src: s3,
        caption: "3",
        type: "interface"
      },
      {
        src: s4,
        caption: "4",
        type: "mobile"
      },

      
    ],
    summary: "An elegant real estate platform that turns property dreams into reality.",
    description: "A modern real estate platform showcasing premium residential and commercial projects, enabling users to explore properties, view detailed project portfolios, and connect directly with the company. Designed for a seamless and engaging browsing experience with elegant visuals and smooth navigation.",
    techStack: ["HTML5", "CSS3 (Tailwind CSS)", "JavaScript (Alpine.js)", "Reactjs","Node.js"],
    features: [
      "Responsive design",
      "Role-based access control",
      "Customer testimonials section",
      "SEO optimized",
      "Scalable architecture"
    ],

  },

  {
    id: 6,
    title: "Prescripto",
    image: per1,
    images: [
      {
        src: per1,
        caption: "1",
        type: "interface"
      },
      {
        src: per2,
        caption: "2",
        type: "showcase"
      },
      {
        src: per3,
        caption: "3",
        type: "interface"
      },
      {
        src: per4,
        caption: "4",
        type: "mobile"
      },
    ],
    summary: "A healthcare appointment platform that connects patients with trusted doctors.",
    description: "Prescripto is an advanced healthcare management platform designed to simplify booking doctor appointments and managing health records. It enables users to explore doctors by specialty, view detailed doctor profiles with availability, and schedule appointments effortlessly. With a user-friendly interface and smooth navigation, the platform ensures a convenient and efficient healthcare experience.",
    techStack: ["HTML5", "CSS3 (Tailwind CSS)", "JavaScript", "React.js", "Node.js"],
    features: [
      "Responsive design for all devices",
      "Doctor profile with experience, specialty, and fees",
      "Appointment booking with available time slots",
      "Find doctors by specialty",
      "User-friendly navigation and clean UI",
      "About Us section with company vision",
      "Seamless booking flow",
      "Scalable architecture for healthcare services"
    ],
}

];

export default projectData;