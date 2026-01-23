'use client';

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../constants/constants";
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import color_sharp from "../assets/color_sharp.png";
import astronaut from "../assets/header.png";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="w-full sm:w-[320px] md:w-[250px]"
    glareEnable={true}
    glareMaxOpacity={0.8}
    glareColor="#ffffff"
    glarePosition="bottom"
    glareBorderRadius="20px"
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    tiltEnable={true}
    perspective={1000}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.25, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-6 px-8 min-h-[260px] flex justify-evenly items-center flex-col">
        <Image src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/*  overflow visível no mobile, e visível no desktop também */}
      <div className="relative overflow-visible">
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Overview
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[16px] sm:text-[18px] max-w-3xl leading-[28px] sm:leading-[30px] font-semibold"
        >
          I’m Wagner Paulo — a full-stack builder focused on automation and AI workflows. I turn ideas into systems that run by themselves: lead capture, content pipelines, integrations, dashboards, and scalable web apps. Fast execution, clean UX, measurable outcomes.
        </motion.p>

        {/* fundo roxo (ok ficar cortado, é efeito) */}
        <Image
          src={color_sharp}
          alt="color-sharp"
          className="absolute z-[-1] h-80 -left-60 w-screen -top-20"
        />

        {/* ✅ astronauta responsivo (não corta no mobile) */}
        <Image
          src={astronaut}
          alt="astronaut"
          className="
            absolute z-[-1] animation
            top-10 right-[-10px]
            w-[180px] h-auto opacity-90
            sm:top-16 sm:right-[-20px] sm:w-[240px]
            lg:top-28 lg:right-[-20px] lg:w-auto lg:h-80
          "
        />
      </div>

      <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
