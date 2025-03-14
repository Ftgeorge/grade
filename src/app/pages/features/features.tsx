"use client";

import HeaderText from "@/app/components/Text/HeaderText";
import SubHeaderText from "@/app/components/Text/SubHeaderText";
import { FaMicrophone, FaUser, FaChartLine, FaVideo, FaLock, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Features() {
    const features = [
        {
            icon: FaMicrophone,
            title: 'Voice Recognition',
            description: 'Detects suspicious speech in real-time and sends alerts. Administrators can update the list of prohibited terms and receive immediate notifications when a violation occurs.'
        },
        {
            icon: FaUser,
            title: 'Face Recognition',
            description: 'Monitors examinee presence and tracks movement within the frame. Sends alerts if no face or multiple faces are detected, ensuring constant monitoring.'
        },
        {
            icon: FaChartLine,
            title: 'AI-Powered Insights',
            description: 'Generates risk scores and delivers real-time alerts. Provides detailed summaries of anomalies and tracks behavioral patterns during exams for enhanced analysis.'
        },
        {
            icon: FaVideo,
            title: 'Flexible Video Capture',
            description: 'Supports HD and 4K video quality with real-time monitoring. Offers the option to hide or display live video feeds while maintaining backend surveillance.'
        },
        {
            icon: FaLock,
            title: 'User Authentication',
            description: 'Prevents proxy exam fraud and ensures continuous identity validation. Uses multi-factor authentication and ongoing face checks for improved security.'
        },
        {
            icon: FaEye,
            title: 'Eye Tracking',
            description: 'Monitors examinee eye movements to detect off-screen glances. Identifies prolonged distractions and alerts invigilators in real-time.'
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.2, duration: 0.8 }
        })
    };

    return (
        <section className="bg-white max-h-fit md:h-screen lg:h-screen xl:h-screen 2xl:h-screen px-4 md:px-10 lg:px-10 xl:px-20 2xl:px-20 py-12 md:py-0 lg:py-32 xl:py-32 2xl:py-40 2xl:px-0 flex items-center justify-center">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                <div className="w-full flex flex-col items-center w-8/12 md:w-8/12 lg:w-6/12 xl:w-6/12 2xl:w-8/12 gap-6 md:gap-6 lg:gap-2 xl:gap-6 2xl:gap-6" >
                    <HeaderText placeholder="Key Features" className="text-center" />
                    <SubHeaderText placeholder="Explore the advanced capabilities of our AI-powered examination monitoring system, ensuring integrity and seamless oversight." className="text-center md:text-center lg:text-center xl:text-center 2xl:text-center" />
                </div>

                {/* Features Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} custom={index} variants={cardVariants} className="flex items-start space-x-4 p-6 rounded-2xl shadow-md bg-white">
                            <feature.icon className="w-12 h-12 text-primary" />
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
                                <p className="text-gray-800">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
