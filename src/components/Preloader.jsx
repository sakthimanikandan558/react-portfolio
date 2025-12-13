import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "< Sakthi Manikandan />";
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        // Typing effect
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index <= fullText.length) {
                setText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);

        // Progress bar effect
        const progressInterval = setInterval(() => {
            setPercentage((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(onComplete, 1000); // Wait a bit after 100%
                    return 100;
                }
                return prev + 2; // Speed of progress
            });
        }, 40);

        return () => {
            clearInterval(typingInterval);
            clearInterval(progressInterval);
        };
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#04081A] text-white overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-20 -left-20 animate-pulse" />
            <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse delay-1000" />

            <div className="relative z-10 flex flex-col items-center">
                {/* Typing Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-4xl lg:text-6xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-8 text-center px-4"
                >
                    {text}
                    <span className="animate-pulse text-purple-400">|</span>
                </motion.div>

                {/* Progress Bar Container */}
                <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                    <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ ease: "linear" }}
                    />
                </div>

                {/* Percentage Text */}
                <div className="mt-4 font-mono text-gray-400 text-sm">
                    Loading... {percentage}%
                </div>
            </div>
        </div>
    );
};

export default Preloader;
