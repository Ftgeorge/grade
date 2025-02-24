import HeaderText from "../../components/Text/HeaderText";
import SubHeaderText from "../../components/Text/SubHeaderText";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import { FaShieldAlt, FaPlay, FaDesktop, FaExclamationCircle, FaFileAlt } from "react-icons/fa";
import { MdOutlineArrowForward } from "react-icons/md";

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

    return (
        <section className="bg-primary py-16 px-6 font-montserrat">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <HeaderText placeholder="How It Works" className="text-white 2xl:text-center" />
                    <SubHeaderText placeholder="Discover how our AI-powered system ensures exam integrity through advanced monitoring." className="text-white 2xl:text-center" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/10">
                            <step.icon className="w-16 h-16 mb-6 text-white" />
                            <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                            <p className="text-white/80">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16 w-full flex items-center justify-center">
                    <SecondaryButton
                        placeholder="Start Your Free Trial"
                        primary={false}>
                        <MdOutlineArrowForward className="text-base" />
                    </SecondaryButton>
                </div>
            </div>
        </section>
    );
}
