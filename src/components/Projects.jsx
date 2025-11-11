import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "MediBuddy – Health Assistant App",
      gradient: "linear-gradient(135deg, #6d28d9, #ec4899)",
      color: "from-indigo-900/50 to-purple-900/30",
      bullets: [
        "Engineered a HIPAA-compliant medical intelligence system that digitizes handwritten prescriptions using OCR and structured parsing, applies PHI redaction (Microsoft Presidio), and standardizes medication data via RxNorm and FDA DailyMed.",
        "Built a cloud-native backend and cross-platform interface enabling seniors to access verified medication insights and reminders.",
        "Architected multilingual, privacy-focused extensions with localized voice features and adaptive tracking to improve adherence.",
,
      ],
      tags: ["Python", "OCR (Tesseract)", "Microsoft Presidio", "RxNorm", "DailyMed", "AWS", "React Native"],
      link: "https://github.com/rbelavadi/MediBuddy",
    },
    {
      number: "02",
      title: "CampusNest (VenusHacks 2024)",
      gradient: "linear-gradient(135deg, #a21caf, #ec4899)",
      color: "from-fuchsia-900/50 to-rose-900/30",
      bullets: [
        "Designed and developed a map-based housing discovery platform for UCI students using React and Firebase, featuring dynamic listing creation and real-time data synchronization.",
        "Deployed on Google Cloud Platform, implementing responsive design and optimized load times, leading to 40% faster rendering using component-level caching and asynchronous data fetching.",
        "Integrated React Leaflet maps and Firebase APIs to display location-based listings, improving search discoverability and user navigation across 100+ demo data points.",
      ],
      tags: ["React", "Tailwind CSS", "Firebase", "GCP", "Leaflet", "Material UI"],
      link: "https://github.com/rbelavadi/CampusNest",
    },
    {
      number: "03",
      title: "Web Search Engine",
      gradient: "linear-gradient(135deg, #1e1b4b, #6d28d9, #ec4899)",
      color: "from-indigo-900/50 to-rose-900/30",
      bullets: [
        "Built a full-stack search engine indexing 56,000+ web pages using a disk-based inverted index with partial writes, merges, and streaming queries under memory constraints, reducing response time from 300ms to under 100ms.",
        "Developed a custom web crawler with trap avoidance, duplicate filtering, and broken HTML handling to navigate 88 subdomains while enforcing politeness and crawl-delay rules.",
        "Implemented Boolean, TF-IDF, PageRank scoring, 2-gram and 3-gram indexing, and a near-duplicate detection algorithm to improve result diversity and ranking quality.",
      ],
      tags: ["Python", "React.js", "NLTK", "Disk-based Indexing"],
      link: "https://github.com/rbelavadi/web-search-engine",
    },
  ];

  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-32 text-gray-100 bg-transparent"
    >
      {/* Section Title */}
      <h2
        className="font-heading text-4xl font-bold text-transparent bg-clip-text mb-4"
        style={{
          backgroundImage: "linear-gradient(135deg, #6d28d9, #ec4899)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Featured Projects
      </h2>
      <p className="text-gray-400 mb-12 text-center max-w-2xl">
        A selection of projects I’ve worked on, showcasing my skills and experience
      </p>

      {/* Project Cards */}
      <div className="flex flex-col gap-8 w-full max-w-5xl">
        {projects.map((project, index) => (
        <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className={`p-8 rounded-2xl bg-gradient-to-br ${project.color} border border-gray-800 shadow-lg hover:scale-[1.02] hover:shadow-pink-500/20 transition-all`}
        >
            {/* Header Row */}
            <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
                <span
                className={`text-2xl font-bold ${
                    index === 0
                    ? "text-violet-400"
                    : index === 1
                    ? "text-pink-400"
                    : "text-rose-400"
                }`}
                >
                {project.number}
                </span>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            </div>

            {/* GitHub Button */}
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-lg border transition-all duration-300 hover:scale-105 ${
                index === 0
                    ? "border-violet-500/50 text-violet-400 hover:text-white hover:border-violet-400"
                    : index === 1
                    ? "border-pink-500/50 text-pink-400 hover:text-white hover:border-pink-400"
                    : "border-rose-500/50 text-rose-400 hover:text-white hover:border-rose-400"
                }`}
            >
                <FaGithub size={16} />
                View
                <FiExternalLink size={14} className="opacity-90" />
            </a>
            </div>

            {/* Bullet Points */}
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            {project.bullets.map((point, i) => (
                <li key={i}>{point}</li>
            ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
                <span
                key={idx}
                className="px-3 py-1 text-sm bg-black/40 border border-gray-700 rounded-lg hover:bg-pink-500/20 transition-all"
                >
                {tag}
                </span>
            ))}
            </div>
        </div>
        ))}

      </div>
    </section>
  );
}
