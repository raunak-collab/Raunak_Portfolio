
import {
  HiArrowUpRight,
  HiCodeBracket,
  HiAcademicCap,
  HiLightBulb,
  HiRocketLaunch,
  HiCheckBadge,
  HiCpuChip,
  HiServerStack,
  HiCircleStack,
  HiShieldCheck,
} from "react-icons/hi2";

const highlights = [
  {
    icon: HiCodeBracket,
    title: "Application Development",
    description:
      "Building modern web applications with React, Next.js, JavaScript and reusable components.",
  },
  {
    icon: HiServerStack,
    title: "Backend & Architecture",
    description:
      "Working with REST APIs, Node.js, Express.js, authentication and database integration.",
  },
  {
    icon: HiLightBulb,
    title: "Problem Solving",
    description:
      "Strengthening computer science fundamentals through data structures and algorithms.",
  },
  {
    icon: HiCpuChip,
    title: "Engineering Mindset",
    description:
      "Learning clean code, maintainable architecture, performance and production-oriented practices.",
  },
];

const engineeringFocus = [
  "Clean & reusable code",
  "REST API design",
  "Database modeling",
  "Authentication & security",
  "Performance optimization",
  "Scalable architecture",
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 lg:px-12"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center rounded-full border border-fuchsia-500/20 bg-fuchsia-500/5 px-4 py-2 text-sm font-medium text-fuchsia-300">
            About the Developer
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Software Engineer
            <span className="text-fuchsia-400"> in Progress</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Building practical software, understanding systems, and
            continuously improving my engineering fundamentals.
          </p>
        </div>

        {/* Main content */}
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.5fr] lg:gap-16">
          {/* Profile card */}
          <div className="relative">
            <div className="rounded-3xl border border-white/[0.08] bg-[#0a0a0f] p-7 sm:p-9">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/10 text-3xl font-bold text-fuchsia-400">
                RR
              </div>

              <p className="mb-2 text-sm font-medium text-fuchsia-300">
                Hello, I'm
              </p>

              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Raunak Raza
              </h3>

              <p className="mt-3 text-lg font-medium text-gray-300">
                Full-Stack Developer
              </p>

              <p className="mt-1 text-sm font-medium text-gray-500">
                Software Engineering Enthusiast
              </p>

              <p className="mt-5 text-sm leading-7 text-gray-400">
                I build software by combining thoughtful user
                experiences with practical functionality, structured
                code and an understanding of how applications work
                behind the scenes.
              </p>

              <div className="my-7 h-px bg-white/[0.08]" />

              <div className="flex items-start gap-3">
                <HiAcademicCap className="mt-1 shrink-0 text-xl text-fuchsia-400" />
                <div>
                  <p className="font-semibold text-white">
                    Final-Year BCA Student
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Bachelor of Computer Applications
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-3">
                <HiCheckBadge className="mt-1 shrink-0 text-xl text-fuchsia-400" />
                <div>
                  <p className="font-semibold text-white">
                    Open to Opportunities
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Entry-level roles, internships and collaborations
                  </p>
                </div>
              </div>

              <a
                href="/RaunakResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-fuchsia-600 px-5 py-3 font-semibold text-white transition hover:bg-fuchsia-500"
              >
                View My Resume
                <HiArrowUpRight className="text-lg" />
              </a>
            </div>

            <div className="absolute -bottom-2 -right-2 -z-10 h-full w-full rounded-3xl border border-fuchsia-500/20" />
          </div>

          {/* About text */}
          <div className="space-y-8">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-400">
                Who I Am
              </p>

              <h3 className="text-2xl font-bold leading-snug sm:text-3xl">
                I don't just build interfaces.
                <span className="text-fuchsia-400">
                  {" "}I work to understand the entire system.
                </span>
              </h3>

              <div className="mt-6 space-y-4 text-sm leading-8 text-gray-400 sm:text-base">
                <p>
                  I'm Raunak Raza, a final-year BCA student and
                  Full-Stack Developer interested in building modern,
                  reliable and user-focused software. My strongest
                  area is frontend development with React and
                  Next.js, and I'm continuously expanding my backend
                  and software engineering knowledge.
                </p>

                <p>
                  I enjoy working across the application lifecycle:
                  from designing interfaces and reusable components
                  to developing APIs, integrating databases,
                  implementing authentication and preparing
                  applications for deployment.
                </p>

                <p>
                  My projects reflect this approach. <span className="text-gray-200 font-medium">DevHub</span>
                  is a developer toolkit built around useful utilities
                  and a structured workspace. <span className="text-gray-200 font-medium">QueueLess</span>
                  explores a multi-role healthcare queue-management
                  system, while <span className="text-gray-200 font-medium">CarBookingTracker</span>
                  focuses on mobile application workflows.
                </p>

                <p>
                  Alongside building projects, I'm strengthening my
                  understanding of data structures, algorithms,
                  backend architecture, database design and system
                  design fundamentals. My goal is to become a
                  well-rounded software engineer who can reason
                  about problems and build maintainable solutions.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/[0.08] bg-[#0a0a0f] p-5 transition duration-300 hover:border-fuchsia-500/30 hover:bg-[#0e0b14]"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-fuchsia-500/10 text-2xl text-fuchsia-400">
                      <Icon />
                    </div>

                    <h4 className="font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Engineering focus */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0f] p-5 sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-500/10 text-xl text-fuchsia-400">
                  <HiShieldCheck />
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    My Engineering Focus
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    Principles I'm learning and applying
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {engineeringFocus.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs font-medium text-gray-300 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Closing statement */}
            <div className="rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/[0.04] p-5 sm:p-6">
              <p className="text-sm leading-7 text-gray-300 sm:text-base">
                My approach is simple: build, understand, improve
                and repeat. I'm working toward writing software
                that's not only functional, but also clean,
                maintainable, secure and ready to evolve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
