import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  const links = [
    { icon: <FaGithub />, url: "https://github.com/rbelavadi" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/ranjani-belavadi" },
    { icon: <FaEnvelope />, url: "mailto:rbelavad@uci.edu" },
  ];

  return (
    <div className="flex gap-8 mt-12 justify-center">
      {links.map(({ icon, url }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 relative group"
        >
          {/* Icon */}
          {icon}

          {/* Gradient glow effect */}
          <span
            className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
            style={{
              background:
                "linear-gradient(135deg, rgba(109,40,217,0.8), rgba(236,72,153,0.8))",
              borderRadius: "50%",
            }}
          ></span>
        </a>
      ))}
    </div>
  );
}
