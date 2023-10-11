"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const heroContent = {
  text: {
    subheading: "Welcome to The Scholars Corner Tutoring Center",
    heading: "Serving Queens Community Since 2014",
    description:
      " We are here to provide peace-of-mind to working parents and to all parents out there in the community by assisting their children with school assignments, as well as providing additional material that challenges and strengthens their skills. The Scholars Corner Tutoring understands the importance of having a safe, fun way to spend time after school and of experiencing enhanced academics with extra learning activities.",
  },

  images: {
    img1: "https://static.wixstatic.com/media/5980d9_75b97c7b74e9404197a2dc8f6f8a8093~mv2.jpg/v1/crop/x_0,y_9,w_1600,h_971/fill/w_800,h_481,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5980d9_75b97c7b74e9404197a2dc8f6f8a8093~mv2.jpg",
    img2: "https://static.wixstatic.com/media/5980d9_c2bd00b075d54c758f92f8ff412864de.jpg/v1/fill/w_336,h_224,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5980d9_c2bd00b075d54c758f92f8ff412864de.jpg",
    img3: "https://static.wixstatic.com/media/5980d9_c00086dd17524102ba5440e56e442d98.jpg/v1/fill/w_415,h_310,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5980d9_c00086dd17524102ba5440e56e442d98.jpg",
    img4: "https://static.wixstatic.com/media/5980d9_2834ea225822419da22adb4c7b892a7f~mv2.jpg/v1/fill/w_346,h_269,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1-1.jpg",
    img5: "https://static.wixstatic.com/media/5980d9_61d09fd1f46d408baa5d4716bb10e1c9~mv2.jpg/v1/fill/w_455,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1-2.jpg",
    img6: "https://static.wixstatic.com/media/5980d9_cd60b67cf4cb499e8fa7fefe8ee55302.jpg/v1/fill/w_800,h_533,al_c,q_85,enc_auto/5980d9_cd60b67cf4cb499e8fa7fefe8ee55302.jpg",
    img7: "https://static.wixstatic.com/media/5980d9_f989fdc5a2a54591a5d6fc5184e339c0~mv2.jpg/v1/fill/w_283,h_366,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1-3.jpg",
  },
};

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easeing: "slide",
      once: true,
    });
  });

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            {heroContent.text.subheading && (
              <span className="inline-block py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:z-[-1]">
                {heroContent.text.subheading}
              </span>
            )}

            {heroContent.text.heading && (
              <h1 className="text-4xl lg:text-5xl font-bold text-heading mb-7">
                {heroContent.text.heading}
              </h1>
            )}

            {heroContent.text.description && (
              <p className="leading-relaxed text-body mb-10">
                {heroContent.text.description}
              </p>
            )}

            <div className="flex space-x-3">
              <Link
                href="#_"
                className="py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] hover:shadow-lg inline-block relative top-0 hover:-top-1"
              >
                Get Started
              </Link>

              <Link
                href="#_"
                className="py-4 px-5 bg-secondary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] hover:shadow-lg inline-block relative top-0 hover:-top-1"
              >
                How it works?
              </Link>
            </div>
          </div>

          <div className="lg:w-6/12 space-y-2">
            <div className="flex space-x-2 items-stretch">
              <div className="w-8/12">
                {heroContent.images.img1 && (
                  <Image
                    src={heroContent.images.img1}
                    width={397}
                    height={406}
                    className="object-cover h-full w-full rounded-2xl"
                  />
                )}
              </div>

              <div className="w-4/12 self-end space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {heroContent.images.img2 && (
                    <div>
                      <Image
                        src={heroContent.images.img2}
                        width={437}
                        height={437}
                        className="object-cover h-full w-full rounded-2xl"
                      />
                    </div>
                  )}
                  <div className="rounded-2xl rounded-tr-[200px]">
                    {heroContent.images.img5 && (
                      <div>
                        <Image
                          src={heroContent.images.img5}
                          width={437}
                          height={437}
                          className="object-cover h-full w-full rounded-2xl"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {heroContent.images.img3 && (
                  <div>
                    <Image
                      src={heroContent.images.img3}
                      width={374}
                      height={392}
                      className="object-cover h-full w-full rounded-2xl"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex space-x-2">
              <div className="w-4/12">
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-2xl rounded-bl-[200px]">
                    {heroContent.images.img7 && (
                      <div>
                        <Image
                          src={heroContent.images.img7}
                          width={374}
                          height={392}
                          className="object-cover h-full w-full rounded-2xl"
                        />
                      </div>
                    )}
                  </div>
                  {heroContent.images.img4 && (
                    <div>
                      <Image
                        src={heroContent.images.img4}
                        width={394}
                        height={394}
                        className="object-cover h-full w-full rounded-2xl"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="w-5/12">
                {heroContent.images.img4 && (
                  <div>
                    <Image
                      src={heroContent.images.img5}
                      width={446}
                      height={495}
                      className="object-cover h-full w-full rounded-2xl"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
