import Image from "next/image";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/home/home";
import Features from "./pages/features/features";
import HowItWorks from "./pages/how-it-works/how-it-works";

export default function Home() {
  return (
    <>
    <Navigation/>
    <HomePage/>
    <Features/>
    <HowItWorks/>
    </>
  );
}
