export default function WhyChooseUs() {
    const features = [
        {
            icon: '/icons/ai.svg',
            title: 'Advanced AI Technology',
            description: 'Leverages state-of-the-art voice, face, and eye-tracking algorithms. Provides real-time monitoring and instant alerts for anomalies.'
        },
        {
            icon: '/icons/security.svg',
            title: 'Enhanced Exam Security',
            description: 'Prevents impersonation with continuous user authentication. Detects and reports suspicious behavior like multiple faces or off-screen glances.'
        },
        {
            icon: '/icons/interface.svg',
            title: 'User-Friendly Interface',
            description: 'Intuitive design for both examinees and administrators. Minimal setup with clear progress indicators and easy controls.'
        },
        {
            icon: '/icons/report.svg',
            title: 'Comprehensive Reporting',
            description: 'Generates detailed reports with timestamps for all detected anomalies. Helps examiners make informed decisions with AI-powered insights.'
        },
        {
            icon: '/icons/scalable.svg',
            title: 'Scalable and Flexible',
            description: 'Adapts to institutions of any size—from small classrooms to large-scale examinations. Supports multiple camera setups and resolutions (up to 4K).'
        },
        {
            icon: '/icons/integration.svg',
            title: 'Seamless Integration',
            description: 'Easily integrates with existing LMS and exam platforms. Supports various exam formats, including live and asynchronous assessments.'
        }
    ];

    return (
        <section className="bg-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-[rgba(67,97,238,1)] text-center mb-4">Why Choose Us</h2>
                <p className="text-lg text-gray-700 text-center mb-12">
                    Discover why Grade stands out as the most advanced and reliable AI-powered exam monitoring system.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-8 rounded-2xl shadow-lg">
                            <img src={feature.icon} alt={feature.title} className="w-16 h-16 mb-6" />
                            <h3 className="text-2xl font-semibold text-[rgba(67,97,238,1)] mb-4">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a href="/get-started" className="inline-block bg-[rgba(67,97,238,1)] text-white text-lg font-semibold py-4 px-8 rounded-full hover:bg-blue-600 transition duration-300">
                        Start Your Free Trial
                    </a>
                </div>
            </div>
        </section>
    );
}
