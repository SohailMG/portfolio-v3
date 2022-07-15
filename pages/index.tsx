import type { NextPage } from "next";
import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import LandingSection from "../sections/LandingSection";
import ProjectsSection from "../sections/ProjectsSection";
import WorkSection from "../sections/WorkSection";
import LoadingScreen from "../sections/LoadingScreen";
import Socials from "../components/Socials";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  // show initial loading screen
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const logoIcon = document.getElementById("logoIcon");
    if (logoIcon) {
      logoIcon.addEventListener("animationend", () => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
    }
  });

  if (loading) {
    return (
      <div className="flex bg-[#0A192E] min-h-screen items-center justify-center">
        <Head>
          <title>Sohail Gsais</title>
          <link
            rel="shortcut icon"
            href="/images/favicon.ico"
            type="image/x-icon"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
          />
        </Head>
        <div className="logo-container animate__animated animate__bounceOut animate__delay-2s">
          <div className="square square-one face-top"></div>
          <div className="square square-two face-top"></div>
          <div className="square square-three face-top"></div>
          <div className="square square-four side"></div>
          <div id="logoIcon" className="square square-five side-2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex bg-[#0A192E] min-h-screen flex-col py-2">
      <Head>
        <title>Sohail Gsais</title>
        <link rel="icon" href="/images/favicon.ico" />
        <script src="https://unpkg.com/feather-icons"></script>
      </Head>
      <LandingSection />
      <main className="md:px-20 xl:px-52">
        <AboutSection />
        <WorkSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Socials />
      <Footer />
    </div>
  );
};

export default Home;
