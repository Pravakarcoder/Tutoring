import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { HiPhone } from "react-icons/hi2";

import LOGO from "../../../public/assets/WebAppLogo.png";

const footerContent = {
  about: {
    description:
      "Quia at dolor commodi assumenda fugiat asperiores accusamus animi, odio quae doloremque qui laudantium non illo similique voluptatem autem!",
    cta: {
      href: "#",
      label: "Learn more",
    },
  },
  footerLinks: [
    {
      heading: "Company",
      links: [
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
      ],
    },
    {
      heading: "Resources",
      links: [
        {
          href: "#",
          label: "None",
        },
        {
          href: "#",
          label: "Support",
        },
        {
          href: "#",
          label: "Terms & conditions",
        },
        {
          href: "#",
          label: "Privacy policy",
        },
      ],
    },
  ],
  contact: {
    heading: "Contact",
    description:
      "We value your feedback and inquiries. Our dedicated team is here to assist you with any questions, concerns, or comments you may have.",
    address: {
      street: "26 State, Zip Code",
      phone: "(2222) 3034-43356",
    },
  },
  copyright: {
    labelOne: "Copyright 2023. Deployed with",
    labelTwo: "by saurav All right reserved.",
  },
};

const Footer = () => {
  return (
    <footer role="contentinfo" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="block lg:flex gap-20 mb-10 pb-10">
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <Link href="/" className="mb-4 inline-block">
              <Image src={LOGO} width={50} height={30} alt="Logo" />
            </Link>
            <p className="leading-relaxed mb-7">
              {footerContent.about.description}
            </p>
            <p>
              <Link
                href={footerContent.about.cta.href}
                className="flex space-x-2 outline-none items-center font-semibold text-primary group"
              >
                <span>{footerContent.about.cta.label}</span>
                <span className="w-6 h-6 rounded-full bg-primary text-white inline-flex items-center justify-center duration-300 transition-all ease-in-out group-hover:bg-secondary">
                  <BiChevronRight className="text-lg" />
                </span>
              </Link>
            </p>
          </div>
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <div className="grid grid-cols-2 gap-10">
              {footerContent.footerLinks.map((footerLink, index) => (
                <div>
                  <h3 className="font-semibold text-heading mb-5">
                    {footerLink.heading}
                  </h3>
                  <ul className="p-0 m-0">
                    {footerLink.links.map((link, indesx) => (
                      <li className="mb-3">
                        <Link
                          href={link.href}
                          className="group-flex items-center duration-300 transition-all ease-in-out hover:text-primary"
                        >
                          <span>{link.label}</span>
                          <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                            <BiChevronRight className="text-2xl text-red-900" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-4/12">
            <h3 className="font-semibold text-heading mb-3">
              {footerContent.contact.heading}
            </h3>
            <p className="leading-relaxed mb-7">
              {footerContent.contact.description}
            </p>
            <ul>
              <li className="flex items-start space-x-3 mb-5">
                <HiLocationMarker className="text-xl text-blue-800" />
                <span>{footerContent.contact.address.street}</span>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <HiPhone className="text-xl text-blue-800" />
                <span>{footerContent.contact.address.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-10 border-t border-gray-200">
          <p>
            {footerContent.copyright.labelOne}{" "}
            {footerContent.copyright.labelTwo}
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
