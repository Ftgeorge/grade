import HeaderText from '../../components/Text/HeaderText';
import SubHeaderText from '../../components/Text/SubHeaderText';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import SecondaryButton from '@/app/components/Buttons/SecondaryButton';
import { MdOutlineArrowForward } from 'react-icons/md';

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Dr. Amanda Johnson',
            role: 'Head of Examination, EduTech University',
            message: 'Grade has revolutionized our examination process. Its AI-powered monitoring ensures integrity while being easy for both students and staff to use.',
            image: "https://images.unsplash.com/photo-1551692703-f4941f2f0f6a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: 'Michael Adewale',
            role: 'IT Administrator, SecureExams',
            message: 'The advanced face and voice recognition has drastically reduced exam malpractice. Real-time alerts help us act immediately.',
            image: "https://images.unsplash.com/photo-1533108344127-a586d2b02479?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: 'Sophia Zhang',
            role: 'Examination Coordinator, Global Learning Institute',
            message: 'The seamless integration with our LMS and the intuitive interface made adoption effortless. Grade is a game-changer!',
            image: "https://images.unsplash.com/photo-1552493450-2b5ce80ed13f?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
    ];

    return (
        <section className="bg-howitworks h-screen bg-cover flex flex-col items-center justify-center px-6 relative font-montserrat">
            <div className="absolute inset-0 bg-primary opacity-80"></div>
            <div className="max-w-6xl flex flex-col relative gap-10 mt-10">
                <div className='w-full flex flex-col items-center gap-2'>
                    <HeaderText placeholder="What Our Users Say" className="text-white text-center text-center" />
                    <SubHeaderText placeholder="Hear from institutions and professionals who trust Grade to deliver secure and reliable examination monitoring." className="text-center text-white" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex flex-col items-center text-center bg-white/10 p-8 rounded-3xl shadow-lg">
                            <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mb-6 object-cover" />
                            <h3 className="text-2xl font-semibold text-white mb-2">{testimonial.name}</h3>
                            <p className="text-sm text-white mb-4">{testimonial.role}</p>
                            <p className="text-white text-lg">"{testimonial.message}"</p>
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
        </section>
    );
}
