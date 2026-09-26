
import React from "react";
import {
  FaGithub,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { HiArrowUpRight, HiCodeBracket } from "react-icons/hi2";

const projects = [
  {
    title: "DevHub",
    subtitle: "All Developer Tools in One Place",
    category: "Developer Platform",
    description:
      "An all-in-one developer toolkit that brings essential utilities like JSON Formatter, JWT Decoder, Password Generator, Regex Tester, UUID Generator and more into one fast and modern platform.",
    stack: ["Next.js", "React", "JavaScript", "Tailwind CSS", "MongoDB"],
    link: "https://github.com/raunak-collab/Devhub",
    view: "https://devhub-uj2m.vercel.app/",
    featured: true,
    number: "01",
  },
  {
    title: "QueueLess",
    subtitle: "Smarter Queues. Happier Patients.",
    category: "Healthcare SaaS",
    description:
      "A healthcare queue management SaaS frontend designed to help clinics and healthcare centers manage patients, doctors, receptionists, appointments and digital queues through a centralized interface.",
    stack: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/raunak-collab/QueueLess-Frontend",
    view: "https://queuelessssss.netlify.app/",
    featured: true,
    number: "02",
  },
  {
    title: "Track Your Expenses",
    subtitle: "Personal Expense Management",
    category: "Finance Application",
    description:
      "A simple and intuitive expense management application that helps users record, organize and monitor daily spending to better understand their personal finances.",
    stack: ["React", "JavaScript", "Web Development"],
    link: "https://github.com/raunak-collab/track-your-expenses",
    view: "https://track-your-expenses-xi.vercel.app/",
    featured: false,
    number: "03",
  },
  {
    title: "PassOP",
    subtitle: "Password Management",
    category: "Web Application",
    description:
      "A password manager project designed to help users store and manage passwords in one place through a straightforward interface.",
    stack: ["React", "MongoDB", "JavaScript"],
    link:
      "https://github.com/raunak-collab/Passop-mongoDb",
    view: "https://passopp.netlify.app/",
    featured: false,
    number: "04",
  },
  {
    title: "iTask",
    subtitle: "Simple Task Management",
    category: "Productivity",
    description:
      "A to-do list website designed to help users create, manage and track tasks, organize their day and stay productive with a clean interface.",
    stack: ["React", "JavaScript", "CSS"],
    link:
      "https://github.com/raunak-collab/Todo-list-/tree/my-new-branch",
    view: "https://tastki.netlify.app/",
    featured: false,
    number: "05",
  },
];

const Projects = () => {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  const ProjectCard = ({ project }) => (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0f] transition duration-300 hover:-translate-y-1 hover:border-fuchsia-500/30 hover:bg-[#0d0b12]">
      {/* Top accent */}
      <div className="absolute left-0 top-0 h-px w-0 bg-fuchsia-500 transition-all duration-500 group-hover:w-full" />

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {/* Card header */}
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-fuchsia-500/15 bg-fuchsia-500/[0.08] text-2xl text-fuchsia-400">
            <HiCodeBracket />
          </div>

          <span className="font-mono text-sm text-gray-600">
            / {project.number}
          </span>
        </div>

        {/* Category */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-fuchsia-400">
          {project.category}
        </p>

        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight text-white transition group-hover:text-fuchsia-300 sm:text-2xl">
          {project.title}
        </h3>

        <p className="mt-1 text-sm font-medium text-gray-500">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="mt-5 flex-1 text-sm leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mt-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-600">
            Built with
          </p>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1.5 text-xs font-medium text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/[0.07] pt-5">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-semibold text-gray-300 transition hover:border-fuchsia-500/30 hover:bg-white/[0.04] hover:text-white"
          >
            <FaGithub className="text-base" />
            Source Code
          </a>

          {project.view ? (
            <a
              href={project.view}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-fuchsia-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-fuchsia-500"
            >
              Live Demo
              <FaArrowUpRightFromSquare className="text-xs" />
            </a>
          ) : (
            <span className="rounded-lg border border-white/[0.06] px-4 py-2.5 text-sm text-gray-600">
              Demo unavailable
            </span>
          )}
        </div>
      </div>
    </article>
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 lg:px-12"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-fuchsia-600/[0.07] blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-violet-600/[0.07] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center rounded-full border border-fuchsia-500/20 bg-fuchsia-500/[0.05] px-4 py-2 text-sm font-medium text-fuchsia-300">
            Selected Work
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Projects I've{" "}
            <span className="text-fuchsia-400">Built</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Practical applications, product ideas and engineering
            experiments that reflect how I learn, build and improve.
          </p>
        </div>

        {/* Featured projects */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <h3 className="text-lg font-bold text-white sm:text-xl">
              Featured Projects
            </h3>
            <div className="h-px flex-1 bg-white/[0.08]" />
            <span className="text-xs text-gray-500">
              01 — 02
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.number}
                project={project}
              />
            ))}
          </div>
        </div>

        {/* Other projects */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <h3 className="text-lg font-bold text-white sm:text-xl">
              Other Projects
            </h3>
            <div className="h-px flex-1 bg-white/[0.08]" />
            <span className="text-xs text-gray-500">
              03 — 07
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.number}
                project={project}
              />
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/[0.04] p-7 text-center sm:p-10">
          <p className="text-sm font-medium text-fuchsia-400">
            More on GitHub
          </p>

          <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Always building something new.
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-400">
            Explore my repositories, development experiments
            and projects as I continue growing as a software
            engineer.
          </p>

          <a
            href="https://github.com/raunak-collab"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-fuchsia-600 px-6 py-3 font-semibold text-white transition hover:bg-fuchsia-500"
          >
            Visit GitHub
            <HiArrowUpRight className="text-lg transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent" />
    </section>
  );
};

export default Projects;
