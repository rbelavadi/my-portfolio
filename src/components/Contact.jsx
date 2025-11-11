import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const contacts = [
    {
      name: "GitHub",
      icon: <FaGithub size={22} />,
      link: "https://github.com/rbelavadi",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={22} />,
      link: "https://linkedin.com/in/ranjani-belavadi",
    },
    {
      name: "Email",
      icon: <FaEnvelope size={22} />,
      link: "mailto:rbelavad@uci.edu",
    },
  ];

  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-32 text-gray-100 bg-transparent"
    >
      {/* Section title */}
      <h2
        className="font-heading text-4xl font-bold text-transparent bg-clip-text mb-4"
        style={{
          backgroundImage: "linear-gradient(135deg, #6d28d9, #ec4899)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Let’s Connect
      </h2>
      <p className="text-gray-400 mb-12 text-center max-w-2xl">
        I’m always open to discussing new projects, creative ideas, or
        opportunities to collaborate.
      </p>

      {/* Contact Cards */}
      <div className="bg-black/30 border border-gray-800 rounded-2xl p-10 w-full max-w-3xl text-center shadow-lg">
        <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
        <p className="text-gray-400 mb-8">
          Feel free to reach out through any of these platforms
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-3 py-6 rounded-xl border border-gray-700 hover:border-pink-500/50 hover:bg-gradient-to-br hover:from-indigo-900/40 hover:to-pink-900/40 transition-all duration-300"
            >
              {item.icon}
              <span className="text-sm text-gray-200 font-medium">
                {item.name}
              </span>
            </a>
          ))}
        </div>

        {/* Button */}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-sm text-gray-500 text-center">
        © 2025 Ranjani Belavadi. Built with React, Tailwind CSS, and Vite.
      </footer>
    </section>
  );
}
