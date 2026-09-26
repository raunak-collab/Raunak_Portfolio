
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { HiArrowUpRight } from "react-icons/hi2";

const Header = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActive(id);
    setShow(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.06] bg-black/75 text-white backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="group flex items-center gap-2"
          aria-label="Go to home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-fuchsia-500/20 bg-fuchsia-500/10 text-sm font-bold text-fuchsia-400 transition group-hover:bg-fuchsia-500/20">
            RR
          </span>

          <span className="text-lg font-bold tracking-tight sm:text-xl">
            Raunak<span className="text-fuchsia-400">.dev</span>
          </span>
        </button>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition ${
                  active === link.id
                    ? "text-fuchsia-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}

                {active === link.id && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-fuchsia-500" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("contact")}
            className="group inline-flex items-center gap-2 rounded-xl border border-fuchsia-500/30 bg-fuchsia-500/[0.08] px-4 py-2.5 text-sm font-semibold text-fuchsia-300 transition hover:border-fuchsia-400 hover:bg-fuchsia-600 hover:text-white"
          >
            Let's Talk
            <HiArrowUpRight className="text-base transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-gray-300 transition hover:border-fuchsia-500/30 hover:text-fuchsia-400 md:hidden"
          aria-label={show ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={show}
          aria-controls="mobile-navigation"
        >
          {show ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {show && (
        <div
          id="mobile-navigation"
          className="border-t border-white/[0.07] bg-[#08080d] px-5 pb-6 pt-4 shadow-2xl md:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                    active === link.id
                      ? "border border-fuchsia-500/20 bg-fuchsia-500/[0.08] text-fuchsia-400"
                      : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-4 max-w-7xl">
            <button
              onClick={() => scrollToSection("contact")}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-fuchsia-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-500"
            >
              Let's Talk
              <HiArrowUpRight className="text-base" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
