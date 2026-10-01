function RankItRightCaseStudy() {
  const features = [
    "Resume evaluation",
    "Resume ranking",
    "NLP-based analysis",
    "Soft-skill analysis",
    "Structured candidate evaluation",
    "Database-backed results",
  ];

  const tech = ["Python", "NLP", "Machine Learning", "MySQL", "HTML", "CSS"];

  return (
    <section
      id="rankitright"
      className="bg-[#F7EFE6] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8B6F5A]">
              Project Case Study · 02
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#4B3426] sm:text-6xl">
              RankIt
              <span className="font-serif font-normal italic text-[#6F8067]">
                Right.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#76665D]">
              An AI-powered resume and video evaluator designed to help
              analyze candidate profiles using NLP and machine learning
              concepts.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#D5CBBF] bg-[#FFFDF9] p-7 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8B6F5A]">
              Project Type
            </p>

            <p className="mt-3 text-2xl font-semibold text-[#4B3426]">
              AI + Web Application
            </p>

            <p className="mt-2 text-sm text-[#76665D]">
              Resume ranking & soft-skill analysis
            </p>
          </div>

        </div>

        {/* Main Case Study */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">

          {/* Problem */}
          <div className="rounded-[2rem] bg-[#4B3426] p-8 text-[#FFFDF9]">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D6E0D1]">
              01 · Problem
            </span>

            <h3 className="mt-5 text-2xl font-semibold">
              Making candidate evaluation more structured.
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#E8D8C8]">
              The project focused on creating a system that could evaluate
              resumes and analyze soft-skill information instead of relying
              only on manual comparison.
            </p>
          </div>

          {/* Solution */}
          <div className="rounded-[2rem] border border-[#D5CBBF] bg-[#FFFDF9] p-8">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8B6F5A]">
              02 · Solution
            </span>

            <h3 className="mt-5 text-2xl font-semibold text-[#4B3426]">
              An AI-assisted evaluation workflow.
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#76665D]">
              RankItRight combines NLP and machine learning concepts with a
              web interface and database to process candidate information and
              produce structured evaluation results.
            </p>
          </div>

          {/* Role */}
          <div className="rounded-[2rem] bg-[#E2EBDD] p-8">
            <span className="text-xs uppercase tracking-[0.2em] text-[#5E7157]">
              03 · Focus
            </span>

            <h3 className="mt-5 text-2xl font-semibold text-[#4B3426]">
              AI + Application Development
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#76665D]">
              The project brought together programming, database handling,
              web development and AI-based analysis concepts.
            </p>
          </div>

        </div>

        {/* Features */}
        <div className="mt-16">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B6F5A]">
            04 · Key Capabilities
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="
                  group
                  rounded-[1.5rem]
                  border border-[#D5CBBF]
                  bg-[#FFFDF9]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <span className="text-xs font-semibold text-[#6F8067]">
                  0{index + 1}
                </span>

                <h3 className="mt-4 font-medium text-[#4B3426]">
                  {feature}
                </h3>
              </div>
            ))}
          </div>

        </div>

        {/* Technology */}
        <div className="mt-16 rounded-[2.5rem] border border-[#D5CBBF] bg-[#FFFDF9] p-8 sm:p-10">

          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8B6F5A]">
                05 · Technology
              </p>

              <h3 className="mt-3 text-3xl font-semibold text-[#4B3426]">
                Technology used
              </h3>
            </div>

            <div className="flex max-w-xl flex-wrap gap-2">
              {tech.map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border border-[#CDBEAF]
                    bg-[#F7EFE6]
                    px-4
                    py-2
                    text-xs
                    font-medium
                    text-[#5E544D]
                  "
                >
                  {item}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-14 text-center">
          <p className="font-serif text-2xl italic text-[#6F8067]">
            Turning candidate data into meaningful insights.
          </p>
        </div>

      </div>
    </section>
  );
}

export default RankItRightCaseStudy;