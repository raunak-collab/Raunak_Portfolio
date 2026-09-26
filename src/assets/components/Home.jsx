
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import {
  HiArrowDown,
  HiCodeBracket,
  HiRocketLaunch,
  HiCpuChip,
} from "react-icons/hi2";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  const technologies = [
    "React",
    "Next.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-5 py-28 text-white sm:px-8 lg:px-12"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-fuchsia-600/[0.10] blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-violet-600/[0.10] blur-[150px]" />

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Main content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          {/* Availability badge */}
          <motion.div
            variants={itemVariants}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/[0.06] px-4 py-2 text-sm text-gray-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Open to opportunities & collaborations
          </motion.div>

          {/* Intro */}
          <motion.p
            variants={itemVariants}
            className="mb-4 text-base font-medium text-gray-400 sm:text-lg"
          >
            Hey, I'm{" "}
            <span className="font-semibold text-fuchsia-400">
              Raunak Raza
            </span>
          </motion.p>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl"
          >
            Full-Stack
            <br />
            Developer &
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
              Software Engineer
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-gray-400 sm:text-base lg:mx-0 lg:text-lg"
          >
            I build modern web applications and practical digital
            products with a focus on clean code, thoughtful
            architecture and user experience. Currently exploring
            backend engineering, system design and scalable
            application development.
          </motion.p>

          {/* Tech stack */}
          <motion.div
            variants={itemVariants}
            className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs font-medium text-gray-300 transition hover:border-fuchsia-500/30 hover:text-fuchsia-300 sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-fuchsia-600 px-7 py-3.5 font-semibold text-white transition hover:bg-fuchsia-500 sm:w-auto"
            >
              View My Projects
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3.5 font-semibold text-gray-200 transition hover:border-fuchsia-500/30 hover:bg-fuchsia-500/[0.05] sm:w-auto"
            >
              More About Me
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="mt-9 flex items-center justify-center gap-5 lg:justify-start"
          >
            <span className="text-sm text-gray-500">
              Find me on
            </span>

            <a
              href="https://github.com/raunak-collab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-xl text-gray-400 transition hover:-translate-y-1 hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/raunak-raza-7172a1315/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-xl text-gray-400 transition hover:-translate-y-1 hover:text-fuchsia-400"
            >
              <FaLinkedinIn />
            </a>
          </motion.div>
        </motion.div>

        {/* Right side: developer identity card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 25 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-fuchsia-500/10 to-violet-500/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-[#0a0a0f] p-6 shadow-2xl shadow-fuchsia-950/20 sm:p-8">
            {/* Card header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>

              <span className="font-mono text-xs text-gray-500">
                developer.js
              </span>
            </div>

            {/* Code-style identity */}
            <div className="mt-7 font-mono text-sm leading-8 sm:text-base">
              <p className="text-gray-500">
                <span className="text-fuchsia-400">const</span>{" "}
                developer = {"{"}
              </p>

              <div className="pl-5">
                <p>
                  <span className="text-sky-300">name</span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-green-300">
                    "Raunak Raza"
                  </span>
                  ,
                </p>

                <p>
                  <span className="text-sky-300">role</span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-green-300">
                    "Full-Stack Developer"
                  </span>
                  ,
                </p>

                <p>
                  <span className="text-sky-300">education</span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-green-300">
                    "Final-Year BCA"
                  </span>
                  ,
                </p>

                <p>
                  <span className="text-sky-300">frontend</span>
                  <span className="text-gray-500">:</span> [
                </p>
                <p className="pl-5 text-amber-200">
                  "React", "Next.js", "Tailwind"
                </p>
                <p>],</p>

                <p>
                  <span className="text-sky-300">backend</span>
                  <span className="text-gray-500">:</span> [
                </p>
                <p className="pl-5 text-amber-200">
                  "Node.js", "Express", "MongoDB"
                </p>
                <p>],</p>

                <p>
                  <span className="text-sky-300">focus</span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-green-300">
                    "Software Engineering"
                  </span>
                </p>
              </div>

              <p className="text-gray-500">{"};"}</p>
            </div>

            {/* Divider */}
            <div className="my-7 h-px bg-white/[0.08]" />

            {/* Focus areas */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                <HiCodeBracket className="mb-3 text-2xl text-fuchsia-400" />
                <p className="text-sm font-semibold text-white">
                  Full-Stack
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Web Applications
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                <HiCpuChip className="mb-3 text-2xl text-fuchsia-400" />
                <p className="text-sm font-semibold text-white">
                  Engineering
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Systems & DSA
                </p>
              </div>
            </div>
          </div>

          {/* Floating label */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#111018] px-4 py-3 shadow-xl sm:-left-8"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-500/10 text-xl text-fuchsia-400">
              <HiRocketLaunch />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Build. Learn. Improve.
              </p>
              <p className="text-xs text-gray-500">
                Every single day
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to About section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-500 transition hover:text-fuchsia-400 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">
          Scroll to explore
        </span>
        <HiArrowDown className="animate-bounce text-xl" />
      </button>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500/60 to-transparent" />
    </section>
  );
};

export default Home;
