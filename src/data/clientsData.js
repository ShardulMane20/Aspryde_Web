import zanvar7 from '../assets/zanvar7.jpg';
import aerobotz5 from '../assets/aerobotz5.png';
import mg7 from '../assets/mg7.jpg';
import PG6 from '../assets/PG6.jpeg';
import FoodApp11 from '../assets/FoodApp11.jpg';
import { a } from 'framer-motion/client';

const clientsData = [
  {
    id: 1,
    name: "Zanvar Group of Industries",
    logo: zanvar7,
    logoAlt: "Zanvar Logo",
    industry: "Manufacturing",
    testimonial: "Outstanding work! They delivered beyond our expectations with exceptional attention to detail and innovative solutions that transformed our business.",
    rating: 5,
    project: "RPA Automation System",
    collaboration_duration: "7 months",
    project_value: ""
  },
  {
    id: 2,
    name: "InnovateLab",
    logo: aerobotz5,
    logoAlt: "InnovateLab Logo",
    industry: "Research & Development",
    website: "https://innovatelab.com",
    testimonial: "Professional team that understands complex requirements and delivers innovative solutions. Their expertise in cutting-edge technology is unmatched.",
    rating: 5,
    project: "Data Analytics Platform",
    collaboration_duration: "1.5 years",
    project_value: "$180K+"
  },
  {
    id: 3,
    name: "StartupVentures",
    logo: mg7,
    logoAlt: "StartupVentures Logo",
    industry: "Startup Ecosystem",
    website: "https://startupventures.com",
    testimonial: "Incredible results! They helped us scale our platform to handle millions of users seamlessly. Their scalable architecture is impressive.",
    rating: 5,
    project: "Scalable Web Application",
    collaboration_duration: "3 years",
    project_value: "$400K+"
  },
  {
    id: 4,
    name: "GlobalTrade Inc.",
    logo: PG6,
    logoAlt: "GlobalTrade Inc Logo",
    industry: "International Trade",
    website: "https://globaltrade.com",
    testimonial: "Reliable partner for our digital transformation journey. They delivered a robust trading platform that exceeded all our requirements.",
    rating: 5,
    project: "Trading Platform",
    collaboration_duration: "2.5 years",
    project_value: "$320K+"
  },
  {
    id: 5,
    name: "FinanceFirst",
    logo: FoodApp11,
    logoAlt: "FinanceFirst Logo",
    industry: "Financial Services",
    website: "https://financefirst.com",
    testimonial: "Exceptional security implementation and user experience design. Their attention to compliance and security standards is remarkable.",
    rating: 5,
    project: "Mobile Banking App",
    collaboration_duration: "1 year",
    project_value: "$150K+"
  }
];

export default clientsData;