function CampusEatSCaseStudy() {
  const features = [
    "Online food ordering",
    "Digital food menu",
    "Order management",
    "Database-driven application",
    "Campus-focused experience",
    "Simple user interface",
  ];

  const tech = [
    "HTML",
    "CSS",
    "JavaScript",
    "Flask",
    "Python",
    "MySQL",
  ];

  return (
    <section
      id="campuseats"
      className="bg-[#FFFDF9] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Intro */}
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8B6F5A]">
              Project Case Study · 03
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#4B3426] sm:text-6xl">
              Campus
              <span className="font-serif font-normal italic text-[#6F8067]">
                EatS.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#76665D]">
            An online canteen food-ordering application developed for the
            MET campus, combining a web interface with Python, Flask and
            MySQL for the application backend and data management.
          </p>

        </div>

        {/* Big Visual */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[2.5rem]
            bg-gradient-to-br
            from-[#E2EBDD]
            via-[#F7EFE6]
            to-[#E8D8C8]
            p-8
            sm:p-12
          "
        >

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            {/* Left visual */}
            <div className="flex justify-center">

              <div className="relative w-full max-w-sm">

                <div className="rounded-[2rem] border border-[#CDBEAF] bg-[#FFFDF9] p-5 shadow-xl">

                  <div className="flex items-center justify-between border-b border-[#E8D8C8] pb-4">
                    <span className="font-semibold text-[#4B3426]">
                      CampusEatS
                    </span>

                    <span className="rounded-full bg-[#E2EBDD] px-3 py-1 text-xs text-[#5E7157]">
                      Menu
                    </span>
                  </div>

                  <div className="mt-5 space-y-3">

                    <div className="rounded-2xl bg-[#F7EFE6] p-4">
                      <div className="h-3 w-24 rounded-full bg-[#CDBEAF]" />
                      <div className="mt-3 h-2 w-36 rounded-full bg-[#E8D8C8]" />
                    </div>

                    <div className="rounded-2xl bg-[#F7EFE6] p-4">
                      <div className="h-3 w-28 rounded-full bg-[#CDBEAF]" />
                      <div className="mt-3 h-2 w-32 rounded-full bg-[#E8D8C8]" />
                    </div>

                    <div className="rounded-2xl bg-[#F7EFE6] p-4">
                      <div className="h-3 w-20 rounded-full bg-[#CDBEAF]" />
                      <div className="mt-3 h-2 w-40 rounded-full bg-[#E8D8C8]" />
                    </div>

                  </div>

                  <div className="mt-5 rounded-full bg-[#4B3426] px-5 py-3 text-center text-xs font-medium text-white">
                    Place Order
                  </div>

                </div>

              </div>

            </div>

            {/* Right */}
            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5E7157]">
                Web Application
              </p>

              <h3 className="mt-4 text-3xl font-semibold text-[#4B3426] sm:text-4xl">
                Making campus food ordering simpler.
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#76665D]">
                CampusEatS was developed as an online canteen food-ordering
                platform for the MET campus. The project focuses on providing
                a digital way for users to browse food options and place
                orders.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {tech.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border border-[#CDBEAF]
                      bg-[#FFFDF9]/80
                      px-3
                      py-1.5
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

        </div>

        {/* Process */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B6F5A]">
              01 · Objective
            </p>

            <h3 className="mt-4 text-3xl font-semibold text-[#4B3426]">
              A digital alternative to manual canteen ordering.
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#76665D]">
              The project was created around the idea of making food ordering
              within a campus environment more convenient through a web-based
              system.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6F8067]">
              02 · Approach
            </p>

            <h3 className="mt-4 text-3xl font-semibold text-[#4B3426]">
              Frontend + backend + database.
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#76665D]">
              The application combines frontend technologies with a Flask
              backend and MySQL database to support the food-ordering
              workflow.
            </p>
          </div>

        </div>

        {/* Features */}
        <div className="mt-16">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B6F5A]">
            03 · Key Features
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {features.map((feature, index) => (
              <div
                key={feature}
                className="
                  rounded-[1.5rem]
                  border border-[#D5CBBF]
                  bg-[#F7EFE6]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-md
                "
              >
                <span className="text-xs font-semibold text-[#6F8067]">
                  0{index + 1}
                </span>

                <p className="mt-4 text-sm font-medium text-[#4B3426]">
                  {feature}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* Learning */}
        <div className="mt-16 rounded-[2rem] bg-[#4B3426] p-8 text-[#FFFDF9] sm:p-10">

          <p className="text-xs uppercase tracking-[0.2em] text-[#D6E0D1]">
            04 · Learning
          </p>

          <h3 className="mt-4 max-w-2xl text-3xl font-semibold">
            A project that strengthened my full-stack fundamentals.
          </h3>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#E8D8C8]">
            Working on CampusEatS helped me understand how frontend
            interfaces, backend routes and database operations come together
            to form a complete web application.
          </p>

        </div>

        {/* Closing */}
        <div className="mt-14 text-center">
          <p className="font-serif text-2xl italic text-[#6F8067]">
            From a campus idea to a functional web application.
          </p>
        </div>

      </div>
    </section>
  );
}

export default CampusEatSCaseStudy;