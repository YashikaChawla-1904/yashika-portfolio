function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Frontend",
      description: "Creating responsive and user-focused interfaces.",
      skills: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      number: "02",
      title: "Backend",
      description: "Building APIs and server-side application logic.",
      skills: ["Node.js", "Express.js", "REST APIs", "PHP"],
    },
    {
      number: "03",
      title: "Database",
      description: "Designing and working with structured application data.",
      skills: ["MySQL", "MySQL Workbench", "Oracle", "DBMS"],
    },
    {
      number: "04",
      title: "Programming",
      description: "Strong foundation in programming and problem solving.",
      skills: ["Python", "Core Java", "JavaScript", "OOP", "DSA"],
    },
    {
      number: "05",
      title: "Tools",
      description: "Tools I use during development and testing.",
      skills: ["VS Code", "Git", "GitHub", "Postman", "IntelliJ IDEA"],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#F7EFE6] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* =========================
            SECTION HEADING
        ========================== */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#8B6F5A]">
              My Toolkit
            </p>

            <h2 className="text-4xl font-bold text-[#4B3426] sm:text-5xl">
              Skills &{" "}
              <span className="font-serif italic font-normal text-[#6F8067]">
                technologies.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#76665D]">
            Technologies and tools I've worked with while building web
            applications, academic projects and internship projects.
          </p>
        </div>

        {/* =========================
            SKILLS GRID
            3 TOP + 2 CENTER
        ========================== */}
        <div className="grid gap-6 md:grid-cols-6">

          {skillGroups.map((group, index) => (
            <div
              key={group.number}
              className={`
                group
                rounded-[2rem]
                border border-[#D5CBBF]

                /* 3-SHADE GRADIENT */
                bg-gradient-to-br
                from-[#FFFDF9]
                via-[#E8D8C8]
                to-[#D6E0D1]

                p-7
                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-2
                hover:shadow-xl

                md:col-span-2

                ${index === 3 ? "md:col-start-2" : ""}
                ${index === 4 ? "md:col-start-4" : ""}
              `}
            >

              {/* =========================
                  NUMBER + ICON
              ========================== */}
              <div className="flex items-center justify-between">

                <span className="text-sm font-semibold tracking-wider text-[#8B6F5A]">
                  {group.number}
                </span>

                <span
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    border border-[#C9BBAE]
                    bg-[#FFFDF9]/85
                    text-[#5E7157]
                    shadow-sm

                    transition-all
                    duration-300

                    group-hover:rotate-12
                    group-hover:scale-110
                  "
                >
                  ✦
                </span>

              </div>

              {/* =========================
                  TITLE
              ========================== */}
              <h3 className="mt-7 text-2xl font-semibold text-[#4B3426]">
                {group.title}
              </h3>

              {/* =========================
                  DESCRIPTION
              ========================== */}
              <p className="mt-3 min-h-[48px] text-sm leading-6 text-[#76665D]">
                {group.description}
              </p>

              {/* =========================
                  SKILL PILLS
              ========================== */}
              <div className="mt-6 flex flex-wrap gap-2">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full

                      border border-[#CFC3B7]

                      bg-[#FFFDF9]/80

                      px-3 py-1.5

                      text-xs
                      font-medium
                      text-[#5E544D]

                      transition-all
                      duration-200

                      group-hover:bg-[#FFFDF9]
                      group-hover:border-[#B9AA9C]
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* =========================
            BOTTOM HIGHLIGHT
        ========================== */}
        <div
          className="
            mt-8
            rounded-[2rem]
            border border-[#5A6A54]

            bg-gradient-to-r
            from-[#4B3426]
            via-[#665142]
            to-[#5E7157]

            p-7
            text-[#FFFDF9]
            shadow-lg

            sm:p-8
          "
        >

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#D6E0D1]">
                Always learning
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Exploring better ways to build.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#E8D8C8]">
              I enjoy learning new technologies and applying them to
              practical projects rather than simply learning them
              theoretically.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;