import { AiFillHtml5 } from "react-icons/ai";
import {
  SiNodedotjs,
  SiNextdotjs,
  SiVercel,
  SiNetlify,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiChakraui,
  SiFirebase,
  SiTypescript,
  SiJquery,
  // SiTensorflow,
  // SiKeras,
  // SiMediapipe,
} from "react-icons/si";
import { DiJavascript1, DiReact, DiMongodb, DiSass, DiPython } from "react-icons/di";
import { BsGit, BsGithub } from "react-icons/bs";
import { FaBootstrap, FaCss3Alt, FaAngular, FaPhp, FaShopify, FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { SiMicrosoftsqlserver, SiDotnet, SiCplusplus } from "react-icons/si";
import tensorflow from "../public/images/tensorflow.png"
import mediapipe from "../public/images/mediapipe.png"
import keras from "../public/images/keras.png"



export const TechStackData = [
  {
    Advance: [
      {
        name: "ReactJS",
        icon: (
          <FaReact
            color={"#61dafb"}
            className="md:text-4xl text-2xl dark:text-white text-black"
          />
        ),
      },
      {
        name: "NextJS",
        icon: <SiNextdotjs className="md:text-4xl text-2xl dark:text-white text-black" />,
      },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="md:text-4xl text-2xl" color={"#f7df1e"} />,
      },
      {
         name: "Python",
         icon: <DiPython className="md:text-4xl text-2xl" color={"#3776ab"} />, // Python updated
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="md:text-4xl text-2xl" color="#3178c6" />,
      },
      {
        name: "NodeJS",
        icon: <SiNodedotjs className="md:text-4xl text-2xl" color="#68a063" />,
      },
      {
        name: "Express",
        icon: <SiExpress className="md:text-4xl text-2xl" color="#000000" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="md:text-4xl text-2xl" color="#06b6d4" />,
      },
      {
        name: "HTML5",
        icon: <AiFillHtml5 className="md:text-4xl text-2xl" color="#e34f26" />,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="md:text-4xl text-2xl" color={"#1572b6"} />,
      },
      {
        name: "MongoDB",
        icon: <DiMongodb className="md:text-4xl text-2xl" color="#47a248" />,
      },
      {
        name: "SQLServer",
        icon: <SiMicrosoftsqlserver className="md:text-4xl text-2xl" color="#cc2927" />,
      },
      {
        name: "MySQL",
        icon: <GrMysql className="md:text-4xl text-2xl" color="#00758f" />,
      },
      {
        name: "Redux-toolkit",
        icon: <SiRedux className="md:text-4xl text-2xl" color="#764abc" />,
      },
      {
        name: "Github",
        icon: <BsGithub className="md:text-4xl text-2xl" color="#ffffff" />,
      },
      {
        name: "Git",
        icon: <BsGit className="md:text-4xl text-2xl" color="#f34f29" />,
      },
    ],
    Good: [
      {
        name: "JAVA",
        icon: <FaJava className="md:text-4xl text-2xl" color="#007396" />,
      },
      {
        name: "ASP.NET Core",
        icon: <SiDotnet className="md:text-4xl text-2xl" color="#512bd4" />,
      },
      {
        name: "PHP",
        icon: <FaPhp className="md:text-4xl text-2xl" color="#777bb4" />,
      },
      {
        name: "C++",
        icon: <SiCplusplus className="md:text-4xl text-2xl" color="#00599c" />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase className="md:text-4xl text-2xl" color="#ffca28" />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="md:text-4xl text-2xl" color="#7952b3" />,
      },
      {
        name: "TensorFlow",
        icon: (
           <img
            src="/images/tensorflow.png"
            alt="TensorFlow"
            className="md:text-2xl text-xs"
            style={{ maxWidth: '30px' }}
          />
        ),
      },
      {
        name: "Mediapipe",
        icon: (
          <img
            src="/images/mediapipe.png"
            alt="Mediapipe"
             className="md:text-2xl text-xs"
            style={{ maxWidth: '30px' }}
          />
        ),
      },
      {
        name: "Keras",
        icon: (
          <img
            src="/images/keras.png"
            alt="Keras"
             className="md:text-2xl text-xs"
            style={{ maxWidth: '30px' }}
          />
        ),
      },
    ],
    Familiar: [
      {
        name: "Angular",
        icon: <FaAngular className="md:text-4xl text-2xl" color="#dd0031" />,
      },
      {
        name: "jQuery",
        icon: <SiJquery className="md:text-4xl text-2xl" color="#0769ad" />,
      },
      {
        name: "SASS",
        icon: <DiSass className="md:text-4xl text-2xl" color="#cc6699" />,
      },
    ],
  },
];
