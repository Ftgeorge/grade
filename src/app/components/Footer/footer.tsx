import { footerSections, socialIcons } from "@/data/array";
import Logo from "../Logo/Logo";
import PoweredByLogo from "../Logo/PoweredByLogo";

export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="mx-auto w-full flex flex-col justify-center items-center">
                <div className="grid grid-cols-2 gap-20 md:gap-24 lg:gap-24 xl:gap-24 2xl:gap-24 px-4 py-6 lg:py-8 md:grid-cols-4">
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h2 className="mb-6 text-sm font-semibold font-montserrat text-black uppercase">
                                {section.title}
                            </h2>
                            <ul className="text-gray-500 text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-medium">
                                {section.links.map((link) => (
                                    <li className="mb-4" key={link.name}>
                                        <a href={link.href} className="hover:underline hover:text-primary font-montserrat">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="px-4 py-6 w-full flex flex-col items-center md:flex-col space-y-5 rtl:space-y-reverse">
                    <div>
                        <Logo />
                        <PoweredByLogo />
                    </div>

                    <span className="text-sm text-mutedGray font-montserrat sm:text-center">
                        © 2025 <a href="#">Heuvera</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                        {socialIcons.map(({ icon: Icon, label, href }, index) => (
                            <a key={index} href={href} className="text-gray-400 hover:text-primary">
                                <Icon className="text-xl" />
                                <span className="sr-only">{label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
