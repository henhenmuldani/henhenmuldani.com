"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import LogoDark from "../public/images/logo_light.svg";
import LogoLight from "../public/images/logo_dark.svg";
import Image from "next/image";
import { useTheme } from "next-themes";

const links = [
  // {
  //   id: 0,
  //   name: "Blog",
  // },
  {
    id: 1,
    name: "Projects",
  },
  {
    id: 2,
    name: "Contact",
  },
  // {
  //   id: 3,
  //   name: "Certificate",
  // },
];
const Navigation = () => {
  // dark mode switch
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  //button menu on mobile
  const [navigation, setNavigation] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const handleOnClick = () => {
    setNavigation(!navigation);
    if (!navigation) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
    //bisa disingkat jadi
    //* !navigation ? (hide) : (visible);
  };

  //* console.log(theme);

  return (
    <div className="z-10 mx-auto flex select-none items-center justify-between p-6">
      <Link href="/">
        {theme === "dark" ? (
          <Image src={LogoDark} alt="Logo Henhen" height={36} width={36} />
        ) : (
          <Image src={LogoLight} alt="Logo Henhen" height={36} width={36} />
        )}
        {/* <h1>HIM</h1> */}
        {/* <h1>{theme}</h1> */}
      </Link>

      <div className="flex items-center gap-x-6">
        <nav className="hidden select-none space-x-5 text-lg font-medium md:block">
          {links.map((link) => (
            <Link
              href={`/${link.name.toLowerCase()}`}
              key={link.id}
              className="select-text hover:text-[#CBA65F]"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <button
          aria-label="mobile-menu"
          className="z-10 order-last md:hidden"
          onClick={handleOnClick}
        >
          {navigation ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {theme === "dark" ? (
          <button aria-label="light" onClick={() => setTheme("light")}>
            <FiSun size={24} />
          </button>
        ) : (
          <button aria-label="dark" onClick={() => setTheme("dark")}>
            <FiMoon size={24} />
          </button>
        )}

        {/* Tampilan Mobile */}
        {navigation && (
          <div className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-white text-black dark:bg-black dark:text-white md:hidden">
            {links.map((link) => (
              <Link
                key={link.id}
                href={`/${link.name.toLowerCase()}`}
                onClick={handleOnClick}
                className="px-4 py-2 text-3xl font-medium capitalize text-black hover:text-[#CBA65F] dark:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
