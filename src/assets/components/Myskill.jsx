import {
  HiMiniPaintBrush,
  HiCodeBracket,
  HiServerStack,
  HiCircleStack,
  HiWrenchScrewdriver,
} from "react-icons/hi2";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiPostman,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, modern and interactive user interfaces.",
    icon: HiCodeBracket,
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
      { name: "React", icon: FaReact, color: "text-sky-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-400",
      },
    ],
  },
  {
    title: "Backend Development",
    description:
      "Creating server-side logic, APIs and database-connected apps.",
    icon: HiServerStack,
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "text-gray-300",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-500",
      },
      { name: "REST APIs", label: "API", color: "text-violet-400" },
      {
        name: "Authentication",
        label: "AUTH",
        color: "text-violet-400",
      },
    ],
  },
  {
    title: "State & Data",
    description:
      "Managing application state and handling server data.",
    icon: HiCircleStack,
    skills: [
      {
        name: "Redux Toolkit",
        icon: SiRedux,
        color: "text-purple-400",
      },
      {
        name: "RTK Query",
        label: "RTK",
        color: "text-purple-400",
      },
      {
        name: "API Integration",
        label: "API",
        color: "text-sky-400",
      },
    ],
  },
  {
    title: "Tools & Workflow",
    description:
      "Tools I use to build, test, design and deploy applications.",
    icon: HiWrenchScrewdriver,
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "GitHub", icon: FaGithub, color: "text-white" },
      {
        name: "Postman",
        icon: SiPostman,
        color: "text-orange-400",
      },
      { name: "Figma", icon: FaFigma, color: "text-pink-400" },
      { name: "Vercel", icon: SiVercel, color: "text-white" },
      {
        name: "Netlify",
        icon: SiNetlify,
        color: "text-teal-400",
      },
    ],
  },
];

const additionalSkills = [
  "Responsive Design",
  "JWT",
  "Cookies & Sessions",
  "OpenAI API",
  "Problem Solving",
  "DSA",
];

const Myskill = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/5 px-4 py-2 text-sm font-medium text-fuchsia-300">
            <HiMiniPaintBrush className="text-lg" />
            My Technical Expertise
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Skills &{" "}
            <span className="text-fuchsia-400">
              Technologies
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Technologies, tools and concepts I use to build modern web
            applications, solve problems and bring ideas to life.
          </p>
        </div>

        {/* Skill groups */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <div
                key={group.title}
                className="group min-w-0 rounded-2xl border border-white/[0.08] bg-[#0a0a0f] p-4 transition duration-300 hover:border-fuchsia-500/30 hover:bg-[#0d0b13] sm:p-6 lg:p-7"
              >
                {/* Group heading */}
                <div className="mb-6 flex min-w-0 items-start gap-3 sm:gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-fuchsia-500/20 bg-fuchsia-500/10 text-xl text-fuchsia-400 sm:h-12 sm:w-12 sm:text-2xl">
                    <GroupIcon />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="break-words text-lg font-semibold text-white sm:text-xl">
                      {group.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Responsive skill cards */}
                <div className="grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 xl:grid-cols-3">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="flex min-h-[68px] min-w-0 items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-3 transition duration-200 hover:border-fuchsia-500/25 hover:bg-fuchsia-500/[0.06] sm:gap-3 sm:px-3"
                      >
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center text-xl sm:h-9 sm:w-9 sm:text-2xl ${skill.color}`}
                        >
                          {SkillIcon ? (
                            <SkillIcon />
                          ) : (
                            <span className="text-[10px] font-bold tracking-wide">
                              {skill.label}
                            </span>
                          )}
                        </div>

                        <span className="min-w-0 flex-1 text-xs font-medium leading-5 text-gray-300 [overflow-wrap:anywhere] sm:text-sm">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional knowledge */}
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#0a0a0f] p-5 sm:p-8">
          <div className="mb-5">
            <h3 className="text-lg font-semibold sm:text-xl">
              Additional Knowledge
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-500">
              Concepts and technologies I work with and continue to develop.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="max-w-full break-words rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs text-gray-300 transition hover:border-fuchsia-500/30 hover:text-fuchsia-300 sm:px-4 sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Closing line */}
        <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-sm text-gray-400">
            Always learning. Always building.
          </p>
          <div className="h-1 w-16 rounded-full bg-fuchsia-500" />
        </div>
      </div>
    </section>
  );
};

export default Myskill;
