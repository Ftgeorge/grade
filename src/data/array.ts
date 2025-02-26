import { FaFacebook, FaDiscord, FaGithub, FaDribbble } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Footer sections array
export const footerSections = [
    {
        title: "Company",
        links: [
            { name: "How It Works", href: "#" },
            { name: "Rewards", href: "#" },
            { name: "Testimonials", href: "#" },
            { name: "FAQ", href: "#" },
        ],
    },
    {
        title: "Help center",
        links: [
            { name: "Discord Server", href: "#" },
            { name: "Twitter", href: "#" },
            { name: "Facebook", href: "#" },
            { name: "Contact Us", href: "#" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", href: "#" },
            { name: "Licensing", href: "#" },
            { name: "Terms & Conditions", href: "#" },
        ],
    },
    {
        title: "Download",
        links: [
            { name: "iOS", href: "#" },
            { name: "Android", href: "#" },
        ],
    },
];

//Social icons array
export const socialIcons = [
    { icon: FaFacebook, label: "Facebook page", href: "#" },
    { icon: FaDiscord, label: "Discord community", href: "#" },
    { icon: FaXTwitter, label: "Twitter page", href: "#" },
    { icon: FaGithub, label: "GitHub account", href: "#" },
];
