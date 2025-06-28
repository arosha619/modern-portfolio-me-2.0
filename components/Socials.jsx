import Link from "next/link";
import {
  FaLinkedinIn,
  FaGithub,
  FaMediumM,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export const socialData = [
  {
    name: "LinkedIn",
    link: "https://linkedin.com",
    Icon: FaLinkedinIn,
  },
  {
    name: "Github",
    link: "https://github.com",
    Icon: FaGithub,
  },
  {
    name: "Medium",
    link: "https://medium.com",
    Icon: FaMediumM,
  },
  {
    name: "Facebook",
    link: "https://facebook.com",
    Icon: FaFacebookF,
  },
  {
    name: "Instagram",
    link: "https://instagram.com",
    Icon: FaInstagram,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={
            "hover:text-accent transition-all duration-300 rounded-full p-[5px] focus:outline-none focus:ring-2 focus:ring-accent"
          }
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
