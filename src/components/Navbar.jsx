'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { navLinks } from '@/constants/constants';
import { styles } from '@/styles';
import { menu, close } from '@/assets';
import logo from '@/assets/logo.svg';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Fecha o menu ao clicar fora / apertar ESC
  useEffect(() => {
    if (!toggle) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setToggle(false);
    };

    const onClickOutside = (e) => {
      const dropdown = document.getElementById("mobile-nav-dropdown");
      const button = document.getElementById("mobile-nav-button");
      if (!dropdown || !button) return;

      if (!dropdown.contains(e.target) && !button.contains(e.target)) {
        setToggle(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onClickOutside);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onClickOutside);
    };
  }, [toggle]);

  const goTop = () => {
    setActive("");
    setToggle(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (title) => {
    setActive(title);
    setToggle(false);
  };

  return (
    <nav
      className={`
        ${styles.paddingX}
        w-full fixed top-0 z-20
        flex items-center
        py-4
        overflow-visible
        ${scrolled
          ? "bg-primary bg-opacity-80 backdrop-blur-md border border-white/10"
          : "bg-transparent"
        }
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* LOGO + NAME */}
        <Link
          href="/"
          className="flex items-center gap-1 min-w-0 overflow-visible"
          onClick={goTop}
        >
          <Image
            src={logo}
            alt="logo"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain shrink-0"
            priority
          />

          {/*  Mantém 'agner' (pra completar com o W do logo), mas cola no logo e NÃO corta o g */}
          <span
            className="
              text-white font-bold cursor-pointer
              text-[22px] sm:text-[28px]
              leading-[1.05]
              translate-y-[1px]
              -ml-1
              whitespace-nowrap
            "
          >
            agner Paulo
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a data-scroll-to href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <div className="sm:hidden flex items-center justify-end">
          <button
            id="mobile-nav-button"
            type="button"
            aria-label="Open menu"
            aria-expanded={toggle}
            onClick={() => setToggle((v) => !v)}
            className="p-2 rounded-lg active:scale-95 transition"
          >
            <Image
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
            />
          </button>

          {/* MOBILE DROPDOWN */}
          <div
            id="mobile-nav-dropdown"
            className={`
              ${toggle ? "flex" : "hidden"}
              p-5 black-gradient
              absolute top-[72px] right-0 mx-4 my-2
              w-[180px]
              z-50
              rounded-xl
              border border-white/10
              backdrop-blur-md
            `}
          >
            <ul className="list-none flex flex-col gap-4 w-full">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`text-[16px] font-medium cursor-pointer ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => handleNavClick(nav.title)}
                >
                  <a data-scroll-to href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
