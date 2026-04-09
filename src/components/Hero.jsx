import SocialLinks from "./SocialLinks";

export default function Hero() {
  // one fixed premium gradient
  const gradient =
    "linear-gradient(135deg, #1e1b4b 0%, #6d28d9 40%, #ec4899 100%)";

  return (
    <section
        id="home"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-center"
        className="flex flex-col items-center justify-center text-center px-6 py-24"
    >
      {/* initials circle */}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6"
        style={{
          backgroundImage: gradient,
          boxShadow: "0 0 40px rgba(236, 72, 153, 0.25)",
        }}
      >
        RB
      </div>

      {/* name */}
      <div className="overflow-visible leading-none">
        <h1
        className="font-heading text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text animate-gradient-wave py-4"
        style={{
            backgroundImage:
            "linear-gradient(135deg, #2e1065 0%, #7e22ce 40%, #f472b6 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
        }}
        >
        Hi, I'm Ranjani Belavadi
        </h1>

        </div>


      {/* subtitle */}
      <p className="mt-4 text-lg text-gray-300 max-w-xl">
        Full Stack Developer & AI Product Builder. I love creating thoughtful,
        product-driven solutions that blend technology, usability, and design.
      </p>

      {/* buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
        {/* Scroll to Projects */}
        <a
          href="#projects"
          className="px-6 py-3 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
          style={{ backgroundImage: gradient }}
        >
          View My Work
        </a>

        {/* Scroll to Contact */}
        <a
          href="#contact"
          className="px-6 py-3 border border-gray-600 text-gray-200 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Get in Touch
        </a>
      </div>

      {/* social links */}
      <SocialLinks />

      {/* scroll down indicator */}
        <div className="absolute bottom-8 animate-bounce text-gray-400 cursor-pointer hover:text-pink-400 transition-colors">
        <a href="#skills" aria-label="Scroll down">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </a>
        </div>

    </section>
  );
}
