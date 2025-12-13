import React, { useEffect, useState } from "react";
import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import Preloader from "./components/Preloader";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Smooth scroll behavior
        document.documentElement.style.scrollBehavior = "smooth";
    }, []);

    return (
        <AnimatePresence mode="wait">
            {loading ? (
                <motion.div key="loader">
                    <Preloader onComplete={() => setLoading(false)} />
                </motion.div>
            ) : (
                <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Header />
                    {/* Single-Page Mode: All sections in one scrollable page */}
                    <div id="home">
                        <Hero />
                    </div>
                    <div id="skills">
                        <Skills />
                    </div>
                    <div id="experience">
                        <Experience />
                    </div>
                    <div id="education">
                        <Education />
                    </div>
                    <div id="projects">
                        <Projects />
                    </div>
                    <div id="contact">
                        <Contact />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
