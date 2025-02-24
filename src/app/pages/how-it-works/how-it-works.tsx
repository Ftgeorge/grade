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
        <section className="bg-howitworks h-screen bg-cover relative font-montserrat">
            <div className="absolute inset-0 bg-primary opacity-80"></div>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="max-w-6xl flex flex-col relative gap-10 mt-10">
                    <div className="text-center flex flex-col gap-2">
                        <HeaderText placeholder="How It Works" className="text-white 2xl:text-center" />
                        <SubHeaderText placeholder="Discover how our AI-powered system ensures exam integrity through advanced monitoring." className="text-white 2xl:text-center" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/10">
                                <step.icon className="w-12 h-12 mb-4 text-white" />
                                <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                                <p className="text-white/80">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center w-full flex items-center justify-center">
                        <SecondaryButton
                            placeholder="Start Your Free Trial"
                            primary={false}>
                            <MdOutlineArrowForward className="text-base" />
                        </SecondaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
