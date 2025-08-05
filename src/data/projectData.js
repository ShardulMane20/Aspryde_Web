// src/data/projectData.js

import logo from '../assets/logo.png'; // Replace with actual images when ready
// import irrigation from '../assets/irrigation.png';
// import edutrack from '../assets/edutrack.png';
// import quizapp from '../assets/quizapp.png';

const projectData = [
  {
    id: 1,
    title: "Smart Irrigation System",
    image: logo, // Replace with irrigation when ready
    summary: "IoT-based system that monitors soil moisture and automates watering.",
    description:
      "This project uses a moisture sensor connected to a microcontroller which communicates with a web interface. Farmers can monitor real-time data and reduce water wastage. Technologies used include Arduino, NodeMCU, Firebase, and a custom React dashboard.",
    techStack: ["React", "IoT", "Firebase", "NodeMCU"],
  },
  {
    id: 2,
    title: "EduTrack",
    image: logo, // Replace with edutrack when ready
    summary: "Student performance monitoring web app for teachers and parents.",
    description:
      "EduTrack provides intuitive dashboards for attendance, assignments, and progress analytics. It supports role-based access and real-time updates. Built using React for frontend and Firebase for backend and authentication.",
    techStack: ["React", "Firebase", "CSS", "Chart.js"],
  },
  {
    id: 3,
    title: "QuickQuiz Android App",
    image: logo, // Replace with quizapp when ready
    summary: "Mobile app for practicing quizzes with instant feedback.",
    description:
      "QuickQuiz helps users take multiple-choice quizzes, view results, and track progress over time. It features a clean UI and uses SQLite for local storage. Built with Android Studio in Java.",
    techStack: ["Java", "Android Studio", "SQLite"],
  },


  {
    id: 1,
    title: "Smart Irrigation System",
    image: logo, // Replace with irrigation when ready
    summary: "IoT-based system that monitors soil moisture and automates watering.",
    description:
      "This project uses a moisture sensor connected to a microcontroller which communicates with a web interface. Farmers can monitor real-time data and reduce water wastage. Technologies used include Arduino, NodeMCU, Firebase, and a custom React dashboard.",
    techStack: ["React", "IoT", "Firebase", "NodeMCU"],
  }



];

export default projectData;
