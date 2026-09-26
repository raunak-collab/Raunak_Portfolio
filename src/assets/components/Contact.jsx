import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn, FaArrowUpRightFromSquare } from "react-icons/fa6";

const Contact = () => {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setResult("");
    setError("");

    const form = e.target;
    const formData = new FormData(form);

    if (
      !formData.get("name")?.trim() ||
      !formData.get("email")?.trim() ||
      !formData.get("message")?.trim()
    ) {
      setError("Please fill out all required fields.");
      return;
    }

    formData.append(
      "access_key",
      "f624a5c5-9c17-4fa3-9a19-1dadba2b87e1"
    );

    try {
      setLoading(true);

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setResult("Message sent successfully! I'll get back to you soon.");
        form.reset();
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    {
      icon: MdEmail,
      label: "Email",
      value: "raunakraza63@gmail.com",
      href: "mailto:raunakraza63@gmail.com",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91 8076128701",
      href: "tel:+918076128701",
    },
    {
      icon: FaLocationDot,
      label: "Location",
      value: "Sultanpuri, New Delhi, India",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 lg:px-12"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center rounded-full border border-fuchsia-500/20 bg-fuchsia-500/5 px-4 py-2 text-sm font-medium text-fuchsia-300">
            Get In Touch
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Let's Work
            <span className="text-fuchsia-400"> Together</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Have a project or idea you'd like to discuss? I'm open to
            exciting opportunities, freelance work and collaborations.
            Let's connect!
          </p>

          <div className="mx-auto mt-6 h-1 w-10 rounded-full bg-fuchsia-500" />
        </div>

        {/* Main content */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          {/* Contact information */}
          <div className="relative">
            <div className="h-full rounded-3xl border border-white/[0.08] bg-[#0a0a0f] p-7 sm:p-9">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-400">
                Contact Info
              </p>

              <h3 className="text-2xl font-bold leading-snug sm:text-3xl">
                Let's start a conversation.
              </h3>

              <p className="mt-4 text-sm leading-8 text-gray-400 sm:text-base">
                Whether you have a project idea, a job opportunity,
                or just want to connect, feel free to reach out.
                I'll be happy to hear from you.
              </p>

              {/* Contact details */}
              <div className="mt-9 space-y-7">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-4"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-fuchsia-500/20 bg-fuchsia-500/10 text-xl text-fuchsia-400">
                        <Icon />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white">
                          {item.label}
                        </p>

                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-1 block break-words text-sm text-gray-400 transition hover:text-fuchsia-400"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm text-gray-400">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social links */}
              <div className="mt-10 border-t border-white/[0.08] pt-7">
                <p className="mb-4 text-sm font-semibold text-white">
                  Connect with me
                </p>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/raunak-collab"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-lg text-gray-300 transition duration-300 hover:border-fuchsia-500/30 hover:bg-fuchsia-500/10 hover:text-fuchsia-400"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/raunak-raza-7172a1315/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-lg text-gray-300 transition duration-300 hover:border-fuchsia-500/30 hover:bg-fuchsia-500/10 hover:text-fuchsia-400"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-2 -right-2 -z-10 h-full w-full rounded-3xl border border-fuchsia-500/20" />
          </div>

          {/* Contact form */}
          <div className="rounded-3xl border border-white/[0.08] bg-[#0a0a0f] p-7 sm:p-9">
            <div className="mb-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-400">
                Send a Message
              </p>

              <h3 className="text-2xl font-bold sm:text-3xl">
                Just say Hello
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                Have something in mind? Fill out the form and
                I'll get back to you.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Name <span className="text-fuchsia-400">*</span>
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-white/[0.08] bg-black/50 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-fuchsia-500/50 focus:ring-2 focus:ring-fuchsia-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Email <span className="text-fuchsia-400">*</span>
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-white/[0.08] bg-black/50 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-fuchsia-500/50 focus:ring-2 focus:ring-fuchsia-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Message <span className="text-fuchsia-400">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-none rounded-xl border border-white/[0.08] bg-black/50 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-fuchsia-500/50 focus:ring-2 focus:ring-fuchsia-500/10"
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-400"
                >
                  {error}
                </p>
              )}

              {result && (
                <p
                  role="status"
                  className="rounded-xl border border-green-500/20 bg-green-500/5 px-4 py-3 text-sm text-green-400"
                >
                  {result}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-fuchsia-600 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-fuchsia-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}

                {!loading && (
                  <FaArrowUpRightFromSquare className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                )}
              </button>

              <p className="text-center text-xs text-gray-500">
                Your message will be sent directly to my inbox.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
