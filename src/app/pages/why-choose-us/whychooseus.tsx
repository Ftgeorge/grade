import PrimaryButton from '@/app/components/Buttons/PrimaryButton';
import HeaderText from '@/app/components/Text/HeaderText';
import SubHeaderText from '@/app/components/Text/SubHeaderText';
import { AiOutlineRobot, AiOutlineSafety, AiOutlineAppstoreAdd, AiOutlineFileText, AiOutlineExpand, AiOutlineLink } from 'react-icons/ai';
import { motion } from 'framer-motion';

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
    <section className="bg-white min-h-screen px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-32 py-12 flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 lg:gap-16">

        {/* Header Section */}
        <div className='flex flex-col items-center text-center gap-4'>
          <HeaderText placeholder="Why Choose Us" className="text-center" />
          <SubHeaderText placeholder="Discover why Grade stands out as the most advanced and reliable AI-powered exam monitoring system." className="text-center" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg bg-gray-50 hover:bg-white transition"
            >
              <div className="text-primary text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-lg lg:text-base xl:text-xl 2xl:text-xl font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-gray-800 text-sm lg:text-sm xl:text-base 2xl:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
