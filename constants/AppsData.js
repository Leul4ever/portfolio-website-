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
import sign from "../public/images/sign.jpg";
import gender from "../public/images/gender.png";
import webscr from "../public/images/webscr.jpg";
import tensorflow from "../public/images/tensorflow.png";
import mediapipe from "../public/images/mediapipe.png";
import keras from "../public/images/keras.png";
import { DiPython } from "react-icons/di";

export const AppData = [
  {
    projectName: "Sign Language Translator",
    liveUrl: "",
    githubUrl: "https://github.com/Leul4ever",
    projectImage: sign,
    techs: [
      <DiPython className="md:text-4xl text-3xl" color={"#3776ab"} />,
      <img
        src="/images/tensorflow.png"
        alt="tensorflow"
        className="md:text-2xl text-xs"
        style={{ maxWidth: "30px" }}
      />,
      <img
        src="/images/mediapipe.png"
        alt="mediapipe"
        className="md:text-2xl text-xs"
        style={{ maxWidth: "30px" }}
      />,
      <img
        src="/images/keras.png"
        alt="Keras"
        className="md:text-2xl text-xs"
        style={{ maxWidth: "25px" }}
      />,
    ],
  },
  {
    projectName: "Web scraping",
    liveUrl: "",
    githubUrl: "",
    projectImage: webscr,
    techs: [
      <DiPython className="md:text-4xl text-3xl" color={"#3776ab"} />,
      <img
        src="/images/tensorflow.png"
        alt="Keras"
        className="md:text-2xl text-xs"
        style={{ maxWidth: "30px" }}
      />,
      <img
        src="/images/mediapipe.png"
        alt="mediapipe"
        className="md:text-2xl text-xs"
        style={{ maxWidth: "30px" }}
      />,
      <img
        src="/images/keras.png"
        alt="Keras"
        className="md:text-2xl text-xs"
        style={{ maxWidth: "25px" }}
      />,
    ],
  },

  {
    projectName: "Age & Gender Detector",
    liveUrl: "",
    githubUrl: "",
    projectImage: gender,
    techs: [
      <DiPython className="md:text-4xl text-3xl" color={"#3776ab"} />,
      <img
        src="/images/tensorflow.png"
        alt="mediapipe"
        className="md:text-2xl text-xs"
        style={{ maxWidth: "30px" }}
      />,
      <img
        src="/images/mediapipe.png"
        alt="mediapipe"
        className="md:text-2xl text-xs"
        style={{ maxWidth: "30px" }}
      />,
      <img
        src="/images/keras.png"
        alt="Keras"
        className="md:text-2xl text-xs"
        style={{ maxWidth: "25px" }}
      />,
    ],
  },
  // ... other projects ...
];
