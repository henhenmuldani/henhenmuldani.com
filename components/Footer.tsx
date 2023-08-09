import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <section className="container mx-auto mb-4 flex max-w-screen-lg items-center justify-center space-x-4 p-6">
      <Link
        className="hover:text-[#CBA65F]"
        target="_blank"
        href={"https://www.linkedin.com/in/henhenmuldani/"}
      >
        <FaLinkedin size={40} />
      </Link>

      <Link
        className="hover:text-[#CBA65F]"
        target="_blank"
        href={"https://github.com/henhenmuldani"}
      >
        <FaGithub size={40} />
      </Link>

      {/* <Link
        className="hover:text-[#CBA65F]"
        target="_blank"
        href={"https://medium.com/@henhenmuldani"}
      >
        <FaMedium size={40} />
      </Link> */}

      <Link
        className="hover:text-[#CBA65F]"
        target="_blank"
        href={"https://www.instagram.com/henhenmuldani/"}
      >
        <FaInstagram size={40} />
      </Link>
    </section>
  );
};

export default Footer;
