import { useState } from "react";
import { clinicInfo } from "../data/clinicInfo";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "About us", href: "#about" },
  { label: "Appointment", href: "#appointment" },
];

function LogoMark() {
  return (
    <span className="relative block h-10 w-10">
      <span className="absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 rounded-l-full bg-[#2cbeff]" />
      <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-y-1/2 rounded-r-full bg-[#0084d4]" />
      <span className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rounded-t-full bg-[#00a4f4]" />
      <span className="absolute left-1/2 bottom-0 h-5 w-5 -translate-x-1/2 rounded-b-full bg-[#75d4ff]" />
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const phoneHref = `tel:${clinicInfo.phonePrimary.replace(/\s+/g, "")}`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#dbe7ef] bg-[#edf3f7]/95 backdrop-blur">
      <nav className="mx-auto flex h-24 w-full max-w-[1320px] items-center px-5 lg:px-6" aria-label="Primary">
        <a href="#home" className="flex items-center gap-3" aria-label={`${clinicInfo.name} Home`}>
          <LogoMark />
          <span className="text-[30px] font-bold leading-none text-[#0069ab]">{clinicInfo.name}</span>
        </a>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#d1d1d1] text-[#4f4f4f] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
        >
          {open ? "×" : "☰"}
        </button>

        <ul className="ml-14 hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-[17px] font-medium transition hover:text-[#0084d4] ${
                  link.label === "Home" ? "text-[#0069ab]" : "text-[#3d3d3d]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={phoneHref}
          className="ml-auto hidden rounded-2xl bg-gradient-to-r from-[#7fd4ff] to-[#00a4f4] px-8 py-3 text-[17px] font-semibold leading-none text-white shadow-[0_16px_28px_rgba(0,164,244,0.24)] transition hover:brightness-95 lg:inline-flex"
        >
          Call {clinicInfo.phonePrimary}
        </a>
      </nav>

      {open ? (
        <div id="mobile-nav" className="border-t border-[#d1d1d1] bg-white px-5 py-4 lg:hidden">
          <ul className="grid gap-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-[#4f4f4f] hover:bg-[#eff9ff]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={phoneHref}
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-[#00a4f4] px-4 py-2.5 text-sm font-semibold text-white"
          >
            Call {clinicInfo.phonePrimary}
          </a>
        </div>
      ) : null}
    </header>
  );
}
