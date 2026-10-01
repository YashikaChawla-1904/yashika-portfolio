function Contact() {
  return (
    <section id="contact" className="bg-[#F7EFE6] px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#8B6F5A]">
            Let's Connect
          </p>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-[#4B3426] sm:text-5xl lg:text-6xl">
            Have an idea?
            <br />
            <span className="font-serif font-normal italic text-[#6F8067]">
              Let's build something.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#76665D]">
            I’m open to opportunities, collaborations, internships and
            interesting projects where I can learn, contribute and create
            meaningful digital experiences.
          </p>
        </div>

        {/* Main Contact Area */}
        <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr]">

          {/* Left - Contact Card */}
          <div className="rounded-[2.5rem] bg-[#4B3426] p-8 text-[#FFFDF9] shadow-xl sm:p-10">
            <div className="flex h-full flex-col justify-between">

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D6E0D1]">
                  Get in touch
                </p>

                <h3 className="mt-5 max-w-lg text-3xl font-semibold leading-tight sm:text-4xl">
                  Let’s start a conversation.
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-[#E8D8C8]">
                  Whether it’s a job opportunity, a project idea or simply
                  connecting with another developer, feel free to reach out.
                </p>
              </div>

              {/* Contact Details */}
              <div className="mt-12 space-y-8">

                {/* Primary Email */}
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#D6E0D1]">
                    Email
                  </p>

                  <a
                    href="mailto:yashikachawla1904@gmail.com"
                    className="mt-3 block break-all text-lg font-medium text-[#FFFDF9] transition hover:text-[#D6E0D1] sm:text-xl"
                  >
                    yashikachawla1904@gmail.com
                  </a>
                </div>

                {/* Job Email */}
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#D6E0D1]">
                    Professional Email
                  </p>

                  <a
                    href="mailto:yashikajob2025@gmail.com"
                    className="mt-3 block break-all text-lg font-medium text-[#FFFDF9] transition hover:text-[#D6E0D1] sm:text-xl"
                  >
                    yashikajob2025@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#D6E0D1]">
                    Phone
                  </p>

                  <a
                    href="tel:+917666141188"
                    className="mt-3 inline-block text-lg font-medium text-[#FFFDF9] transition hover:text-[#D6E0D1] sm:text-xl"
                  >
                    +91 76661 41188
                  </a>
                </div>

              </div>

              {/* Email CTA */}
              <a
                href="mailto:yashikajob2025@gmail.com?subject=Portfolio%20Opportunity"
                className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-[#FFFDF9] px-6 py-3 text-sm font-semibold text-[#4B3426] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D6E0D1]"
              >
                Send me an email
                <span>↗</span>
              </a>

            </div>
          </div>

          {/* Right - Links */}
          <div className="grid gap-6">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yashika-chawla-b343412b6"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[2rem] border border-[#D5CBBF] bg-[#FFFDF9] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#E2EBDD] hover:shadow-lg"
            >
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B6F5A]">
                    Professional
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-[#4B3426]">
                    LinkedIn
                  </h3>

                  <p className="mt-2 text-sm text-[#76665D]">
                    Connect with me professionally.
                  </p>
                </div>

                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4B3426] text-lg text-white transition-transform duration-300 group-hover:rotate-12">
                  ↗
                </span>

              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/YashikaChawla-1904"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[2rem] border border-[#D5CBBF] bg-[#FFFDF9] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#E8D8C8] hover:shadow-lg"
            >
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B6F5A]">
                    Development
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-[#4B3426]">
                    GitHub
                  </h3>

                  <p className="mt-2 text-sm text-[#76665D]">
                    Explore my projects and code.
                  </p>
                </div>

                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4B3426] text-lg text-white transition-transform duration-300 group-hover:rotate-12">
                  ↗
                </span>

              </div>
            </a>

            {/* Location */}
            <div className="rounded-[2rem] border border-[#D5CBBF] bg-[#E2EBDD] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6F8067]">
                Based in
              </p>

              <div className="mt-4 flex items-center justify-between">

                <div>
                  <h3 className="text-2xl font-semibold text-[#4B3426]">
                    Nashik, India
                  </h3>

                  <p className="mt-2 text-sm text-[#76665D]">
                  <p className="mt-1 text-xs text-[#76665D]">
</p>
                  </p>
                </div>

                <span className="text-3xl text-[#6F8067]">
                  ✦
                </span>

              </div>
            </div>

          </div>
        </div>

        {/* Availability Banner */}
        <div className="mt-8 flex flex-col gap-4 rounded-[2rem] border border-[#D5CBBF] bg-[#FFFDF9] p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-7">

          <div className="flex items-center gap-4">

            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6F8067] opacity-50" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#6F8067]" />
            </span>

            <div>
              <p className="text-sm font-semibold text-[#4B3426]">
                Open to opportunities
              </p>

              <p className="mt-1 text-xs text-[#76665D]">
              <p className="mt-1 text-xs text-[#76665D]">
  Full-time · Internship · Freelance · Collaboration
</p>
              </p>
            </div>

          </div>

          <a
            href="mailto:yashikajob2025@gmail.com"
            className="text-sm font-semibold text-[#6F8067] transition hover:text-[#4B3426]"
          >
            Say hello →
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;