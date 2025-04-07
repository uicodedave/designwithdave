"use client";
import React from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import "animate.css";

import Quote from "../public/quotee.svg";
import Doodle from "../public/doodle.png";
import Me from "../public/me.svg";
import LinkedIn from "../public/linkedinn.svg";
import Behance from "../public/behance.svg";
import Mail from "../public/mail.svg";
import Whatsapp from "../public/Whatsapp.svg";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
  SiAdobeaftereffects,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";

export default function Home() {
  return (
    <div className="scroll-smooth bg-[#EEF0F2]">
      <Navbar />

      {/* Home Section */}
      <section
        id="home"
        className="h-screen bg-[#EEF0F2] flex flex-col gap-y-24 md:flex-row items-center justify-center text-[#141414] px-6 py-4  md:py-12  relative overflow-hidden"
      >
        {/* Doodle Image */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0 animate__animated animate__fadeInLeft animate__delay-1s">
          <Image
            className="absolute left-1/2 transform -translate-x-1/2 w-32 sm:w-40 md:w-48 animate__animated animate__zoomIn"
            src={Doodle}
            alt="Doodle"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left animate__animated animate__fadeIn animate__delay-2s">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 animate__animated animate__fadeInUp">
            Welcome to David's life as a Graphic Designer and a UI/UX Designer
          </h2>
          <p className="text-lg sm:text-xl mb-6 max-w-4xl mx-auto md:mx-0 animate__animated animate__fadeInUp animate__delay-3s">
            Dive into a world where design meets creativity, and every pixel
            counts.
          </p>
          <Image
  className="absolute w-60 animate__animated animate__rotateIn animate__delay-4s 
    left-1/2 -translate-x-1/2 
    md:left-auto md:right-12 md:translate-x-0"
  src={Quote}
  alt="Quote"
/>

        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="h-auto md:h-screen flex flex-col md:flex-row gap-y-8 md:gap-x-6 items-center justify-around bg-[#EEF0F2] px-4 py-8 md:py-0"
      >
        {/* Image Section */}
        <div className="flex justify-center md:justify-around w-full md:w-1/2 animate__animated animate__fadeInLeft animate__delay-1s">
          <Image className="w-[200px] sm:w-[300px] md:w-[300px]" src={Me} alt="me" />
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-y-4 w-full text-center md:text-left pr-0 md:pr-6 animate__animated animate__fadeInUp animate__delay-2s">
          <h1 className="text-[#141414] font-semibold text-2xl md:text-2xl">
            Introduction
          </h1>
          <div className="px-4 py-4 flex flex-col gap-y-2 text-[#222222] font-medium border-[1px] border-[#666666] rounded-2xl animate__animated animate__fadeInUp animate__delay-3s">
            <h1 className="text-[#161616] font-semibold text-xl">
              A Graphic Designer and UI/UX Designer based in Nigeria
            </h1>
            <p>
              Hi, I'm Ayantoye David, a Graphic Designer and UI/UX Designer from Nigeria. I specialize in creating user-centered interfaces with a focus on aesthetics and functionality. Skilled in Figma, Adobe Illustrator, Photoshop, After Effects, anything design—I’m passionate about blending creativity with technology. Always eager to learn and collaborate on exciting projects!
            </p>
            <div className="flex justify-center md:justify-start gap-x-4 py-4">
            <a href="http://www.linkedin.com/in/ayantoye-david-64615b249/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BVMzu4kN%2FRnG8gi3XOhFrKg%3D%3D" target="_blank" rel="noopener noreferrer">
                <Image className="w-[40px]" src={LinkedIn} alt="linkedin" />
              </a>        
             
              <a href="https://www.behance.net/ayantoyedavid" target="_blank" rel="noopener noreferrer">
                <Image className="w-[40px]" src={Behance} alt="behance" />
              </a>
              <a href="mailto:uicodedave@gmail.com" className="text-white">
                <Image className="w-[40px]" src={Mail} alt="email" />
              </a>
              <a href="https://wa.me/+2348144936800" target="_blank" rel="noopener noreferrer">
                <Image className="w-[40px]" src={Whatsapp} alt="whatsapp" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section
        id="resume"
        className="h-auto md:h-screen flex flex-col md:flex-row flex-wrap gap-12 items-start justify-center bg-[#EEF0F2] px-8 py-12"
      >
        {/* EXPERIENCE */}
        <div className="flex flex-col w-full md:w-[30%] gap-3">
          <h1 className="text-[#141414] font-semibold text-xl md:text-2xl">Experience</h1>
          {[ 
            {
              year: "2025 - Present",
              company: "Difusser Tech",
              location: "Saudi Arabia",
              role: "Full time UI/UX Designer",
            },
            {
              year: "2025 - Present",
              company: "Afridol",
              location: "Morocco",
              role: "Frontend Developer",
            },
            {
              year: "2024 - 2025",
              company: "Sohoby Company",
              location: "Saudi Arabia",
              role: "Full time UI/UX Designer",
            },
          ].map((item, index) => (
            <div key={index} className="p-5 border border-[#B8B9BB] rounded-2xl  space-y-3">
              <div className="bg-[#011638] text-white text-xs px-3 py-1 rounded-full w-fit">
                {item.year}
              </div>
              <div className="space-y-1">
                <h2 className="text-[#141414] font-medium text-base">{item.company}</h2>
                <p className="text-[#666666] text-sm">{item.location}</p>
                <p className="text-[#222222] font-medium text-base">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* EDUCATION */}
        <div className="flex flex-col w-full md:w-[30%] gap-3">
          <h1 className="text-[#141414] font-semibold text-xl md:text-2xl">Education</h1>
          {[ 
            {
              year: "2022 - 2023",
              school: "Larva Coding Academy",
              title: "Certified Full time UI/UX Designer",
            },
            {
              year: "2022 - 2023",
              school: "Larva Coding Academy",
              title: "Certified Fullstack Developer",
            },
          ].map((edu, index) => (
            <div key={index} className="p-5 border border-[#B8B9BB] rounded-2xl  space-y-3">
              <div className="bg-[#011638] text-white text-xs px-3 py-1 rounded-full w-fit">
                {edu.year}
              </div>
              <div className="space-y-1">
                <h2 className="text-[#141414] text-base font-medium">{edu.school}</h2>
                <p className="text-[#222222] font-medium text-sm">{edu.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* HARD SKILLS & EXPERTISE */}
        <div className="flex flex-col w-full md:w-[30%] gap-3">
          <h1 className="text-[#141414] font-semibold text-xl md:text-2xl">Hard Skills</h1>
          <div className="p-5 border border-[#B8B9BB] rounded-2xl ">
            <div className="flex flex-wrap items-center gap-6">
              <SiAdobeillustrator className="text-[#CC7A00] text-4xl hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_6px_#CC7A00]" title="Adobe Illustrator" />
              <SiAdobephotoshop className="text-[#1F85CC] text-4xl hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_6px_#1F85CC]" title="Adobe Photoshop" />
              <SiFigma className="text-[#C63D14] text-4xl hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_6px_#C63D14]" title="Figma" />
              <SiAdobeaftereffects className="text-[#6666CC] text-4xl hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_6px_#6666CC]" title="After Effects" />
              <SiReact className="text-[#2FA8C8] text-4xl hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_6px_#2FA8C8]" title="React" />
              <SiNextdotjs className="text-[#333333] text-4xl hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_6px_#CCCCCC]" title="Next.js" />
              <SiMongodb className="text-[#3A8F2B] text-4xl hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_6px_#3A8F2B]" title="MongoDB" />
              <SiExpress className="text-[#333333] text-4xl hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_6px_#CCCCCC]" title="Express.js" />
              <SiNodedotjs className="text-[#5F9F1F] text-4xl hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_6px_#5F9F1F]" title="Node.js" />
            </div>
          </div>
        </div>
      </section>

    {/* Project Section */}
      <section id="project" className="">
       <Work />
      </section>


    {/* Contact Section */}
      <section id="contact" className=" flex flex-col md:flex-row flex-wrap gap-12 items-start justify-start bg-[#B8B9BB] px-6 md:px-12 py-12">
      <div>

      <div className="flex flex-col justify-center md:justify-start gap-x-4 py-4">
        
<h1 className="text-[#141414] text-xl font-semibold">DesignwithDave</h1>
<div className="flex justify-center md:justify-start gap-x-2 py-4">
<a href="http://www.linkedin.com/in/ayantoye-david-64615b249/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BVMzu4kN%2FRnG8gi3XOhFrKg%3D%3D" target="_blank" rel="noopener noreferrer">
                <Image className="w-[40px]" src={LinkedIn} alt="linkedin" />
              </a>        
             
              <a href="https://www.behance.net/ayantoyedavid" target="_blank" rel="noopener noreferrer">
                <Image className="w-[40px]" src={Behance} alt="behance" />
              </a>
              <a href="mailto:uicodedave@gmail.com" className="text-white">
                <Image className="w-[40px]" src={Mail} alt="email" />
              </a>
              <a href="https://wa.me/+2348144936800" target="_blank" rel="noopener noreferrer">
                <Image className="w-[40px]" src={Whatsapp} alt="whatsapp" />
              </a>
</div>
      
            </div>
      </div>
      </section>
    </div>
  );
}
