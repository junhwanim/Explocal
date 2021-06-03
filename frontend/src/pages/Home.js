import React, { useState } from "react";
import HomeSection from "../components/forHomepage/HomeSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AboutSection from "../components/forHomepage/AboutSection";
import Footer from "../components/Footer";
import ContactSection from "../components/forHomepage/ContactSection";
import MeetSection from "../components/forHomepage/MeetSection";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HomeSection />
      <AboutSection />
      <MeetSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
