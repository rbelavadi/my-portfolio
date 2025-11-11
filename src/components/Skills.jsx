export default function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      icon: "💻",
      color: "from-indigo-900/50 to-indigo-700/30",
      skills: ["Python", "C++", "Java", "JavaScript"],
    },
    {
      title: "Frameworks",
      icon: "🧩",
      color: "from-purple-900/50 to-purple-700/30",
      skills: ["React.js", "Node.js", "Tailwind CSS", "Vite", "FastAPI", "Express"],
    },
    {
      title: "AI & Backend Systems",
      icon: "🤖",
      color: "from-rose-900/50 to-rose-700/30",
      skills: ["Langchain", "Langraph", "Microsoft Presidio", "RxNorm", "DailyMed", "FAISS", "Prompt Engineering"],
    },
    {
      title: "Databases & Cloud Tools",
      icon: "☁️",
      color: "from-pink-900/50 to-fuchsia-700/30",
      skills: ["MongoDB", "SQL", "Firebase", "AWS", "GCP", "Git", "Data Pipelines", "CI/CD"],
    },
  ];

  return (
    <section
        id="skills"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-bottom"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-32 text-gray-100 bg-transparent"
    >

        {/* Header */}
        <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-heading text-4xl font-bold text-transparent bg-clip-text mb-4"
            style={{
            backgroundImage: "linear-gradient(135deg, #6d28d9, #ec4899)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            }}
        >
            Tech Stack
        </h2>
        <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-400 mb-12 text-center max-w-2xl"
        >
            The technologies and tools I use to bring ideas to life
        </p>


      {/* Category Boxes with AOS Animations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {categories.map((category, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150} // slight delay per box
            className={`p-6 rounded-2xl bg-gradient-to-br ${category.color} border border-gray-800 shadow-lg transition-transform transform hover:scale-[1.02] hover:shadow-pink-500/20`}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-lg">{category.icon}</span> {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  data-aos="zoom-in"
                  data-aos-delay={index * 150 + idx * 40}
                  className="px-3 py-1 text-sm bg-black/40 border border-gray-700 rounded-lg hover:bg-pink-500/20 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
