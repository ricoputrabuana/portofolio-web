"use client";

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { profile } from "../data/content";

const links = [
  { label: "Tentang", href: "#about" },
  { label: "Proyek", href: "#projects" },
  { label: "Sertifikasi", href: "#certifications" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [activeHref, setActiveHref] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  // Kalau sedang di halaman utama: scroll smooth langsung ke section.
  // Kalau sedang di halaman lain (mis. project detail): navigate ke "/"
  // dulu sambil bawa hash-nya, biar HomePage yang urus scroll setelah render.
  const handleNavClick = (e, href) => {
    setActiveHref(href);
    if (isHome) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    // kalau bukan di home, biarkan <Link> navigasi normal ke `/${href}`
  };

  const handleLogoClick = (e) => {
    setActiveHref(null);
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // kalau bukan di home, biarkan <Link> navigasi normal ke "/"
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-bg/90 px-[8vw] py-5 backdrop-blur-sm">
      <Link to="/" onClick={handleLogoClick} className="font-display text-lg font-bold text-ink">
        {profile.name}
      </Link>
      <div className="hidden gap-8 sm:flex">
        {links.map((link) => {
          const isActive = isHome && activeHref === link.href;
          return (
            <Link
              key={link.href}
              to={`/${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative text-base font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-full after:origin-left after:bg-ink after:transition-transform after:duration-300 after:ease-out hover:text-ink hover:after:scale-x-100 ${
                isActive
                  ? "text-ink after:scale-x-100"
                  : "text-[#5c5c58] after:scale-x-0"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
