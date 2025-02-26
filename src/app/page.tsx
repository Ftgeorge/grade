import Image from "next/image";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/home/home";
import Features from "./pages/features/features";
import HowItWorks from "./pages/how-it-works/how-it-works";
import WhyChooseUs from "./pages/why-choose-us/whychooseus";
import Testimonials from "./pages/testimonials/testimonials";
import ContactUs from "./pages/contact-us/contactus";
import Footer from "./components/Footer/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <div id="home">
        <HomePage />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="howitworks">
        <HowItWorks />
      </div>
      <div id="whychooseus">
        <WhyChooseUs />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contactus">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}
