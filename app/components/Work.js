"use client";
import React, { useState } from "react";
import Image from "next/image";
import Vezto from "../../public/Vezto.png";
import Nutty from "../../public/Nuttybliss.png";
import RMR from "../../public/rmr.svg";
import Zmyte from "../../public/Zmyte.svg";
import Brilliante from "../../public/Brilliante.svg";
import Linkmyte from "../../public/Linkmyte.svg";
import Rushrooms from "../../public/Rushrooms.svg";
import All from "../../public/all.svg";
import Ip from "../../public/ip.svg";
import Bitetheory from "../../public/bitetheory.png";

const projects = [

 { id: 1,
  type: "Graphic Design",
  title: "Bite Theory",
  description: "A food poster design that showcases food price and type of meal",
  imageUrl: Bitetheory,
  liveLink: "https://www.behance.net/gallery/223337985/Bite-Theory",
},
  {
    id: 2,
    type: "Graphic Design",
    title: "Vezto Haus",
    description: "Crafted a unique logo for a Clothing Brand.",
    imageUrl: Vezto,
    liveLink: "https://www.behance.net/gallery/222882791/Vezto-Haus-Logo-Design",
  },
  {
    id: 3,
    type: "Graphic Design",
    title: "NuttyBliss",
    description:
      "A self-initiated peanut butter brand project where I explored modern, minimal packaging using Adobe Illustrator and Photoshop.",
    imageUrl: Nutty,
    liveLink:
      "https://www.figma.com/proto/dzb4uJC2B8N2gzMrN1f816/Nutty-Bliss?page-id=0%3A1&node-id=3-150",
  },
  {
    id: 4,
    type: "UI/UX",
    title: "RMR Food App",
    description:
      "A food ordering and meal management system designed for hospitals, enabling seamless patient meal tracking and delivery.",
    imageUrl: RMR,
    liveLink:
      "https://www.figma.com/proto/JS9HAM0Fg9KS790YorQx5W/RMR-Food-App?page-id=0%3A1&node-id=5-489&p=f&viewport=-36%2C-2624%2C0.23&t=sthpmxb1diMuRqBD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5%3A606&show-proto-sidebar=1",
    caseStudyLink:
      "https://www.figma.com/proto/JS9HAM0Fg9KS790YorQx5W/RMR-Food-App?page-id=356%3A2083&node-id=356-2162&p=f&viewport=401%2C179%2C0.02&t=YfwimwC7xYscYUiC-1&scaling=min-zoom&content-scaling=fixed",
  },

  {
    id: 5,
    type: "UI/UX",
    title: "Zmyte Web App",
    description:
      "An AI-powered email and WhatsApp campaign automation platform, optimized for multilingual support and real-time analytics.",
    imageUrl: Zmyte,
    liveLink:
     "https://www.figma.com/proto/DGUV5pCL60PDN8kBXSoDUK/Zmyte?page-id=0%3A1&node-id=179-1459&p=f&viewport=362%2C-82%2C0.17&t=nNhbJOMX80n6xvJM-1&scaling=scale-down&content-scaling=responsive&starting-point-node-id=28%3A408&show-proto-sidebar=1",
    caseStudyLink:
      "https://www.figma.com/proto/DGUV5pCL60PDN8kBXSoDUK/Zmyte?page-id=609%3A4185&node-id=611-7079&p=f&viewport=313%2C45%2C0.02&t=CCC8noKSvaUrZmwd-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=611%3A7079",
  },

  {
    id: 6,
    type: "UI/UX",
    title: "LinkMyte",
    description:
      "An NFC-based digital business card solution that eliminates the need for physical cards, allowing seamless networking.",
    imageUrl: Linkmyte,
    liveLink:
     "https://www.figma.com/proto/UPUS8Eza6WfdCmtExxyOuA/LinkMyte-Customer-App?page-id=1219%3A18361"
  },
  {
    id: 7,
    type: "UI/UX",
    title: "Brilliante Car Wash App",
    description:
      "A premium car wash service app with booking, tracking, and subscription features, ensuring seamless customer interactions.",
    imageUrl: Brilliante,
    liveLink:
      "https://www.figma.com/proto/WiGpab2GdJ5MHRnma0R0gj/Untitled?page-id=0%3A1&node-id=126-842",
  },
  {
    id: 8,
    type: "UI/UX",
    title: "RushRoom Rental App",
    description:
      "A rental booking platform that provides a smooth user experience for both short-term and long-term accommodations.",
    imageUrl: Rushrooms,
    liveLink:
      "https://www.figma.com/proto/ofivgmecbeDWgiscwaQR1u/Untitled?page-id=0%3A1",
  },
  {
    id: 9,
    type: "Fullstack",
    title: "All In Car",
    description:
      "Built a responsive e-commerce platform for car sales, made for an intuitive shopping experience and easy vehicle listing.",
    imageUrl: All,
    liveLink: "https://allincars-brown.vercel.app/",
  },
  {
    id: 10,
    type: "Fullstack",
    title: "IP Address Tracker",
    description:
      "A web-based tool for tracking and analyzing IP addresses, providing real-time geographical insights.",
    imageUrl: Ip,
    liveLink: "https://ip-address-wheat.vercel.app/",
  },
];

function Work() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filters = ["All", "UI/UX", "Graphic Design", "Fullstack"];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.type === selectedFilter);

  return (
    <div className="bg-[#EEF0F2] px-4 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">My Work</h2>

        <div className="flex justify-center gap-4 flex-wrap mb-10">
          {filters.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                selectedFilter === category
                  ? "bg-black text-white"
                  : "bg-gray-300 text-black hover:bg-gray-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid justify-center gap-y-8 md:grid-cols-2 md:gap-x-4 md:px-6 px-2 py-8 lg:grid-cols-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="border border-[#B8B9BB] rounded-2xl py-4 px-4 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full items-start"
            >
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="w-full h-40 relative mb-2 block"
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </a>
              <div className="pt-4 flex-grow flex flex-col items-start gap-y-1">
                <h2 className="text-zinc-800 text-[14px] md:text-[16px] font-semibold">
                  {project.title}
                </h2>
                <p className="text-gray-700 text-[12px] md:text-[14px]">
                  {project.description}
                </p>
                <div className="mt-2 flex gap-4">
                  <a
                    className="text-blue-600 text-[12px] md:text-sm font-medium hover:underline"
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                  {project.caseStudyLink && (
                    <a
                      className="text-blue-600 text-[12px] md:text-sm font-medium hover:underline"
                      href={project.caseStudyLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Case Study
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
