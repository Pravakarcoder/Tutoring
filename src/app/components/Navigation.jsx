"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { BiChevronRight } from "react-icons/bi";
import LOGO from "../../../public/assets/WebAppLogo.png";

const navigationMenu = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#",
    label: "About Us",
  },
  {
    href: "#",
    label: "Programs",
  },
  {
    href: "#",
    label: "Registration Form",
  },
  {
    href: "#",
    label: "More",
  },
];

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const mobileMenuHandler = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });

      // When the window resize we set the navOpen false
      if (dimensions.width > 768 && navOpen) {
        setNavOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <header className="py-7">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            {/* LOGO */}
            <div>
              <Link href="/">
                <Image src={LOGO} width={50} height={30} alt="logo" />{" "}
                <span className="text-4xl text-blue-800">
                  THE SCHOLARS CORNER, LLC
                </span>
                <span className="text-blue-800 flex">TUTORING CENTER</span>
              </Link>
            </div>
            {/* Navigation Menu */}
            <div className="hidden lg:block text-center text-xl">
              <ul className="flex space-x-7">
                {navigationMenu.map((item, index) => (
                  <li key={item.label} className="hover:text-blue-800">
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* LOGIN */}

            <div>
              <Link
                href="#"
                className="px-5 py-4 bg-blue-600 text-white rounded-xl hidden lg:inline-block hover:bg-blue-800"
              >
                Log In
              </Link>

              <button
                className="block -mt-20 sm:-mt-14 md:-mt-14  lg:hidden"
                onClick={mobileMenuHandler}
              >
                <HiBars3 className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* For Mobile/Tablet Devices Nav Menu */}

      <div
        className={
          navOpen
            ? "py-0 block fixed w-screen z-[9999]"
            : " py-0 hidden fixed w-screen z-[9999]"
        }
      >
        <div
          className="h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50"
          onClick={mobileMenuHandler}
        ></div>

        <div className="bg-white w-[380px] top-0 right-0 z-[9999] h-screen fixed">
          <div className="h-14 px-10 border-b flex items-center">
            <button
              className="flex items-center space-x-3 "
              onClick={mobileMenuHandler}
            >
              <GrClose />
              <span>Close</span>
            </button>
          </div>

          <div className="h-full py-3 px-10 pb-20 overflow-y-scroll scroll-smooth">
            <ul className="block mb-7" onClick={mobileMenuHandler}>
              {navigationMenu.map((item, index) => (
                <Link
                  href={item.href}
                  className="group flex items-center py-2 duration-300 transition-all ease-in-out  hover:text-blue-900"
                >
                  <span>{item.label}</span>
                  <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                    <BiChevronRight className="text-xl" />
                  </span>
                </Link>
              ))}
              <div></div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
