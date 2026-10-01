function Experience() {
  const experiences = [
    {
      year: "Jan 2026 — Jun 2026",
      type: "Internship",
      title: "Full Stack MERN Developer Intern",
      company: "Engeniuspark Technologies Pvt. Ltd. (ESTPL)",
      certificate: "/ESTPL-Internship-Certificate.pdf",
      description:
        "Worked on responsive web applications and full-stack development using React, Node.js, Express.js and MySQL. Built and integrated REST APIs, worked on debugging and troubleshooting, and explored Generative AI tools for practical development workflows.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "REST APIs",
        "GenAI",
      ],
    },
    {
      year: "4 Weeks",
      type: "AI Internship",
      title: "AI-Focused Intern",
      company: "TechSaksham — Microsoft / AICTE / SAP / Edunet Foundation",
      certificate: "/TechSaksham-Internship-Certificate.png",
      description:
        "Completed an AI-focused internship involving Python, web development, user interface development and practical applications of artificial intelligence.",
      technologies: [
        "Python",
        "AI",
        "Web Development",
        "UI Development",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-[#FFFDF9] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#8B6F5A]">
            My Journey
          </p>

          <h2 className="text-4xl font-bold text-[#4B3426] sm:text-5xl">
            Experience &{" "}
            <span className="font-serif italic font-normal text-[#6F8067]">
              internships.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#76665D]">
            A glimpse into the experiences where I developed my technical
            skills, worked on practical projects and learned how real-world
            development works.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-[#D8C9BA] md:block" />

          <div className="space-y-12">

            {experiences.map((experience, index) => (
              <div
                key={experience.title}
                className="relative grid gap-8 md:grid-cols-[180px_1fr] md:gap-12"
              >

                {/* Timeline Point */}
                <div className="relative hidden md:block">

                  <div className="absolute left-[10px] top-7 z-10 flex h-[20px] w-[20px] items-center justify-center rounded-full border-4 border-[#FFFDF9] bg-[#6F8067] shadow-md" />

                  <p className="pt-6 pl-12 text-sm font-semibold text-[#8B6F5A]">
                    {experience.year}
                  </p>

                </div>

                {/* Mobile Year */}
                <p className="text-sm font-semibold text-[#8B6F5A] md:hidden">
                  {experience.year}
                </p>

                {/* ================= EXPERIENCE CONTENT ================= */}
                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    border border-[#E2D5C8]
                    bg-gradient-to-br
                    from-[#FFFDF9]
                    via-[#F8EFE6]
                    to-[#E2EBDD]
                    p-7
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    sm:p-9
                  "
                >

                  {/* Decorative Number */}
                  <div className="absolute -right-5 -top-8 text-[130px] font-bold leading-none text-[#6F8067]/10">
                    0{index + 1}
                  </div>

                  <div className="relative">

                    {/* ================= TOP ROW ================= */}
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

                      <span className="w-fit rounded-full border border-[#CDBEAF] bg-[#FFFDF9]/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#6B4A3A]">
                        {experience.type}
                      </span>

                      <div className="flex items-center gap-3">

                        {/* Mobile Year */}
                        <span className="text-xs font-medium text-[#8B6F5A] md:hidden">
                          {experience.year}
                        </span>

                        {/* Certificate Arrow */}
                        <a
                          href={experience.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${experience.title} certificate`}
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#CDBEAF]
                            bg-[#FFFDF9]
                            text-sm
                            font-semibold
                            text-[#6B4A3A]
                            shadow-sm
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:border-[#4B3426]
                            hover:bg-[#4B3426]
                            hover:text-white
                            hover:shadow-md
                          "
                        >
                          ↗
                        </a>

                      </div>
                    </div>


                    {/* ================= TITLE ================= */}
                    <h3 className="mt-6 text-2xl font-semibold text-[#4B3426] sm:text-3xl">
                      {experience.title}
                    </h3>


                    {/* ================= COMPANY ================= */}
                    <p className="mt-2 text-base font-medium text-[#6F8067]">
                      {experience.company}
                    </p>


                    {/* ================= DESCRIPTION ================= */}
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-[#76665D]">
                      {experience.description}
                    </p>


                    {/* ================= TECHNOLOGIES ================= */}
                    <div className="mt-7 flex flex-wrap gap-2">

                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-full
                            border border-[#D2C5B9]
                            bg-[#FFFDF9]/80
                            px-3
                            py-1.5
                            text-xs
                            font-medium
                            text-[#5E544D]
                            transition-all
                            duration-200
                            group-hover:border-[#B9AA9C]
                            group-hover:bg-[#FFFDF9]
                          "
                        >
                          {technology}
                        </span>
                      ))}

                    </div>

                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>


        {/* ================= BOTTOM HIGHLIGHT ================= */}
        <div
          className="
            mt-16
            rounded-[2rem]
            border border-[#D5CBBF]
            bg-[#4B3426]
            p-7
            text-[#FFFDF9]
            shadow-lg
            sm:p-9
          "
        >

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D6E0D1]">
                From learning to building
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Turning internship experience into real projects.
              </h3>

            </div>

            <div className="text-4xl text-[#D6E0D1]">
              ✦
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;