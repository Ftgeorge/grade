"use client";

import HeaderText from "../../components/Text/HeaderText";
import SubHeaderText from "../../components/Text/SubHeaderText";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import { FaShieldAlt, FaPlay, FaDesktop, FaExclamationCircle, FaFileAlt } from "react-icons/fa";
import { MdOutlineArrowForward } from "react-icons/md";
import { motion } from "framer-motion";

export default function HowItWorks() {
    const steps = [
        {
            icon: FaShieldAlt,
            title: 'User Authentication',
            description: 'Securely verifies each examinee’s identity using advanced face recognition. Continuous validation prevents impersonation and ensures exam integrity.'
        },
        {
            icon: FaPlay,
            title: 'Session Initialization',
            description: 'Admins start and monitor exams through an intuitive dashboard. System checks ensure readiness for webcam, microphone, and network connection.'
        },
        {
            icon: FaDesktop,
            title: 'Real-Time Monitoring',
            description: 'AI continuously tracks face presence, voice input, and gaze behavior. Suspicious activity triggers real-time alerts for immediate intervention.'
        },
        {
            icon: FaExclamationCircle,
            title: 'Anomaly Detection & Alerts',
            description: 'The system assigns a risk score by analyzing behaviors and detecting anomalies. Alerts are sent for events like multiple faces or unusual noise.'
        },
        {
            icon: FaFileAlt,
            title: 'Session Completion & Reporting',
            description: 'Generates a comprehensive report summarizing detected irregularities, including timestamps for voice, face, and gaze anomalies.'
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

    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { delay: steps.length * 0.2 + 0.5, duration: 0.8 } }
    };

    return (
        <section className="bg-howitworks min-h-screen bg-cover relative font-montserrat">
            <div className="absolute inset-0 bg-primary opacity-80"></div>
            <div className="w-full min-h-screen flex flex-col justify-start items-center px-4 sm:px-8 md:px-12 lg:px-16">
                <div className="max-w-3xl md:max-w-6xl flex flex-col relative gap-10 mt-10">

                    {/* Header and SubHeader */}
                    <div className="text-center flex flex-col gap-2">
                        <HeaderText placeholder="How It Works" className="text-white" />
                        <SubHeaderText placeholder="Discover how our AI-powered system ensures exam integrity through advanced monitoring." className="text-white" />
                    </div>

                    {/* Steps with Staggered Animation */}
                    <motion.div 
                        initial="hidden" 
                        animate="visible" 
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={cardVariants}
                                className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/10"
                            >
                                <step.icon className="w-12 h-12 mb-4 text-white" />
                                <h3 className="text-lg md:text-xl font-semibold text-white mb-4">{step.title}</h3>
                                <p className="text-white/80 text-sm md:text-base">{step.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Button with Animation */}
                    <motion.div 
                        initial="hidden" 
                        animate="visible" 
                        variants={buttonVariants} 
                        className="text-center w-full flex items-center justify-center mt-8"
                    >
                        <SecondaryButton placeholder="Start Your Free Trial" primary={false}>
                            <MdOutlineArrowForward className="text-base" />
                        </SecondaryButton>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
