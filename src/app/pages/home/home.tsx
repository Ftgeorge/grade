"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SecondaryButton from "@/app/components/Buttons/SecondaryButton";
import HeaderText from "@/app/components/Text/HeaderText";
import SubHeaderText from "@/app/components/Text/SubHeaderText";
import { MdOutlineArrowForward, MdOutlineArrowOutward } from "react-icons/md";

const images = [
    "/images/hero.jpg",
    "/images/cbt3.jpg",
    // "/images/cbt.jpg",
    "/images/cbt5.png",
];

export default function HomePage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.2, duration: 0.8 }
        })
    };

    return (
        <div className="w-full h-screen relative">
            {/* Background Image with Fade In Animation */}
            <div
                className="absolute inset-0 bg-no-repeat bg-cover transition-opacity duration-1000 opacity-100"
                style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
            ></div>

            {/* Overlay for background tint */}
            <div className="absolute inset-0 bg-white opacity-50"></div>

            {/* Content Section */}
            <div className="relative flex justify-center items-center h-full">
                <motion.div 
                    initial="hidden" 
                    animate="visible" 
                    variants={textVariants}
                    className="w-11/12 md:w-8/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12 flex flex-col gap-6 justify-center items-center"
                >

                    {/* Main Header */}
                    <div>
                        <HeaderText placeholder="Secure. Smart. Seamless" />
                    </div>

                    {/* Sub Header */}
                    <div>
                        <SubHeaderText
                            placeholder="AI-powered examination monitoring with real-time face and voice recognition to detect and prevent malpractice."
                            className="text-center text-black"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-row gap-4">
                        {["Get Started", "Request a Demo"].map((text, index) => (
                            <motion.div key={text} custom={index} variants={cardVariants}>
                                <SecondaryButton placeholder={text} primary={index === 0}>
                                    {index === 0 ? (
                                        <MdOutlineArrowForward className="text-xl" />
                                    ) : (
                                        <MdOutlineArrowOutward className="text-xl" />
                                    )}
                                </SecondaryButton>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>
            </div>
        </div>
    );
}