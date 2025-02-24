
import HeaderText from "@/app/components/Text/HeaderText";
import SubHeaderText from "@/app/components/Text/SubHeaderText";
import { FaMicrophone, FaUser, FaChartLine, FaVideo, FaLock, FaEye } from "react-icons/fa";

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

    return (
        <section className="bg-white h-screen px-20 flex items-center justify-center">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="w-full flex flex-col items-center w-9/12 gap-6">
                    <HeaderText placeholder="Key Features" className="text-center" />
                    <SubHeaderText placeholder="Explore the advanced capabilities of our AI-powered examination monitoring system, ensuring integrity and seamless oversight." className="2xl:text-center" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-4 p-6 rounded-2xl shadow-md bg-white">
                            <feature.icon className="w-12 h-12 text-primary" />
                            <div>
                                <h3 className="text-2xl font-semibold text-black font-montserrat mb-2">{feature.title}</h3>
                                <p className="text-gray-800 font-montserrat">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
