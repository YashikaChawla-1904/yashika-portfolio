function Achievements() {
  const achievements = [
    {
      number: "01",
      title: "Research Paper Published",
      description:
        "Published research work based on the CampusEatS online canteen food-ordering project in the IRJIET Journal.",
      tag: "Publication",

      certificate: "/CampusEatS-Research-Paper-Certificate.pdf",
      researchPaper: "/CampusEatS-Research-Paper.pdf",
    },

    {
      number: "02",
      title: "International Conference",
      description:
        "Presented the RankItRight — Resume & Video Evaluator project at a GSTE International Conference.",
      tag: "Presentation",

      certificate: "/GSTE-International-Conference-Certificate.pdf",
    },

    {
      number: "03",
      title: "Smart India Hackathon",
      description:
        "Participated in Smart India Hackathon and worked on a problem-solving based technology project.",
      tag: "Hackathon",

      certificate: "/Smart-India-Hackathon-Certificate.pdf",
    },

    {
      number: "04",
      title: "Mastek Hackathon",
      description:
        "Participated in the national-level Mastek Hackathon, gaining experience in collaborative problem solving and technology development.",
      tag: "Hackathon",
    },
  ];

  const certifications = [
    {
      title: "Full Stack MERN Development",
      issuer: "Internship Certification",
      icon: "⌘",
      certificate: "/Full-Stack-MERN-Certificate.pdf",
    },

    {
      title: "Java Programming",
      issuer: "Programming Certification",
      icon: "J",
      certificate: "/Java-Programming-Certificate.pdf",
    },

    {
      title: "Python Programming",
      issuer: "Programming Certification",
      icon: "Py",
      certificate: "/Python-Programming-Certificate.pdf",
    },
  ];

  return (
    <section
      id="achievements"
      className="bg-[#FFFDF9] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}
        <div className="mb-16">

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#8B6F5A]">
            Beyond Development
          </p>

          <h2 className="text-4xl font-bold text-[#4B3426] sm:text-5xl">
            Achievements &{" "}
            <span className="font-serif italic font-normal text-[#6F8067]">
              certifications.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#76665D]">
            Experiences and accomplishments that reflect my learning,
            curiosity, technical growth and participation beyond regular
            academics.
          </p>

        </div>


        {/* ================= ACHIEVEMENTS ================= */}
        <div className="grid gap-6 lg:grid-cols-2">

          {achievements.map((achievement) => (

            <div
              key={achievement.number}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-[#D8CBBE]
                bg-gradient-to-br
                from-[#F7EFE6]
                via-[#FFFDF9]
                to-[#E2EBDD]
                p-7
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                sm:p-8
              "
            >

              {/* Background Number */}
              <span
                className="
                  absolute
                  -right-3
                  -top-8
                  text-[130px]
                  font-bold
                  leading-none
                  text-[#6F8067]/10
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              >
                {achievement.number}
              </span>


              <div className="relative">

                {/* Top Row */}
                <div className="flex items-center justify-between">

                  <span className="text-sm font-semibold tracking-wider text-[#8B6F5A]">
                    {achievement.number}
                  </span>

                  <span
                    className="
                      rounded-full
                      border
                      border-[#CDBEAF]
                      bg-[#FFFDF9]/80
                      px-3
                      py-1.5
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-[#6F8067]
                    "
                  >
                    {achievement.tag}
                  </span>

                </div>


                {/* Title */}
                <h3
                  className="
                    mt-10
                    max-w-md
                    text-2xl
                    font-semibold
                    text-[#4B3426]
                    sm:text-3xl
                  "
                >
                  {achievement.title}
                </h3>


                {/* Description */}
                <p
                  className="
                    mt-4
                    max-w-xl
                    text-sm
                    leading-7
                    text-[#76665D]
                  "
                >
                  {achievement.description}
                </p>


                {/* ================= BUTTONS ================= */}
                {achievement.certificate && (
                  <div className="mt-7 flex flex-wrap gap-3">

                    {/* View Certificate */}
                    <a
                      href={achievement.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-[#4B3426]
                        px-4
                        py-2.5
                        text-xs
                        font-semibold
                        text-white
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-[#5E7157]
                        hover:shadow-md
                      "
                    >
                      View Certificate
                      <span>↗</span>
                    </a>


                    {/* View Research Paper - ONLY FIRST ACHIEVEMENT */}
                    {achievement.researchPaper && (
                      <a
                        href={achievement.researchPaper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-[#4B3426]
                          bg-[#FFFDF9]
                          px-4
                          py-2.5
                          text-xs
                          font-semibold
                          text-[#4B3426]
                          shadow-sm
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:bg-[#E2EBDD]
                          hover:shadow-md
                        "
                      >
                        View Research Paper
                        <span>↗</span>
                      </a>
                    )}

                  </div>
                )}


                {/* Bottom Line */}
                <div
                  className="
                    mt-7
                    h-px
                    w-16
                    bg-[#8B6F5A]
                    transition-all
                    duration-300
                    group-hover:w-28
                  "
                />

              </div>

            </div>

          ))}

        </div>


        {/* ================= CERTIFICATIONS ================= */}
        <div className="mt-20">

          <div
            className="
              mb-8
              flex
              flex-col
              justify-between
              gap-4
              sm:flex-row
              sm:items-end
            "
          >

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B6F5A]">
                Learning Credentials
              </p>

              <h3 className="mt-2 text-3xl font-semibold text-[#4B3426]">
                Certifications
              </h3>

            </div>

            <p className="max-w-md text-sm leading-6 text-[#76665D]">
              Certifications supporting my foundation in full-stack
              development and programming.
            </p>

          </div>


          {/* Certification Cards */}
          <div className="grid gap-5 md:grid-cols-3">

            {certifications.map((certificate) => (

              <div
                key={certificate.title}
                className="
                  group
                  rounded-[1.8rem]
                  border
                  border-[#D8CBBE]
                  bg-[#F7EFE6]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#E2EBDD]
                  hover:shadow-lg
                "
              >

                {/* Top */}
                <div className="flex items-start justify-between gap-4">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#4B3426]
                      text-sm
                      font-bold
                      text-[#FFFDF9]
                      shadow-md
                    "
                  >
                    {certificate.icon}
                  </div>

                  <span
                    className="
                      text-lg
                      text-[#8B6F5A]
                      transition-transform
                      duration-300
                      group-hover:rotate-12
                    "
                  >
                    ✦
                  </span>

                </div>


                {/* Title */}
                <h4
                  className="
                    mt-7
                    text-lg
                    font-semibold
                    leading-7
                    text-[#4B3426]
                  "
                >
                  {certificate.title}
                </h4>


                {/* Issuer */}
                <p className="mt-2 text-sm text-[#76665D]">
                  {certificate.issuer}
                </p>


                {/* View Certificate Button */}
                <a
                  href={certificate.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[#4B3426]
                    bg-[#FFFDF9]
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    text-[#4B3426]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#4B3426]
                    hover:text-white
                    hover:shadow-md
                  "
                >
                  View Certificate
                  <span>↗</span>
                </a>

              </div>

            ))}

          </div>

        </div>


        {/* ================= BOTTOM HIGHLIGHT ================= */}
        <div
          className="
            mt-16
            overflow-hidden
            rounded-[2rem]
            bg-gradient-to-r
            from-[#4B3426]
            via-[#665142]
            to-[#5E7157]
            p-7
            text-[#FFFDF9]
            shadow-lg
            sm:p-9
          "
        >

          <div
            className="
              relative
              flex
              flex-col
              gap-6
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D6E0D1]">
                Keep learning
              </p>

              <h3 className="mt-2 max-w-xl text-2xl font-semibold sm:text-3xl">
                Every project is another step forward.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#E8D8C8]">
                I believe consistent learning, practical projects and
                real-world problem solving are what turn knowledge into
                meaningful skills.
              </p>

            </div>


            <div
              className="
                flex
                h-20
                w-20
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#D6E0D1]/30
                bg-white/5
                text-3xl
                text-[#D6E0D1]
              "
            >
              ✦
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Achievements;