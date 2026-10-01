import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6 sm:py-5">

      {/* ================= MAIN NAVBAR ================= */}
      <div className="mx-auto max-w-6xl">

        <div className="relative rounded-[1.5rem] border border-[#E5D7C9] bg-[#FFFDF9]/90 px-5 py-3 shadow-[0_8px_30px_rgba(75,52,38,0.06)] backdrop-blur-xl sm:rounded-full sm:px-6">

          <div className="flex items-center justify-between">

            {/* ================= BRAND ================= */}
            <a
              href="#home"
              onClick={handleNavClick}
              className="group flex items-center gap-3"
            >
              {/* Small Logo */}
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4B3426] text-sm font-bold text-[#FFFDF9] shadow-sm transition-all duration-300 group-hover:rotate-3 group-hover:bg-[#5E7157]">
                FD
              </span>

              {/* Brand Text */}
              <div className="hidden sm:block">
                <p className="text-sm font-bold tracking-[0.12em] text-[#4B3426]">
                  FULL STACK
                </p>

                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#8B6F5A]">
                  Developer
                </p>
              </div>

              {/* Mobile Brand */}
              <div className="sm:hidden">
                <p className="text-sm font-bold tracking-wide text-[#4B3426]">
                  Full Stack
                </p>

                <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8B6F5A]">
                  Developer
                </p>
              </div>
            </a>


            {/* ================= DESKTOP NAVIGATION ================= */}
            <div className="hidden items-center gap-1 md:flex">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative rounded-full px-3.5 py-2.5 text-[13px] font-medium text-[#6B4A3A] transition-all duration-300 hover:bg-[#F2E9DE] hover:text-[#4B3426]"
                >
                  {item.name}

                  {/* Hover Line */}
                  <span className="absolute bottom-1.5 left-1/2 h-[1.5px] w-0 -translate-x-1/2 bg-[#6F8067] transition-all duration-300 group-hover:w-5" />
                </a>
              ))}

              {/* Let's Talk */}
              <a
                href="#contact"
                className="ml-2 inline-flex items-center gap-2 rounded-full bg-[#4B3426] px-5 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5E7157] hover:shadow-md"
              >
                Let's Talk
                <span className="text-sm">↗</span>
              </a>

            </div>


            {/* ================= MOBILE MENU BUTTON ================= */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DCCFC1] bg-[#F7EFE6] text-[#4B3426] transition-all duration-300 hover:bg-[#E2EBDD] md:hidden"
            >
              <div className="flex w-5 flex-col gap-1.5">

                <span
                  className={`block h-[2px] w-5 rounded-full bg-[#4B3426] transition-all duration-300 ${
                    isOpen ? "translate-y-[4px] rotate-45" : ""
                  }`}
                />

                <span
                  className={`block h-[2px] w-5 rounded-full bg-[#4B3426] transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />

                <span
                  className={`block h-[2px] w-5 rounded-full bg-[#4B3426] transition-all duration-300 ${
                    isOpen ? "-translate-y-[4px] -rotate-45" : ""
                  }`}
                />

              </div>
            </button>

          </div>


          {/* ================= MOBILE MENU ================= */}
          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${
              isOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-4 border-t border-[#E8D8C8] pt-3">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-[#6B4A3A] transition-all duration-200 hover:bg-[#F2E9DE] hover:text-[#4B3426]"
                >
                  <span>{item.name}</span>
                  <span className="text-[#8B6F5A]">→</span>
                </a>
              ))}

              {/* Mobile Let's Talk */}
              <a
                href="#contact"
                onClick={handleNavClick}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#4B3426] px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#5E7157]"
              >
                Let's Talk
                <span>↗</span>
              </a>

            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;