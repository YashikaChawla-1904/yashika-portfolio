function CaseStudy() {
  const features = [
    "QR-based digital menu",
    "Dine-in & Bar menu experience",
    "Cart & order management",
    "Order status tracking",
    "Call waiter functionality",
    "Offers & feedback",
    "Owner, Manager & Waiter dashboards",
    "Restaurant analytics",
  ];

  const contribution = [
    "Designed responsive frontend interfaces",
    "Developed React components and user flows",
    "Built backend APIs using Node.js & Express.js",
    "Integrated MySQL database",
    "Implemented role-based dashboard experiences",
    "Worked on order and menu management workflows",
  ];

  return (
    <section
      id="case-study"
      className="bg-[#FFFDF9] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-16 max-w-4xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-sm font-semibold tracking-wider text-[#8B6F5A]">
              CASE STUDY
            </span>

            <span className="h-px w-12 bg-[#B9AA9C]" />

            <span className="text-xs uppercase tracking-[0.2em] text-[#6F8067]">
              Featured Project
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight text-[#4B3426] sm:text-6xl">
            Building a smarter
            <br />
            <span className="font-serif font-normal italic text-[#6F8067]">
              restaurant experience.
            </span>
          </h2>

          <p className="mt-7 max-w-3xl text-base leading-8 text-[#76665D]">
            Nandanvan Digital Menu is a QR-based restaurant management
            application created to provide customers with a convenient
            digital ordering experience while giving restaurant staff
            dedicated tools to manage menus, orders and daily operations.
          </p>
        </div>

        {/* Project Overview */}
        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-[2rem] bg-[#4B3426] p-7 text-[#FFFDF9]">
            <p className="text-xs uppercase tracking-[0.2em] text-[#D6E0D1]">
              Project
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              Nandanvan
            </h3>

            <p className="mt-1 font-serif text-xl italic text-[#E8D8C8]">
              Digital Menu
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#D5CBBF] bg-[#F7EFE6] p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8B6F5A]">
              Role
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-[#4B3426]">
              Full Stack Developer
            </h3>

            <p className="mt-2 text-sm text-[#76665D]">
              Development • UI • API • Database
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#D5CBBF] bg-[#E2EBDD] p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-[#5E7157]">
              Stack
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-[#4B3426]">
              MERN + MySQL
            </h3>

            <p className="mt-2 text-sm text-[#76665D]">
              React • Node • Express • MySQL
            </p>
          </div>

        </div>

        {/* Problem / Solution */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          <div>
            <span className="text-sm font-semibold text-[#8B6F5A]">
              01 — THE PROBLEM
            </span>

            <h3 className="mt-4 text-3xl font-semibold text-[#4B3426]">
              From traditional menus to a digital experience.
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#76665D]">
              The project was designed around the need for a convenient
              digital menu and ordering experience for restaurant customers,
              while also providing staff with dedicated interfaces for
              handling orders and restaurant operations.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold text-[#6F8067]">
              02 — THE SOLUTION
            </span>

            <h3 className="mt-4 text-3xl font-semibold text-[#4B3426]">
              One platform for diners and restaurant teams.
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#76665D]">
              I developed a responsive QR-based application where customers
              can explore the menu and interact with their table experience,
              while Owner, Manager and Waiter dashboards provide separate
              workflows for managing restaurant activities.
            </p>
          </div>

        </div>

        {/* Features */}
        <div className="mt-20">

          <div className="mb-8">
            <span className="text-sm font-semibold text-[#8B6F5A]">
              03 — KEY FEATURES
            </span>

            <h3 className="mt-3 text-3xl font-semibold text-[#4B3426]">
              Designed around real restaurant workflows.
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="
                  group
                  rounded-[1.5rem]
                  border
                  border-[#D5CBBF]
                  bg-[#F7EFE6]
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#E2EBDD]
                  hover:shadow-md
                "
              >
                <span className="text-xs font-semibold text-[#8B6F5A]">
                  0{index + 1}
                </span>

                <p className="mt-4 text-sm font-medium leading-6 text-[#4B3426]">
                  {feature}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Contribution */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <span className="text-sm font-semibold text-[#8B6F5A]">
              04 — MY CONTRIBUTION
            </span>

            <h3 className="mt-4 text-3xl font-semibold text-[#4B3426]">
              What I worked on.
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#76665D]">
              I worked across the frontend, backend and database layers of
              the application, connecting the different parts into a
              functional full-stack solution.
            </p>
          </div>

          <div className="space-y-3">
            {contribution.map((item, index) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-5
                  rounded-2xl
                  border
                  border-[#D5CBBF]
                  bg-[#FFFDF9]
                  p-4
                  shadow-sm
                "
              >
                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#E2EBDD]
                    text-xs
                    font-semibold
                    text-[#5E7157]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm font-medium text-[#5E544D]">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Tech Stack */}
        <div className="mt-20 rounded-[2.5rem] bg-gradient-to-r from-[#4B3426] via-[#665142] to-[#5E7157] p-8 text-[#FFFDF9] sm:p-10">

          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#D6E0D1]">
                05 — TECHNOLOGY
              </p>

              <h3 className="mt-3 text-3xl font-semibold">
                Built with modern web technologies.
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "React.js",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "MySQL",
                "REST APIs",
                "Git",
                "GitHub",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    px-4
                    py-2
                    text-sm
                    backdrop-blur-sm
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* Closing */}
        <div className="mt-16 text-center">

          <p className="font-serif text-2xl italic text-[#6F8067] sm:text-3xl">
            "Built to make the dining journey simpler."
          </p>

          <div className="mx-auto mt-6 h-px w-20 bg-[#CDBEAF]" />

        </div>

      </div>
    </section>
  );
}

export default CaseStudy;