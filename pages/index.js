import dynamic from "next/dynamic";
import Head from "next/head";
import { Fragment } from "react";

const Navbar = dynamic(() => import("@/layout/navbar/Navbar"));
const Footer = dynamic(() => import("@/layout/footer/Footer"));
const Intro = dynamic(() => import("@/sections/Intro"));
const About = dynamic(() => import("@/sections/about"));
const Skills = dynamic(() => import("@/sections/Skills"));
const Education = dynamic(() => import("@/sections/education"));
const Experience = dynamic(() => import("@/sections/experience"));
const Projects = dynamic(() => import("@/sections/Projects"));
const Apps = dynamic(() => import("@/sections/Apps"));
const SendMail = dynamic(() => import("@/utils/SendMail"));
const SocialMedia = dynamic(() => import("@/utils/SocialMedia"));
const ChatSystem = dynamic(() => import("@/utils/ChatSystem"));

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Leul Portfolio</title>
        <meta name="title" content="Leul  Portfolio" />
        <meta
          name="description"
          content="Explore the best Next.js and React.js portfolio. Featuring simple, dark and light theme designs and mobile responsiveness."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Leul Portfolio" />
        <meta
          property="og:description"
          content="Explore the best Next.js and React.js portfolio by Leul Abera . Featuring simple, dark and light theme designs and mobile responsiveness."
        />
        <meta property="og:image" content="" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content="Leul Abera - Portfolio" />
        <meta
          property="twitter:description"
          content="Explore the best Next.js and React.js portfolio by Leul Abera. Featuring simple, dark and light theme designs and mobile responsiveness."
        />
        <meta property="twitter:image" content="" />
        <meta
          name="keywords"
          content="portfolio, Next.js, React.js, web development, dark theme, light theme, best portfolio github, best next js portfolio, how to make a portfolio, best react js portfolio github, best react js portfolio, best next js portfolio, react js developer in Kota, react js developer in Jaipur, react js developer in India, react js developer in Rajasthan"
        />
        <meta name="author" content="Leul Abera" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/webphoto.jpg" type="image/x-icon" />
      </Head>
      <div>
        <div>
          <Navbar />
          <Intro />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <SocialMedia />
          <Apps />
          <SendMail />
          <Footer />
          <div className="z-40">
            <ChatSystem />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
