import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProfileImage from "../public/images/profile.png";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center p-6 md:flex-row md:space-x-4">
      <Link href={"/"}>
        <Image
          className="rounded-full border-8 border-black shadow-black hover:border-[#CBA65F] dark:border-white dark:hover:border-[#CBA65F]"
          src={ProfileImage}
          alt="Henhen Imam Muldani"
          width={250}
          height={250}
          priority={true}
        />
      </Link>
      <div className="text-dark dark:text-light">
        <h1 className="mt-6 text-4xl font-bold md:mt-0">
          I&#39;m Henhen Imam Muldani
        </h1>
        <h1 className="mt-2 text-2xl font-semibold">
          Fullstack Web Developer 💻
        </h1>
        <h1 className="text-2xl font-semibold">Android Developer 📱</h1>
        <h1 className="text-2xl font-semibold">Coding Teacher 👨‍🏫</h1>
        <h1 className="text-2xl font-semibold">Civil Servant 👨‍💻</h1>
        {/* <div className="flex items-center self-start mt-3">
          <Link
            href="/dummy.pdf"
            target="_blank"
            download={true}
            className="flex items-center p-1 px-3 text-lg font-semibold border-4 border-b-8 border-r-8 border-transparent border-solid rounded-lg bg-dark dark:bg-light dark:text-dark text-light hover:bg-primary dark:hover:bg-primary hover:text-dark dark:hover:text-light hover:border-dark dark:hover:border-light"
          >
            Resume
            <span>
              <FaExternalLinkAlt size={24} className="ml-2" />
            </span>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
