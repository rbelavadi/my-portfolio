export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-12 py-24 text-gray-100 bg-transparent"
      data-aos="fade-up"
    >
      <div className="flex flex-row items-center justify-center gap-16 w-full max-w-7xl">
        {/* Left Column - Image */}
        <div className="w-1/3 flex justify-center">
          <img
            src="/src/assets/Ranjani_Causal_Photo.jpeg"
            alt="Ranjani Belavadi"
            className="rounded-3xl shadow-[0_0_30px_rgba(236,72,153,0.3)] border-2 border-transparent bg-gradient-to-br from-violet-600 to-pink-500 p-[2px]"
          />
        </div>

        {/* Right Column - Text */}
        <div className="w-2/3">
          <h2
            className="font-heading text-4xl font-bold text-transparent bg-clip-text mb-4 inline-block"
            style={{
              backgroundImage: "linear-gradient(135deg, #6d28d9, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent", // add this line!
            }}
          >
            About Me
          </h2>


          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            I’m <span className="text-violet-400 font-semibold">Ranjani</span>, a student at 
            <span className="text-pink-400 font-semibold"> UC Irvine</span> majoring in 
            <span className="text-violet-400 font-semibold"> Computer Science</span> and 
            <span className="text-pink-400 font-semibold"> Business Information Management</span>. 
            I like building software because I can actually see the difference it makes. 
            What motivates me most is when something I build directly impacts people or helps a team or business work better.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            I’ve found that I really value having <span className="text-pink-400 font-semibold">ownership</span> in what I work on. 
            I enjoy being in roles where I can take initiative, experiment, and see ideas come to life. 
            One of my favorite experiences was building 
            <span className="text-violet-400 font-semibold"> MediBuddy</span>, where I got to watch something I built help make 
            healthcare more accessible for the elderly. 
            That kind of visible <span className="text-pink-400 font-semibold">impact</span> is what keeps me excited about tech.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Outside of school and projects, <span className="text-violet-400 font-semibold">music</span> is a huge part of my life. 
            I’ve been learning the <span className="text-pink-400 font-semibold">Indian classical flute</span> for several years, 
            and it has become my way to unwind and stay balanced. 
            It reminds me that <span className="text-violet-400 font-semibold">creativity and precision</span> can go hand in hand — 
            whether I’m playing a raga or writing code <span className="text-pink-400 font-semibold">:)</span>.
          </p>

        </div>
      </div>
    </section>
  );
}
