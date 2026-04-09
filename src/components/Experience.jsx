export default function Experience() {
  const experiences = [
    {
      title: "Product & Software Engineering Intern",
      company: "Vectorial AI : Enterprise AI platform for product teams",
      period: "Jun 2025 – Present",
      highlights: [
        "Built and deployed an AI-powered product story summarization pipeline in an Agile sprint cycle using LangChain and FastAPI, saving 2+ hours per story across 10+ pods by automating classification for 8+ story types and 3+ client organizations.",
        "Implemented an NLP text-classification pipeline in FastAPI to extract high-signal features from 100+ product stories, producing structured data for consequence-based filtering and downstream analytics.",
        "Designed a 6-step query architecture and data schema with asynchronous services and CI/CD-driven deployment pipelines, reducing agent response times to under 5s and accelerating data-driven decisions for product teams.",
        "Integrated an LLM evaluation algorithm generating probabilistic confidence scores to assess hallucination risk and engineered an agentic workflow system with LangGraph and AWS Lambda to autonomously generate product insights from given goals.",
      ],
    },
    {
      title: "Learning Assistant",
      company: "Donald Bren School of Information and Computer Science, UCI",
      period: "Mar – Jun 2025",
      highlights: [
        "Tutored 20+ students in intermediate Python, covering debugging, object-oriented design, and functional programming concepts.",
      ],
    },
    {
      title: "Founding Board Member",
      company: "CareTech (UCI)",
      period: "Sep 2024 – Jun 2025",
      highlights: [
        "Led and strategized 15+ machine learning workshops, educating 20+ members per session on core concepts, healthcare applications, and industry trends to drive technical engagement, and managed $1,000 in funding through grants and fundraisers",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Athmick Inc.",
      period: "Aug – Sep 2024",
      highlights: [
        "Developed and tested 10+ HTTP and WebSocket APIs using FastAPI and Express, integrating with MongoDB.",
        "Cut API response time by 25% through collaboration to improve backend architecture.",
      ],
    },
  ];

  const gradients = [
    "from-violet-500 to-pink-500",
    "from-fuchsia-500 to-rose-500",
    "from-pink-500 to-rose-400",
    "from-rose-500 to-orange-400", // soft warm gradient for 4th
  ];

  return (
    <section
      id="experience"
      data-aos="fade-up"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-32 text-gray-100 bg-transparent"
    >
      <h2
        className="font-heading text-4xl font-bold text-transparent bg-clip-text mb-4"
        style={{
          backgroundImage: "linear-gradient(135deg, #6d28d9, #ec4899)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Work Experience & Leadership
      </h2>
      <p className="text-gray-400 mb-12 text-center max-w-2xl">
        My professional journey and key achievements
      </p>

      <div className="relative w-full max-w-4xl">
        <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-violet-600 via-fuchsia-500 to-rose-500 opacity-40"></div>

        <div className="space-y-12 pl-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative"
            >
              <div
                className={`absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-gradient-to-br ${gradients[index]} shadow-md`}
              ></div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1 gap-1">
                <h3 className="text-xl font-semibold text-white">
                  {exp.title}
                </h3>
                <span className="text-sm text-gray-300 bg-black/40 px-3 py-1 rounded-full border border-gray-700 self-start sm:self-auto flex-shrink-0">
                  {exp.period}
                </span>
              </div>

              <p
                className={`text-sm bg-clip-text text-transparent bg-gradient-to-r ${gradients[index]} mb-3`}
              >
                {exp.company}
              </p>

              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                {exp.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
