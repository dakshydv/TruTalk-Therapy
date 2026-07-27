"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="w-full z-50 absolute top-0 left-0 pt-[env(safe-area-inset-top)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-4 md:py-5 flex items-center justify-between gap-6">
        <a href="/" className="shrink-0 group relative z-50">
          <span className="text-xl md:text-[1.65rem] font-serif font-bold tracking-tight leading-none">
            <span className="text-gold-600 group-hover:text-gold-500 transition-colors">
              Trutalk
            </span>{" "}
            <span className="text-chocolate-800">Therapy</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-2 text-[0.8125rem] font-semibold text-chocolate-600 rounded-full hover:text-chocolate-900 hover:bg-gold-100/70 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 lg:ml-3 px-5 py-2.5 text-[0.8125rem] font-bold text-cream-50 bg-chocolate-800 rounded-full hover:bg-chocolate-700 transition-colors duration-200 shadow-sm"
          >
            Book a Session
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative z-50 flex items-center justify-center w-11 h-11 -mr-2 rounded-full hover:bg-gold-100/60 transition-colors"
        >
          {open ? (
            <X size={22} className="text-chocolate-800" strokeWidth={2.25} />
          ) : (
            <span className="flex flex-col justify-center gap-1.5">
              <span className="block w-6 h-0.5 bg-chocolate-700 rounded-full" />
              <span className="block w-4 h-0.5 bg-chocolate-700 rounded-full self-end" />
            </span>
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-40 transition-[opacity,visibility] duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          className="absolute inset-0 bg-chocolate-900/25"
          onClick={close}
        />
        <div
          className={`absolute top-0 right-0 h-full w-[min(100%,20rem)] bg-white shadow-2xl pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col px-6 pt-24 pb-8 gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="px-4 py-3.5 text-lg font-serif font-semibold text-chocolate-800 rounded-xl hover:bg-gold-100 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={close}
              className="mt-4 mx-1 px-5 py-3.5 text-center text-base font-bold text-cream-50 bg-chocolate-800 rounded-full hover:bg-chocolate-700 transition-colors"
            >
              Book a Session
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
