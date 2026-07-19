import React, { useState, useEffect } from "react";
import { HiMiniPaintBrush } from "react-icons/hi2";
import { useInView } from "react-intersection-observer";
import nextjs from '/img/nextjs.jpg';

const Myskill = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) setAnimate(true);
  }, [inView]);

  const skills = [
    {
      name: "HTML",
      percentage: 90,
      color: "text-orange-500",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      name: "CSS",
      percentage: 85,
      color: "text-blue-500",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
      name: "JavaScript",
      percentage: 67,
      color: "text-yellow-400",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "Node Js",
      percentage: 40,
      color: "text-green-500",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
      name: "Express Js",
      percentage: 47,
      color: "text-gray-300",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    },
    {
      name: "React",
      percentage: 72,
      color: "text-sky-400",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "MongoDB",
      percentage: 43,
      color: "text-green-300",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    },
    {
      name: "Next Js",
      percentage: 60,
      color: "text-gray-600",
      icon: nextjs,
    },
  ];

  return (
    <>
      <section id="about" className="py-16 text-[#f316b0]">
        <div className="heading-content">
          <div className="flex gap-2 items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-300">
              MY SKILLS
            </h2>
            <div className="text-[40px] text-purple-300">
              <HiMiniPaintBrush />
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div
          ref={ref}
          className="flex flex-wrap gap-8 justify-center items-center mt-10"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Circular Progress Bar */}
              <div className="relative w-28 h-28">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  {/* Background Circle */}
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    stroke="#2d3748"
                    strokeWidth="4"
                    fill="none"
                  ></circle>
                  {/* Animated Circle */}
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="100"
                    strokeDashoffset={animate ? 100 - skill.percentage : 100}
                    className={`transition-all duration-1000 ${skill.color}`}
                  ></circle>
                </svg>
                {/* Icon in the Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              {/* Skill Name */}
              <h1 className="text-white font-semibold mt-2 group-hover:scale-110 transition-transform duration-300">
                {skill.name}
              </h1>

               {/* Tooltip */}
               <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 hidden group-hover:flex bg-gray-800 text-white text-sm rounded px-2 py-1 mt-2 shadow-lg">
                {`I'm skilled at ${skill.name} (${skill.percentage}%)`}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="block relative bottom-0 bg-[#f316b0] w-full h-[2px]"></div>
    </>
  );
};

export default Myskill;
