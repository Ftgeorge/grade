
import SecondaryButton from "@/app/components/Buttons/SecondaryButton";
import HeaderText from "@/app/components/Text/HeaderText";
import SubHeaderText from "@/app/components/Text/SubHeaderText";
import { BsDownload } from "react-icons/bs";
import { MdOutlineArrowForward, MdOutlineArrowOutward } from "react-icons/md";

export default function HomePage() {
    return (
        <>
            <div className="w-full h-screen bg-hero bg-no-repeat bg-cover relative">
                <div className="absolute inset-0 bg-white opacity-50"></div>
                <div className="relative flex justify-center items-center h-full">
                    <div className="w-5/12 flex flex-col gap-6 justify-center items-center">
                        <HeaderText placeholder="Secure. Smart. Seamless" />
                        <SubHeaderText placeholder="AI-powered examination monitoring with real-time face and voice recognition to detect and prevent malpractice." className="2xl:text-center"/>
                        <div className="flex flex-row gap-4">
                            <SecondaryButton placeholder="Get Started" primary={true}>
                                <MdOutlineArrowForward className="text-base md:text-base lg:text-base xl:text-xl 2xl:text-xl" />
                            </SecondaryButton>
                            <SecondaryButton placeholder="Request a Demo" primary={false}>
                                <MdOutlineArrowOutward className="text-base md:text-base lg:text-base xl:text-xl 2xl:text-xl" />
                            </SecondaryButton>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
