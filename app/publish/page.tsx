"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";

const employmentTypeOptions = [
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
  "Temporary",
];

export default function Publish() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [compensation, setCompensation] = useState("");

  const canSubmit =
    title &&
    description &&
    companyName &&
    location &&
    expirationDate &&
    employmentType &&
    compensation;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newJob = {
      title,
      description,
      company_name: companyName,
      location,
      expiration_date: expirationDate,
      employment_type: employmentType,
      compensation: Number(compensation),
    };

    console.log("Enviar nova vaga:", newJob);
    // Substitua por conexão real com a API conforme necessário
  };

  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
      <Navbar />

      <section className="py-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/40 bg-white/80 px-6 py-12 shadow-2xl shadow-slate-900/40">
          <header className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.6em] text-slate-500">
              Nova vaga
            </p>
            <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Publique sua oportunidade
            </h1>
            <p className="mt-3 text-sm text-slate-600">
              Preencha os dados abaixo para que possamos divulgar a vaga para
              talentos internacionais.
            </p>
          </header>

          <form
            aria-label="Formulário de publicação de vaga"
            className="space-y-8"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-6 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-slate-500">
                Título da vaga
                <input
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Ex: Engenheiro(a) de Dados"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-500">
                Nome da empresa
                <input
                  type="text"
                  value={companyName}
                  onChange={(event) => setCompanyName(event.target.value)}
                  placeholder="Ex: MundoTech Studio"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-500">
                Localização
                <input
                  type="text"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  placeholder="Ex: São Paulo / Remote / Global"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-500">
                Tipo de emprego
                <select
                  value={employmentType}
                  onChange={(event) => setEmploymentType(event.target.value)}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                  <option value="">Escolha um tipo</option>
                  {employmentTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-500">
                Data de expiração
                <input
                  type="date"
                  value={expirationDate}
                  onChange={(event) => setExpirationDate(event.target.value)}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-500">
                Compensação (USD)
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={compensation}
                  onChange={(event) => setCompensation(event.target.value)}
                  placeholder="Ex: 120000"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm text-slate-500">
              Descrição da vaga
              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                rows={6}
                placeholder="Fale sobre responsabilidades, requisitos e impactos esperados."
                className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-800 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
              />
            </label>

            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full rounded-full bg-gradient-to-r from-slate-900 to-slate-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:from-slate-800 hover:to-slate-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Enviar vaga
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
