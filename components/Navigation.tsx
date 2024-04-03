"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import LogoDark from "../public/images/logo_light.svg";
import LogoLight from "../public/images/logo_dark.svg";
import Image from "next/image";
import { useTheme } from "next-themes";
const links = [
  {
    id: 1,
    name: "About",
  },
  {
    id: 2,
    name: "Blog",
  },
  {
    id: 3,
    name: "Projects",
  },
  {
    id: 4,
    name: "Contact",
  },
];
const Navigation = () => {
  // dark mode switch
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // button menu on mobile
  const [navigation, setNavigation] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  // set Logo based on theme
  let srcLogo;

  switch (theme) {
    case "light":
      srcLogo = LogoLight;
      break;
    case "dark":
      srcLogo = LogoDark;
      break;
    default:
      srcLogo =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      break;
  }

  const handleOnClick = () => {
    setNavigation(!navigation);
    if (!navigation) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
    // can be simplified to
    //* !navigation ? (hide) : (visible);
  };

  return (
    <nav className="flex items-center justify-between p-6">
      <Link href="/">
        <Image src={srcLogo} width={36} height={36} alt="Logo Henhen" />
      </Link>
      <div className="flex items-center gap-x-6">
        <div className="hidden text-xl font-medium md:block">
          <ul className="flex space-x-4">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={`/${link.name.toLowerCase()}`}
                  className="hover:text-[#CBA65F]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
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

        {/* Mobile View */}
        {navigation && (
          <div className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-background md:hidden">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={`/${link.name.toLowerCase()}`}
                    onClick={handleOnClick}
                    className="text-xl font-medium hover:text-[#CBA65F]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
