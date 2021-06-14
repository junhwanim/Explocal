import React, { useState, useContext } from "react";
import HomeSection from "../components/forHomepage/HomeSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AboutSection from "../components/forHomepage/AboutSection";
import Footer from "../components/Footer";
import ContactSection from "../components/forHomepage/ContactSection";
import MeetSection from "../components/forHomepage/MeetSection";
import { motion } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop";
import { DataContext } from "../components/DataContext";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { pageTransition, pageVariants } = useContext(DataContext);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        style={{ position: "absolute", width: "100vw" }}
      >
        <Navbar toggle={toggle} />
        <HomeSection />
        <AboutSection />
        <MeetSection />
        <ContactSection />
        <Footer />
      </motion.div>
    </>
  );
}

export default Home;
