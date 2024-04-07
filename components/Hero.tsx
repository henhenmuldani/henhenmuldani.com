import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProfileImage from "../public/images/profile.jpg";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center p-6 md:flex-row md:space-x-7">
      {/* hubungkan ke linkedin kayaknya bagus */}
      <Link href={"/"}>
        <Image
          className="rounded-full border-8 border-foreground shadow-foreground transition duration-300 ease-in-out hover:border-[#CBA65F]"
          src={ProfileImage}
          alt="Henhen Imam Muldani"
          width={250}
          height={250}
          priority={true}
        />
      </Link>
      <div>
        <h1 className="mt-6 text-4xl font-bold md:mt-0">
          I&#39;m Henhen Imam Muldani
        </h1>
        <div className="mt-4 text-2xl font-medium">
          <h2>Fullstack Web Developer 💻</h2>
          <h2>Android Developer 📱</h2>
          <h2>Coding Teacher 👨‍🏫</h2>
          <h2>Civil Servant 👨‍💻</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
