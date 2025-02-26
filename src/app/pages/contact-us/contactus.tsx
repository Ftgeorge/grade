import HeaderText from "@/app/components/Text/HeaderText";
import SubHeaderText from "@/app/components/Text/SubHeaderText";
import { socialIcons } from "@/data/array";

export default function ContactUs() {
    return (
        <section className="bg-white py-8 px-4 sm:px-6 lg:px-8" id="contact-us">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">
                <div className="w-full flex flex-col gap-4 items-center text-center">
                    <HeaderText placeholder="Contact Us" className="text-primary" />
                    <SubHeaderText placeholder="Have questions or want to learn more? We’re here to help." />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 font-montserrat">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-2xl font-semibold text-primary mb-6">Get in Touch</h3>
                        <p className="text-black mb-6">Reach out to us through any of the following channels:</p>

                        <div className="space-y-6">
                            <p className="text-lg"><strong>Email:</strong> support@gradeai.com</p>
                            <p className="text-lg"><strong>Phone:</strong> +1 (555) 123-4567</p>
                            <p className="text-lg"><strong>Office Address:</strong> 123 Innovation Drive, Tech City, TX 75001</p>

                            <h4 className="text-xl font-semibold text-primary mt-8">Business Hours</h4>
                            <p>Monday - Friday: 9:00 AM – 6:00 PM (GMT)</p>
                            <p>Saturday & Sunday: Closed</p>

                            <h4 className="text-xl font-semibold text-primary mt-8">Follow Us</h4>
                            <div className="flex flex-wrap mt-4 space-x-5 rtl:space-x-reverse">
                                {socialIcons.map(({ icon: Icon, label, href }, index) => (
                                    <a key={index} href={href} className="text-gray-400 hover:text-primary">
                                        <Icon className="text-2xl" />
                                        <span className="sr-only">{label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h3 className="text-2xl font-semibold text-primary mb-6">Send Us a Message</h3>
                        <form className="space-y-8">
                            <div>
                                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Enter your full name"
                                    className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-lg font-medium text-gray-700">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Enter the subject (optional)"
                                    className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    placeholder="Enter your message"
                                    className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 px-6 bg-primary text-white text-lg font-semibold rounded-full hover:bg-blue-600 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}