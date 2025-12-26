import { Globe } from "lucide-react";

import Image from "next/image";
import HeaderIllustration from "../assets/header-illustration.svg";

const stats = [
  { label: "Empresas parceiras", value: "12" },
  { label: "Talentos apoiados", value: "78" },
  { label: "Alocação rápida", value: "48h" },
];

export default function Hero() {
  return (
    <section
      className="bg-slate-950 text-white"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col gap-6">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
            Novidade
          </p>
          <h1
            id="hero-title"
            className="text-4xl font-semibold leading-tight text-white sm:text-5xl"
          >
            Vagas para estrangeiros com suporte humanizado e rápido
          </h1>
          <p className="text-lg text-white/70">
            Conectamos talentos internacionais a empresas que valorizam diversidade e oferecem
            suporte jurídico, cultural e financeiro durante toda a jornada.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#job-list"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Ver vagas agora
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/70 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Fale com especialistas
            </a>
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-slate-200">
            {stats.map((stat) => (
              <span
                key={stat.label}
                className="rounded-full border border-white/20 bg-white/5 px-3 py-1 font-semibold"
              >
                {stat.value} · {stat.label}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[420px] rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-900/60">
            <Image
              src={HeaderIllustration}
              alt="Ilustração mostrando profissionais conectados a oportunidades"
              className="w-full object-contain"
              width={540}
              height={360}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
