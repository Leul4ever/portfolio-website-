import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

import {
  SiRedux,
  SiMongodb,
  SiExpress,
  SiChakraui,
  SiTailwindcss,
  SiDotnet,
} from "react-icons/si";
import meshrak from "../public/images/Meshrak.png";
import hetosa from "../public/images/Hetosa.png";
import nexus from "../public/images/Nexus.png";
import service from "../public/images/Service.png";
import bayra from "../public/images/bayra.png";
import stud from "../public/images/stud.png";

export const ProjectsData = [
  {
    projectName: "Meshrak Real State",
    liveUrl: "https://meshrak-real-state.vercel.app/",
    projectImage: meshrak,
    techs: [
      <FaReact color="#61DBFB" />, // React
      <SiChakraui color="#319795" />, // Chakra UI
      <SiTailwindcss color="#38B2AC" />, // Tailwind CSS
      <SiRedux color="#764ABC" />, // Redux
    ],
  },
  {
    projectName: "Hetosa Farmers ERP",
    liveUrl: "http://www.hetosa-farmers.site/",
    projectImage: hetosa,
    techs: [
      <FaReact color="#61DBFB" />, // React
      <SiRedux color="#764ABC" />, // Redux
      <FaNodeJs color="#339933" />, // Node.js
      <SiExpress color="#000000" />, // Express
      <SiMongodb color="#47A248" />, // MongoDB
    ],
  },
  {
    projectName: "Nexus Labs Website",
    liveUrl: "https://nexus-labs.tech/",
    projectImage: nexus,
    techs: [
      <SiTailwindcss color="#38B2AC" />, // Tailwind CSS
      <SiRedux color="#764ABC" />, // Redux
      <FaReact color="#61DBFB" />, // React
      <SiChakraui color="#319795" />, // Chakra UI
    ],
  },
  {
    projectName: "Habesha Music",
    liveUrl: "https://dani-music.netlify.app/",
    projectImage: bayra,
    techs: [
      <FaReact color="#61DBFB" />, // React

      <SiRedux color="#764ABC" />, // Redux
      <SiChakraui color="#319795" />, // Chakra UI
      <SiTailwindcss color="#38B2AC" />, // Tailwind CSS
    ],
  },
  {
    projectName: "Service Desk",
    liveUrl: "",
    projectImage: service,
    techs: [
      <FaReact color="#61DBFB" />, // React
      <SiChakraui color="#319795" />, // Chakra UI
      <SiTailwindcss color="#38B2AC" />, // Tailwind CSS
      <SiRedux color="#764ABC" />, // Redux
    ],
  },
  {
    projectName: "Student Information System",
    liveUrl: "",
    projectImage: stud,
    techs: [
      <FaReact color="#61DBFB" />, // React
      <SiChakraui color="#319795" />, // Chakra UI
      <SiTailwindcss color="#38B2AC" />, // Tailwind CSS
      <SiRedux color="#764ABC" />, // Redux
    ],
  },
];
