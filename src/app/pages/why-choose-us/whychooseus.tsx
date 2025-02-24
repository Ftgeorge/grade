import PrimaryButton from '@/app/components/Buttons/PrimaryButton';
import HeaderText from '@/app/components/Text/HeaderText';
import SubHeaderText from '@/app/components/Text/SubHeaderText';
import { AiOutlineRobot, AiOutlineSafety, AiOutlineAppstoreAdd, AiOutlineFileText, AiOutlineExpand, AiOutlineLink } from 'react-icons/ai';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <AiOutlineRobot />,
      title: 'Advanced AI Technology',
      description: 'Leverages state-of-the-art voice, face, and eye-tracking algorithms. Provides real-time monitoring and instant alerts for anomalies.'
    },
    {
      icon: <AiOutlineSafety />,
      title: 'Enhanced Exam Security',
      description: 'Prevents impersonation with continuous user authentication. Detects and reports suspicious behavior like multiple faces or off-screen glances.'
    },
    {
      icon: <AiOutlineAppstoreAdd />,
      title: 'User-Friendly Interface',
      description: 'Intuitive design for both examinees and administrators. Minimal setup with clear progress indicators and easy controls.'
    },
    {
      icon: <AiOutlineFileText />,
      title: 'Comprehensive Reporting',
      description: 'Generates detailed reports with timestamps for all detected anomalies. Helps examiners make informed decisions with AI-powered insights.'
    },
    {
      icon: <AiOutlineExpand />,
      title: 'Scalable and Flexible',
      description: 'Adapts to institutions of any size—from small classrooms to large-scale examinations. Supports multiple camera setups and resolutions (up to 4K).'
    },
    {
      icon: <AiOutlineLink />,
      title: 'Seamless Integration',
      description: 'Easily integrates with existing LMS and exam platforms. Supports various exam formats, including live and asynchronous assessments.'
    }
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <HeaderText placeholder="Why Choose Us" className="text-center mb-4" />
        <SubHeaderText placeholder="Discover why Grade stands out as the most advanced and reliable AI-powered exam monitoring system." className="text-center mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-primary text-4xl mb-4">{feature.icon}</div> {/* Render the icon component directly */}
              <h3 className="text-2xl font-semibold text-[rgba(67,97,238,1)] mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
        <PrimaryButton placeholder="Start Your Free Trial" className="text-white text-lg font-semibold py-4 px-8 rounded-full hover:bg-blue-600 transition duration-300" />
      </div>
    </section>
  );
}
