function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FFFDF9] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#8B6F5A]">
            About Me
          </p>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-[#4B3426] sm:text-5xl">
            A developer who enjoys turning
            <span className="font-serif italic font-normal text-[#8B6F5A]">
              {" "}ideas into reality.
            </span>
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">

          {/* About Text Card */}
          <div className="rounded-[2rem] border border-[#E8D8C8] bg-[#F7EFE6] p-8 sm:p-10">

            <div className="mb-8 flex items-center justify-between">
              <span className="rounded-full bg-[#FFFDF9] px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#6B4A3A]">
                Who I am
              </span>

              <span className="text-3xl text-[#B99B85]">
                ✦
              </span>
            </div>

            <p className="text-lg leading-8 text-[#5F5048]">
              I'm Yashika Chawla, an MCA graduate and aspiring Full-Stack
              Web Developer who enjoys building responsive and
              user-focused web applications.
            </p>

            <p className="mt-5 leading-7 text-[#76665D]">
              My development journey has given me hands-on experience with
              modern web technologies including React.js, Node.js,
              Express.js and MySQL. I enjoy working across both frontend
              and backend and understanding how different parts of an
              application work together.
            </p>

            <p className="mt-5 leading-7 text-[#76665D]">
              I also enjoy exploring AI-assisted development and finding
              practical ways to use technology to solve real-world
              problems.
            </p>

            {/* Quick facts */}
            <div className="mt-9 grid gap-4 sm:grid-cols-3">

              {/* ================= MCA SGPA ================= */}
              <a
                href="/MCA-Degree-Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View MCA Degree Certificate"
                className="group relative rounded-2xl bg-[#FFFDF9] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#F2E9DE] hover:shadow-md"
              >
                {/* Small Arrow */}
                <span className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#F7EFE6] text-xs font-semibold text-[#6B4A3A] transition-all duration-300 group-hover:bg-[#4B3426] group-hover:text-white">
                  ↗
                </span>

                <p className="text-2xl font-bold text-[#4B3426]">
                  9.94
                </p>

                <p className="mt-1 text-xs text-[#8B6F5A]">
                  MCA SGPA
                </p>
              </a>


              {/* ================= BCA SGPA ================= */}
              <a
                href="/BCA-Degree-Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View BCA Degree Certificate"
                className="group relative rounded-2xl bg-[#FFFDF9] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#F2E9DE] hover:shadow-md"
              >
                {/* Small Arrow */}
                <span className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#F7EFE6] text-xs font-semibold text-[#6B4A3A] transition-all duration-300 group-hover:bg-[#4B3426] group-hover:text-white">
                  ↗
                </span>

                <p className="text-2xl font-bold text-[#4B3426]">
                  9.20
                </p>

                <p className="mt-1 text-xs text-[#8B6F5A]">
                  BCA SGPA
                </p>
              </a>


              {/* ================= CLASS RANK ================= */}
              <div className="rounded-2xl bg-[#FFFDF9] p-5">
                <p className="text-2xl font-bold text-[#4B3426]">
                  2nd
                </p>

                <p className="mt-1 text-xs text-[#8B6F5A]">
                  Class Rank
                </p>
              </div>

            </div>
          </div>


          {/* Right Side */}
          <div className="grid gap-6">

            {/* Education */}
            <div className="rounded-[2rem] border border-[#E8D8C8] bg-[#EBC9B0]/40 p-7">

              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-[#4B3426]">
                  Education
                </h3>

                <span className="text-2xl">
                  🎓
                </span>
              </div>

              <div className="border-l-2 border-[#B99B85] pl-5">

                <p className="text-sm font-medium text-[#8B6F5A]">
                  MCA
                </p>

                <p className="mt-1 font-semibold text-[#4B3426]">
                  MET's Institute of Engineering
                </p>

                <p className="mt-1 text-sm text-[#76665D]">
                  Nashik
                </p>

              </div>


              <div className="mt-6 border-l-2 border-[#B99B85] pl-5">

                <p className="text-sm font-medium text-[#8B6F5A]">
                  BCA
                </p>

                <p className="mt-1 font-semibold text-[#4B3426]">
                  Ashoka Center for Business
                  <br />
                  and Computer Studies
                </p>

                <p className="mt-1 text-sm text-[#76665D]">
                  Nashik
                </p>

              </div>

            </div>


            {/* What I Enjoy */}
            <div className="rounded-[2rem] border border-[#DCE3D8] bg-[#D6E0D1]/60 p-7">

              <h3 className="text-xl font-semibold text-[#4B3426]">
                What I Enjoy
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">

                {[
                  "Building Websites",
                  "Problem Solving",
                  "Learning Tech",
                  "UI & UX",
                  "AI-Assisted Development",
                  "Database Design",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#FFFDF9] px-4 py-2 text-sm text-[#6B4A3A] shadow-sm"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;