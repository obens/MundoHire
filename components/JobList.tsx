"use client";
import { useMemo, useState } from "react";

export type Job = {
  postedAt: string;
  locationRestriction: string;
  company: string;
  title: string;
  salary: string;
  applyMethod: string;
  workType: string;
  region: string;
  jobType: string;
  tags: string[];
};

const jobs: Job[] = [
  {
    postedAt: "1 day ago",
    locationRestriction: "Remote - Global",
    company: "Meta",
    title: "Global Program Manager, Talent Operations",
    salary: "120 - 150 USDk/year",
    applyMethod: "Quick apply",
    workType: "Remote",
    region: "Global",
    jobType: "Full-time",
    tags: ["Leadership", "Meta Careers", "Hybrid ready"],
  },
  {
    postedAt: "2 days ago",
    locationRestriction: "Remote - United States only",
    company: "Tesla",
    title: "Autopilot Software Engineer",
    salary: "180 - 220 USDk/year",
    applyMethod: "Quick apply",
    workType: "Remote",
    region: "United States only",
    jobType: "Full-time",
    tags: ["Systems", "Robotics", "Autonomous"],
  },
  {
    postedAt: "3 days ago",
    locationRestriction: "Hybrid - United States",
    company: "Microsoft",
    title: "Principal Cloud Security Analyst",
    salary: "150 - 190 USDk/year",
    applyMethod: "Quick apply",
    workType: "Hybrid",
    region: "United States",
    jobType: "Full-time",
    tags: ["Azure", "Security", "Leadership"],
  },
  {
    postedAt: "1 week ago",
    locationRestriction: "Remote - United States",
    company: "Stripe",
    title: "Payments Integrity Specialist",
    salary: "140 - 170 USDk/year",
    applyMethod: "Quick apply",
    workType: "Remote",
    region: "United States",
    jobType: "Full-time",
    tags: ["Risk", "Payments", "Finance"],
  },
  {
    postedAt: "1 week ago",
    locationRestriction: "Hybrid - United States",
    company: "GitHub",
    title: "Senior Frontend Engineer, Codespaces",
    salary: "150 - 190 USDk/year",
    applyMethod: "Quick apply",
    workType: "Hybrid",
    region: "United States",
    jobType: "Full-time",
    tags: ["React", "Productivity", "Open source"],
  },
  {
    postedAt: "1 week ago",
    locationRestriction: "Hybrid - United States",
    company: "OpenAI",
    title: "Research Scientist, Applied AI",
    salary: "220 - 260 USDk/year",
    applyMethod: "Quick apply",
    workType: "Hybrid",
    region: "United States",
    jobType: "Full-time",
    tags: ["AI", "Research", "Innovation"],
  },
  {
    postedAt: "10 days ago",
    locationRestriction: "Hybrid - United States",
    company: "Nvidia",
    title: "Systems Engineer, AI Infrastructure",
    salary: "180 - 210 USDk/year",
    applyMethod: "Quick apply",
    workType: "Hybrid",
    region: "United States",
    jobType: "Full-time",
    tags: ["AI", "Infrastructure", "Hardware"],
  },
];

const uniqueFilters = (field: keyof Job) =>
  [...new Set(jobs.map((job) => job[field]))].sort();

export default function JobList() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesRegion = regionFilter
        ? job.region === regionFilter
        : true;
      const matchesType = typeFilter ? job.jobType === typeFilter : true;

      return matchesSearch && matchesRegion && matchesType;
    });
  }, [searchTerm, regionFilter, typeFilter]);

  const regions = uniqueFilters("region");
  const jobTypes = uniqueFilters("jobType");

  return (
    <section
      className="w-full bg-gray-100 py-16"
      aria-labelledby="job-list-title"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
              Novas oportunidades
            </p>
            <h2
              id="job-list-title"
              className="text-3xl font-bold text-slate-900 sm:text-4xl"
            >
              Vagas selecionadas para talentos internacionais
            </h2>
            <p className="text-sm text-slate-600">
              Aplicações rápidas, suporte multilíngue e empresas que já receberam
              gente do mundo todo.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-bold uppercase tracking-[0.3em] text-white transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 md:w-auto"
            >
              Publicar vaga
            </button>
          </div>
        </header>

        <div className="flex flex-col gap-4 rounded-2xl border border-white/40 bg-white px-4 py-4 shadow-lg shadow-slate-900/5 md:flex-row md:items-center">
          <label className="flex flex-1 flex-col gap-2 text-sm text-slate-500">
            Buscar vagas
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Busque por empresa, cargo ou palavra-chave"
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
            />
          </label>
          <div className="flex flex-1 flex-wrap gap-4 md:flex-nowrap">
            <label className="flex flex-1 flex-col gap-2 text-sm text-slate-500">
              Região
              <select
                value={regionFilter}
                onChange={(event) => setRegionFilter(event.target.value)}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                <option value="">Todas</option>
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-1 flex-col gap-2 text-sm text-slate-500">
              Tipo de vaga
              <select
                value={typeFilter}
                onChange={(event) => setTypeFilter(event.target.value)}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                <option value="">Todos</option>
                {jobTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <ul role="list" className="divide-y divide-slate-200 bg-white">
          {filteredJobs.map((job) => (
            <li key={job.title} className="px-4 py-5 sm:px-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span>{job.postedAt}</span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-500">
                      {job.locationRestriction}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {job.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-500">
                    {job.company}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    {job.jobType} · {job.workType}
                  </p>
                </div>
                <div className="mt-3 flex flex-col items-start gap-2 md:mt-0 md:items-end">
                  <span className="text-lg font-semibold tracking-wide text-slate-900">
                    {job.salary}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedJob(job)}
                    className="rounded-full bg-gradient-to-r from-slate-900 to-slate-700 px-5 py-2 text-sm font-semibold text-white transition hover:from-slate-800 hover:to-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 cursor-pointer"
                  >
                    {job.applyMethod}
                  </button>
                  <span className="text-xs font-semibold text-slate-400">
                    {job.region}
                  </span>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
          {filteredJobs.length === 0 && (
            <li className="px-4 py-6 text-center text-sm text-slate-500">
              Nenhuma vaga corresponde aos filtros selecionados.
            </li>
          )}
        </ul>
      </div>

      {selectedJob && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 px-4 py-10 z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative w-full max-w-2xl rounded-3xl border border-white/20 bg-white p-8 shadow-2xl shadow-slate-900/70">
            <button
              type="button"
              onClick={() => setSelectedJob(null)}
              aria-label="Fechar modal"
              className="absolute right-4 top-4 text-2xl text-slate-400 transition hover:text-slate-600 cursor-pointer"
            >
              ×
            </button>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
              Detalhes da vaga
            </p>
            <h3
              id="modal-title"
              className="mt-2 text-2xl font-bold text-slate-900"
            >
              {selectedJob.title}
            </h3>
            <p className="text-sm font-semibold text-slate-500">{selectedJob.company}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                  Salário
                </p>
                <p className="text-base font-semibold text-slate-900">
                  {selectedJob.salary}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                  Tipo
                </p>
                <p className="text-base font-semibold text-slate-900">
                  {selectedJob.jobType}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                  Região
                </p>
                <p className="text-base font-semibold text-slate-900">
                  {selectedJob.region}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              {selectedJob.workType} · {selectedJob.locationRestriction}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              {selectedJob.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-500"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button className="mt-8 w-full rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-slate-800 cursor-pointer">
              Confirm Apply
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
