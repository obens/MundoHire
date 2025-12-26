 "use client";

import { useState } from "react";

const navLinks = [
  { label: "Busca emprego", href: "#busca-emprego" },
  { label: "Empregador", href: "#empregador" },
  { label: "Preço", href: "#preco" },
  { label: "Cadastrar Vagas", href: "#cadastrar-vagas" },
];

const actionButtons = [
  { label: "Entrar", variant: "ghost" },
  { label: "Logar", variant: "outline" },
  { label: "+ Publicar Vagas", variant: "secondary" },
  { label: "Cadastrar", variant: "primary" },
];

const buttonStyles: Record<string, string> = {
  ghost:
    "text-sm font-semibold text-slate-600 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 flex cursor-pointer items-center justify-center",
  outline:
    "cursor-pointer text-sm font-semibold text-slate-600 border border-slate-200 rounded-full px-4 py-2 hover:border-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 transition",
  secondary:
    "cursor-pointer text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition",
  primary:
    "cursor-pointer text-sm font-semibold text-white bg-gradient-to-r from-slate-900 to-slate-700 rounded-full px-5 py-2 shadow-lg shadow-slate-900/30 hover:from-slate-800 hover:to-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition",
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-slate-200 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.15),_transparent_55%)]/80 backdrop-blur"
      aria-label="Principal"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight text-slate-900">
            MUNDOHIRE
          </span>
          <span className="text-xs font-medium text-slate-400">
            Conectando talentos
          </span>
        </div>

        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-slate-900 focus-visible:text-slate-900 focus-visible:outline-offset-2"
              role="menuitem"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {actionButtons.map((action) => (
            <button
              key={action.label}
              type="button"
              className={buttonStyles[action.variant]}
            >
              {action.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 cursor-pointer md:hidden"
        >
          <span className="sr-only">
            {mobileOpen ? "Fechar menu" : "Abrir menu"}
          </span>
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-slate-700 transition ${
                mobileOpen ? "rotate-45 origin-center" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 bg-slate-700 transition ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-5 bg-slate-700 transition ${
                mobileOpen ? "-rotate-45 origin-center" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <div
        id="primary-navigation"
        role="menu"
        className={`mx-auto max-w-6xl px-6 transition-[max-height] duration-300 ease-in-out md:hidden ${
          mobileOpen ? "max-h-80" : "max-h-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col gap-3 border-y border-slate-100 py-4 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-2 py-1 transition hover:bg-slate-50 focus-visible:bg-slate-50"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 py-4">
          {actionButtons.map((action) => (
            <button
              key={action.label}
              type="button"
              className={buttonStyles[action.variant]}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
