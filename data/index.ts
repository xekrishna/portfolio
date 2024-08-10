import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "Recify - Recipe Sharing",
    des: " Discover, share, and save your favorite recipes with a vibrant and innovative community of food lovers!",
    img: "/frontend.jpeg",
    iconLists: ["/jsx.png", "/tailwind.png", "appwrite.png"],
    link: "https://github.com/xekrishna",
    popup: "/github.com/xekrishna",
  },
  {
    id: 2,
    title: "Xernia",
    des: " Exceptional Services, Unmatched Excellence. Discover tailored solutions that elevate your business.",
    img: "xernia.png",
    iconLists: ["/nextjs.png", "/tailwind.png"],
    link: "https://xernia.vercel.app",
    popup: "/xernia.vercel.app",
  },
  {
    id: 3,
    title: "Veridia",
    des: " Elegance in Tradition. Discover exquisite Indian traditional clothing that celebrates heritage and style.",
    img: "xernia.png",
    iconLists: ["/jsx.png", "/tailwind.png"],
    link: "https://xernia.vercel.app",
    popup: "/xernia.vercel.app",
  },
  {
    id: 4,
    title: "Vaarta - Chatting App",
    des: "Connect, Chat, Engage. Experience seamless conversations with the ultimate chatting app.",
    img: "frontend.jpeg",
    iconLists: ["/jsx.png", "/tailwind.png", "firebase.png"],
    link: "https://github.com/xekrishna/vaarta",
    popup: "/github.com/xerkrishna/vaarta",
  },
];

export const socials = [
  {
    icon: BsTwitterX,
    link: "https://x.com/mayankbisht69",
  },
  {
    icon: BsInstagram,
    link: "https://www.instagram.com/kwishy.kun",
  },
  {
    icon: BiLogoLinkedin,
    link: "https://www.linkedin.com/in/xekrishna/",
  },
  {
    icon: BsGithub,
    link: "https://github.com/xekrishna",
  },
];
