import React from "react";
import Image from "next/image";
import ProfileImage from "@/public/images/profile2.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Henhen Imam M - About",
};

const AboutPage = () => {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-black">About</h1>
      <div className="mt-4 flex flex-col items-center justify-center md:flex-row md:space-x-4">
        <div className="mt-4 basis-3/4 space-y-4 font-medium md:mt-0">
          <p>
            Hello! I&apos;m a dedicated and passionate Android Developer and
            Fullstack Developer from Indonesia, with a rich background of 4
            years in developing both Android and Web Applications. Holding a
            Bachelor&apos;s degree in Computer Science, my journey in technology
            has been driven by my passion for creating software that ensures a
            seamless user experience across diverse platforms.
          </p>
          <p>
            Currently serving as a Civil Servant for the Indonesian Government,
            I bring a unique perspective to technology development, blending my
            expertise in public service with cutting-edge tech solutions.
          </p>
          <p>
            Beyond my technical pursuits, I&apos;m deeply committed to education
            and empowerment, actively engaging in teaching coding to children
            and anyone eager to learn the code.
          </p>
        </div>
        <Image
          className="order-first mt-4 h-auto max-w-full basis-1/4 rounded-lg object-contain md:order-last md:mt-0"
          src={ProfileImage}
          alt="Henhen Imam Muldani"
          width={350}
          height={350}
          priority={true}
        />
      </div>
    </section>
  );
};

export default AboutPage;
