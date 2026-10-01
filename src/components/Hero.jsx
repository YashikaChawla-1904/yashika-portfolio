function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#F7EFE6] px-6 pb-20 pt-36"
    >
      {/* Background Decorative Shapes */}
      <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#D6E0D1]/50 blur-3xl" />

      <div className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-[#E8D8C8]/60 blur-3xl" />

      <div className="absolute right-[20%] top-[25%] h-3 w-3 rounded-full bg-[#8B6F5A]" />

      <div className="absolute bottom-[20%] left-[12%] h-2 w-2 rounded-full bg-[#6F8067]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">

          {/* ================= LEFT CONTENT ================= */}
          <div>

            {/* Availability Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#D5CBBF] bg-[#FFFDF9]/80 px-4 py-2 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6F8067] opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#6F8067]" />
              </span>

              <span className="text-xs font-medium text-[#6B4A3A]">
                Available for opportunities
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-[#4B3426] sm:text-6xl lg:text-7xl">
              Building digital
              <br />

              <span className="font-serif font-normal italic text-[#6F8067]">
                experiences
              </span>{" "}
              that matter.
            </h1>

            {/* Introduction */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#76665D] sm:text-lg">
              Hi, I’m{" "}
              <span className="font-semibold text-[#4B3426]">
                Yashika Chawla
              </span>
              , an MCA graduate and full-stack web developer who enjoys
              turning ideas into responsive, user-focused digital experiences.
            </p>

            {/* ================= BUTTONS ================= */}
            <div className="mt-9 grid w-full max-w-[520px] grid-cols-2 gap-3">

              {/* View My Work */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4B3426] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#5E7157] hover:shadow-lg"
              >
                View My Work
                <span>→</span>
              </a>

              {/* Let's Connect */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#4B3426] bg-[#FFFDF9] px-5 py-3.5 text-sm font-semibold text-[#4B3426] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#E2EBDD] hover:shadow-lg"
              >
                Let's Connect
                <span>↗</span>
              </a>

              {/* View Resume */}
              <a
                href="/Yashika-Chawla-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#4B3426] bg-[#FFFDF9] px-5 py-3.5 text-sm font-semibold text-[#4B3426] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#E2EBDD] hover:shadow-lg"
              >
                View Resume
                <span>↗</span>
              </a>

              {/* Download Resume */}
              <a
                href="/Yashika-Chawla-Resume.pdf"
                download="Yashika-Chawla-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#4B3426] bg-[#FFFDF9] px-5 py-3.5 text-sm font-semibold text-[#4B3426] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#E2EBDD] hover:shadow-lg"
              >
                Download Resume
                <span>↓</span>
              </a>

            </div>

            {/* ================= QUICK STATS ================= */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-[#D8CBBE] pt-7">

              {/* MCA */}
              <div>
                <p className="text-2xl font-bold text-[#4B3426]">
                  MCA
                </p>

                <p className="mt-1 text-xs text-[#8B6F5A]">
                  Postgraduate
                </p>
              </div>

              <div className="h-10 w-px bg-[#D8CBBE]" />

              {/* MERN */}
              <div>
                <p className="text-2xl font-bold text-[#4B3426]">
                  MERN
                </p>

                <p className="mt-1 text-xs text-[#8B6F5A]">
                  Full Stack
                </p>
              </div>

              <div className="h-10 w-px bg-[#D8CBBE]" />

              {/* Projects */}
              <div>
                <p className="text-2xl font-bold text-[#4B3426]">
                  3+
                </p>

                <p className="mt-1 text-xs text-[#8B6F5A]">
                  Major Projects
                </p>
              </div>

            </div>
          </div>


          {/* ================= RIGHT PHOTO SECTION ================= */}
          <div className="relative mx-auto w-full max-w-[470px]">

            {/* Main Photo Card */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-[#D5CBBF] bg-gradient-to-br from-[#FFFDF9] via-[#E8D8C8] to-[#D6E0D1] p-4 shadow-xl sm:p-5">

              {/* Inner Border */}
              <div className="pointer-events-none absolute inset-4 z-10 rounded-[2.5rem] border border-white/50" />

              {/* Decorative Circle - Top Right */}
              <div className="absolute -right-16 -top-16 z-0 h-52 w-52 rounded-full border border-[#6F8067]/20" />

              {/* Decorative Circle - Bottom Left */}
              <div className="absolute -bottom-20 -left-16 z-0 h-56 w-56 rounded-full border border-[#8B6F5A]/20" />

              {/* PHOTO */}
              <div className="relative z-10 h-full w-full overflow-hidden rounded-[2.5rem] bg-[#E8D8C8]">

                <img
                  src="/Yashika-portfolio-photo.png"
                  alt="Yashika Chawla - Full Stack Developer"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                />

                {/* Soft Bottom Gradient */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#4B3426]/35 to-transparent" />

              </div>


              {/* ================= FLOATING TECH BADGES ================= */}

              {/* React */}
              <div className="absolute left-2 top-14 z-20 rounded-2xl border border-[#CDBEAF] bg-[#FFFDF9]/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:left-5">
                <span className="text-xs font-semibold text-[#4B3426]">
                  React
                </span>
              </div>

              {/* Node.js */}
              <div className="absolute right-2 top-24 z-20 rounded-2xl border border-[#CDBEAF] bg-[#FFFDF9]/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:right-5">
                <span className="text-xs font-semibold text-[#4B3426]">
                  Node.js
                </span>
              </div>

              {/* MySQL */}
              <div className="absolute bottom-24 left-2 z-20 rounded-2xl border border-[#CDBEAF] bg-[#FFFDF9]/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:left-5">
                <span className="text-xs font-semibold text-[#4B3426]">
                  MySQL
                </span>
              </div>

              {/* JavaScript */}
              <div className="absolute bottom-14 right-2 z-20 rounded-2xl border border-[#CDBEAF] bg-[#FFFDF9]/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:right-5">
                <span className="text-xs font-semibold text-[#4B3426]">
                  JavaScript
                </span>
              </div>

            </div>


            {/* ================= CURRENTLY BADGE ================= */}
            <div className="absolute -bottom-5 -left-3 z-30 rounded-2xl border border-[#D5CBBF] bg-[#FFFDF9]/95 px-5 py-4 shadow-xl backdrop-blur-sm sm:-left-7">

              <p className="text-xs text-[#8B6F5A]">
                Currently
              </p>

              <p className="mt-1 text-sm font-semibold text-[#4B3426]">
                Building & learning ✦
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;