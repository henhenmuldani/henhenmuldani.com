import React from "react";
import { MdEmail } from "react-icons/md";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Henhen Imam M - Contact",
};

const email = "henhenmuldani@gmail.com";
const ContactPage = () => {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-black">Contact</h1>
      <div className="mt-4 font-medium">
        <p>Have a question?</p>
        <p>
          Looking for a developer who can help you build a web or mobile app?
        </p>
        <p>
          I&apos;d love to hear from you! Feel free to get in touch to discuss
          your requirements and see how I can help you.
        </p>
      </div>
      <div className="mt-4 font-medium">
        <p>Social media is great for informal chats.</p>
        <p>Email works best for in depth discussions.</p>
      </div>
      <a
        className="mt-4 flex items-center hover:text-[#CBA65F] "
        target="_blank"
        href={`mailto:${email}`}
      >
        <MdEmail size={36} />
        <p className="ml-2 text-lg font-medium">{email}</p>
      </a>
      <Contact />
    </section>
  );
};

export default ContactPage;
