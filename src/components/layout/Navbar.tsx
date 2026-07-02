export default function Navbar() {
  const links = [
    "Home",
    "About",
    "Services",
    "Employers",
    "Job Seekers",
    "Resources",
    "Contact",
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

        {/* Logo */}

        <a href="#" className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-xl font-bold text-yellow-500 shadow-lg">
P
</div>

          <div>

            <h1 className="text-3xl font-black tracking-tight">
              Peace
              <span className="text-yellow-600"> Careers</span>
            </h1>

            <p className="text-xs uppercase tracking-[0.4em] text-yellow-600">
              Global Recruitment
            </p>

          </div>

        </a>

        {/* Navigation */}

        <nav className="hidden items-center gap-8 lg:flex">

          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="font-medium text-gray-700 transition hover:text-yellow-600"
            >
              {link}
            </a>
          ))}

        </nav>

        {/* CTA */}

        <button className="rounded-xl bg-black px-6 py-3 font-semibold text-white transition duration-300 hover:bg-yellow-500 hover:text-black">
          Book Consultation
        </button>

      </div>
    </header>
  );
}