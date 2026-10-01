import { useState } from "react";

function Projects() {
  const [openProject, setOpenProject] = useState(null);

  const projects = [
    {
      number: "01",
      title: "Nandanvan",
      subtitle: "AI-Assisted QR-Based Digital Menu Application for Smart Restaurant Management",
      description:
        "A smart QR-based digital menu and restaurant management application designed for diners, waiters, managers and owners.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "Tailwind CSS",
      ],
      accent: "bg-[#E8D8C8]",
      report: "/Nandanvan-Project-Report.pdf",

      caseStudy: {
        overview:
          "Nandanvan is a full-stack digital menu and restaurant management system developed for Nandanvan Family Restaurant. The application provides a QR-based menu experience for customers along with dedicated dashboards for restaurant staff.",

        problem:
          "Traditional restaurant ordering can involve printed menus, manual order taking and limited visibility into order status. The goal was to create a digital system that simplifies menu browsing, ordering and restaurant-side order management.",

        solution:
          "Built a responsive QR-based digital menu where diners can browse categories, select items, add products to cart, place orders and track order status. Separate dashboards were created for Owner, Manager and Waiter roles.",

        features: [
          "QR-based digital menu",
          "Dine-in and Bar menu experience",
          "Cart and order management",
          "Real-time order status tracking",
          "Call waiter functionality",
          "Offers and feedback",
          "Owner dashboard",
          "Manager analytics",
          "Waiter order management",
          "Role-based access",
        ],

        outcome:
          "The project brought together frontend, backend, database and real-time functionality into one practical restaurant management solution.",
      },
    },

    {
      number: "02",
      title: "RankItRight",
      subtitle: "Resume & Video Evaluator",
      description:
        "An AI-assisted candidate evaluation system that analyzes resumes and video-based soft skills to support structured candidate assessment.",
      technologies: [
        "Python",
        "NLP",
        "Machine Learning",
        "MySQL",
        "HTML",
        "CSS",
      ],
      accent: "bg-[#D6E0D1]",
      report: "/RankItRight-Project-Report.pdf",

      caseStudy: {
        overview:
          "RankItRight is an AI-assisted resume and video evaluation system designed to help organize and evaluate candidate information using NLP and machine learning techniques.",

        problem:
          "Manual resume screening can be time-consuming when recruiters need to evaluate a large number of candidates. Candidate information can also be difficult to compare consistently.",

        solution:
          "The system processes resume information and applies NLP/ML-based analysis to generate structured candidate evaluation and ranking. It also focuses on analyzing soft-skill related aspects from video responses.",

        features: [
          "Resume evaluation",
          "Resume ranking",
          "NLP-based analysis",
          "Candidate comparison",
          "Soft-skill analysis",
          "Structured evaluation",
          "MySQL database integration",
          "AI-assisted processing",
        ],

        outcome:
          "The project provided practical experience in combining AI concepts, backend logic, databases and web technologies to solve a real-world recruitment-related problem.",
      },
    },

    {
      number: "03",
      title: "CampusEatS",
      subtitle: "Online Canteen Food Ordering For MET Campus",
      description:
        "A web-based online food ordering system created to simplify food ordering for students and users within a college campus environment.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Flask",
        "Python",
        "MySQL",
      ],
      accent: "bg-[#EBC9B0]/60",
      report: "/CampusEatS-Project-Report.pdf",

      caseStudy: {
        overview:
          "CampusEatS is an online canteen food-ordering application developed for the MET campus environment. It allows users to browse available food items and place orders digitally.",

        problem:
          "Students often have limited time between classes and may need to wait in queues to place food orders. The project aimed to provide a more convenient digital ordering experience.",

        solution:
          "Developed a web application with a user-friendly interface for browsing food items and placing orders. Flask and Python were used for backend functionality with MySQL for data management.",

        features: [
          "Online food ordering",
          "Food item browsing",
          "User-friendly interface",
          "Order management",
          "Python Flask backend",
          "MySQL database",
          "Responsive web interface",
        ],

        outcome:
          "The project helped build practical understanding of full-stack web development, database integration and developing solutions for a real campus use case.",
      },
    },
  ];

  const toggleCaseStudy = (index) => {
    setOpenProject(openProject === index ? null : index);
  };

  return (
    <section
      id="projects"
      className="bg-[#F7EFE6] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* ================= SECTION HEADING ================= */}
        <div className="mb-16">

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#8B6F5A]">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold leading-tight text-[#4B3426] sm:text-5xl lg:text-6xl">
            Projects I’ve{" "}
            <span className="font-serif font-normal italic text-[#6F8067]">
              built.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#76665D]">
            A selection of projects where I explored full-stack development,
            AI-assisted solutions, databases and practical real-world
            applications.
          </p>

        </div>


        {/* ================= PROJECTS ================= */}
        <div className="space-y-8">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-[2.5rem] border border-[#D8CBBE] bg-[#FFFDF9] shadow-sm transition-all duration-300 hover:shadow-xl"
            >

              {/* ================= MAIN PROJECT CARD ================= */}
              <div className="relative p-7 sm:p-9 lg:p-10">

                {/* Decorative Number */}
                <div className="pointer-events-none absolute -right-2 -top-8 text-[150px] font-bold leading-none text-[#4B3426]/[0.035]">
                  {project.number}
                </div>

                <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

                  {/* LEFT SIDE */}
                  <div>

                    <div className="flex items-start justify-between gap-4">

                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${project.accent} text-lg font-bold text-[#4B3426]`}
                      >
                        {project.number}
                      </div>

                      <span className="rounded-full border border-[#D8CBBE] bg-[#F7EFE6] px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-[#8B6F5A]">
                        Project
                      </span>

                    </div>

                    <h3 className="mt-7 text-3xl font-bold text-[#4B3426] sm:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-2 font-serif text-xl italic text-[#6F8067]">
                      {project.subtitle}
                    </p>

                  </div>


                  {/* RIGHT SIDE */}
                  <div>

                    <p className="max-w-2xl text-sm leading-7 text-[#76665D]">
                      {project.description}
                    </p>


                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2">

                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-[#D4C7BA] bg-[#F7EFE6] px-3.5 py-2 text-xs font-medium text-[#5E544D]"
                        >
                          {technology}
                        </span>
                      ))}

                    </div>


                    {/* ================= BUTTONS ================= */}
                    <div className="mt-8 flex flex-wrap gap-3">

                      {/* View Case Study */}
                      <button
                        type="button"
                        onClick={() => toggleCaseStudy(index)}
                        className="inline-flex items-center gap-2 rounded-full bg-[#4B3426] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5E7157] hover:shadow-md"
                      >
                        {openProject === index
                          ? "Close Case Study"
                          : "View Case Study"}

                        <span
                          className={`transition-transform duration-300 ${
                            openProject === index
                              ? "rotate-180"
                              : ""
                          }`}
                        >
                          ↓
                        </span>
                      </button>


                      {/* View Report */}
                      <a
                        href={project.report}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#4B3426] bg-[#FFFDF9] px-5 py-3 text-sm font-semibold text-[#4B3426] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E2EBDD] hover:shadow-md"
                      >
                        View Report
                        <span>↗</span>
                      </a>

                    </div>

                  </div>

                </div>
              </div>


              {/* ================= CASE STUDY ================= */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openProject === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >

                <div className="overflow-hidden">

                  <div className="border-t border-[#E2D5C8] bg-[#F7EFE6] px-7 py-8 sm:px-9 sm:py-10 lg:px-10">

                    {/* Case Study Header */}
                    <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

                      <div>

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B6F5A]">
                          Case Study
                        </p>

                        <h4 className="mt-2 text-2xl font-bold text-[#4B3426] sm:text-3xl">
                          {project.title}
                        </h4>

                      </div>

                      <span className="text-sm text-[#8B6F5A]">
                        0{index + 1} / 03
                      </span>

                    </div>


                    {/* Overview + Problem */}
                    <div className="grid gap-6 md:grid-cols-2">

                      <div className="rounded-[1.75rem] border border-[#D8CBBE] bg-[#FFFDF9] p-6">

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B6F5A]">
                          Overview
                        </p>

                        <p className="mt-4 text-sm leading-7 text-[#76665D]">
                          {project.caseStudy.overview}
                        </p>

                      </div>


                      <div className="rounded-[1.75rem] border border-[#D8CBBE] bg-[#FFFDF9] p-6">

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B6F5A]">
                          The Challenge
                        </p>

                        <p className="mt-4 text-sm leading-7 text-[#76665D]">
                          {project.caseStudy.problem}
                        </p>

                      </div>

                    </div>


                    {/* Solution */}
                    <div className="mt-6 rounded-[1.75rem] border border-[#D8CBBE] bg-[#E2EBDD] p-6 sm:p-7">

                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6F8067]">
                        My Approach
                      </p>

                      <p className="mt-4 max-w-4xl text-sm leading-7 text-[#5E544D]">
                        {project.caseStudy.solution}
                      </p>

                    </div>


                    {/* Features */}
                    <div className="mt-6 rounded-[1.75rem] border border-[#D8CBBE] bg-[#FFFDF9] p-6 sm:p-7">

                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B6F5A]">
                        Key Features
                      </p>

                      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                        {project.caseStudy.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3 rounded-xl bg-[#F7EFE6] px-4 py-3"
                          >

                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D6E0D1] text-xs text-[#4B3426]">
                              ✓
                            </span>

                            <span className="text-sm text-[#5E544D]">
                              {feature}
                            </span>

                          </div>
                        ))}

                      </div>

                    </div>


                    {/* Outcome */}
                    <div className="mt-6 rounded-[1.75rem] bg-[#4B3426] p-6 text-[#FFFDF9] sm:p-7">

                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6E0D1]">
                        Outcome
                      </p>

                      <p className="mt-4 max-w-4xl text-sm leading-7 text-[#E8D8C8]">
                        {project.caseStudy.outcome}
                      </p>

                    </div>


                    {/* Report inside Case Study */}
                    <div className="mt-6 flex flex-col gap-4 rounded-[1.75rem] border border-[#D8CBBE] bg-[#FFFDF9] p-6 sm:flex-row sm:items-center sm:justify-between">

                      <div>

                        <p className="text-sm font-semibold text-[#4B3426]">
                          Want to explore the complete project?
                        </p>

                        <p className="mt-1 text-xs text-[#76665D]">
                          View the detailed project report.
                        </p>

                      </div>

                      <a
                        href={project.report}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center gap-2 rounded-full bg-[#4B3426] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5E7157]"
                      >
                        Open Project Report
                        <span>↗</span>
                      </a>

                    </div>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>


        {/* ================= BOTTOM HIGHLIGHT ================= */}
        <div className="mt-12 rounded-[2rem] border border-[#D5CBBF] bg-[#E2EBDD] p-7 sm:p-9">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6F8067]">
                More than just projects
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-[#4B3426]">
                Every project is a chance to learn, build and improve.
              </h3>

            </div>

            <div className="text-4xl text-[#6F8067]">
              ✦
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;