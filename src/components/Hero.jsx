'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "../assets/user.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

const Hero = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  const xPercentRef = useRef(0);
  const directionRef = useRef(-1);
  const rafRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (slider.current) {
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.5,
          start: 0,
          end: window.innerHeight,
          onUpdate: (e) => {
            directionRef.current = e.direction * -1;
          },
        },
        x: "-500px",
      });
    }

    const animate = () => {
      if (!firstText.current || !secondText.current) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      let xPercent = xPercentRef.current;
      const direction = directionRef.current;

      if (xPercent < -100) xPercent = 0;
      if (xPercent > 0) xPercent = -100;

      gsap.set(firstText.current, { xPercent });
      gsap.set(secondText.current, { xPercent });

      xPercentRef.current = xPercent + 0.08 * direction;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen mx-auto banner overflow-hidden pt-32 sm:pt-28">
      {/* GRID */}
      <div
        className="
          relative max-w-7xl mx-auto
          px-4 sm:px-10 md:px-12 lg:px-16
          grid grid-cols-1 lg:grid-cols-2
          gap-5 sm:gap-8
          items-start lg:items-center
        "
      >
        {/* ESQUERDA */}
        <div className="flex items-start gap-4 sm:gap-5">
          <div className="flex flex-col justify-center items-center mt-2 sm:mt-5 shrink-0">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 h-28 xs:h-36 sm:h-80 violet-gradient" />
          </div>

          <div className="animation">
            <h1 className="text-white font-black mt-6 sm:mt-10 leading-[1.15] text-[34px] xs:text-[42px] sm:text-[56px] lg:text-[80px]">
              Hi, I'm
              <span
                className="
                  block
                  whitespace-nowrap
                  text-transparent bg-clip-text
                  bg-gradient-to-r from-purple-500 to-cyan-500

                  text-[38px]
                  xs:text-[48px]
                  sm:text-[64px]
                  lg:text-[90px]

                  leading-[1.2]
                  pb-2
                "
              >
                Wagner Paulo
              </span>
            </h1>
          </div>
        </div>

        {/* DIREITA */}
        <div className="relative w-full flex justify-center lg:justify-end">
          <Image
            src={heroImg}
            alt="hero"
            className="
              animation
              w-[180px] xs:w-[220px] sm:w-[300px] lg:w-[520px]
              h-auto
              pointer-events-none
              select-none
            "
          />
        </div>
      </div>

      {/* SLIDER */}
      <div className="sliderContainer pointer-events-none">
        <div
          ref={slider}
          className="slider overflow-hidden text-secondary text-[18px] sm:text-[22px] lg:text-[44px] tracking-wide opacity-80"
        >
          <p ref={firstText}></p>
          <p ref={secondText}></p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
