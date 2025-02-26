"use client";

import SecondaryButton from "@/app/components/Buttons/SecondaryButton";
import HeaderText from "@/app/components/Text/HeaderText";
import SubHeaderText from "@/app/components/Text/SubHeaderText";
import { MdOutlineArrowForward, MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

export default function HomePage() {
    return (
        <div className="w-full h-screen bg-hero bg-no-repeat bg-cover relative">
            {/* Overlay for background tint */}
            <div className="absolute inset-0 bg-white opacity-50"></div>

            {/* Content Section */}
            <div className="relative flex justify-center items-center h-full">
                <div className="w-5/12 flex flex-col gap-6 justify-center items-center">

                    {/* Main Header */}
                    <div>
                        <HeaderText placeholder="Secure. Smart. Seamless" />
                    </div>

                    {/* Sub Header */}
                    <div >
                        <SubHeaderText
                            placeholder="AI-powered examination monitoring with real-time face and voice recognition to detect and prevent malpractice."
                            className="2xl:text-center text-brown-900"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-row gap-4">
                        {/* Get Started Button */}
                        <div>
                            <SecondaryButton placeholder="Get Started" primary={true}>
                                <MdOutlineArrowForward className="text-xl" />
                            </SecondaryButton>
                        </div>

                        {/* Request a Demo Button */}
                        <div>
                            <SecondaryButton placeholder="Request a Demo" primary={false}>
                                <MdOutlineArrowOutward className="text-xl" />
                            </SecondaryButton>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
