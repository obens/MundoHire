"use client";
import { useState } from "react";

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
};

const jobs: Job[] = [
  {
    postedAt: "2 hours ago",
    locationRestriction: "remote - United States only",
    company: "Growmark",
    title: "Remote Sales Coordinator (Agri-Products)",
    salary: "15 - 35 USD/hour",
    applyMethod: "Quick apply",
    workType: "Remote",
    region: "United States only",
    jobType: "Part-time",
  },
  {
    postedAt: "4 hours ago",
    locationRestriction: "remote - Canada only",
    company: "Pole air Aviation",
    title: "Charter Sales Executive",
    salary: "15 - 50 CAD/hour",
    applyMethod: "Quick apply",
    workType: "Remote",
    region: "Canada only",
    jobType: "Part-time",
  },
  {
    postedAt: "4 hours ago",
    locationRestriction: "remote - United States only",
    company: "TextNow",
    title: "Sales Manager",
    salary: "18 - 37 USD/hour",
    applyMethod: "Quick apply",
    workType: "Remote",
    region: "United States only",
    jobType: "Part-time",
  },
];

export default function JobList() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <div className="w-full bg-gray-100">
      <div className="w-full max-w-[80%] mx-auto my-16">
        {jobs.map((job, index) => (
          <div key={index} className=" bg-white rounded-3xl p-8 mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">{job.postedAt}</span>
              <span className="text-sm text-gray-500">
                {job.locationRestriction}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-1">{job.title}</h3>
            <p className="text-gray-700 mb-2">{job.company}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">{job.salary}</span>
              <button
                onClick={() => setSelectedJob(job)}
                className="bg-sky-800 text-white px-4 py-2 rounded-full hover:bg-sky-600 transition"
              >
                {job.applyMethod}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-8 rounded-2xl max-w-[60%] w-full shadow-xl relative">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedJob.title}</h2>
            <p className="text-gray-600 mb-1">{selectedJob.company}</p>
            <p className="text-gray-600 mb-1">{selectedJob.salary}</p>
            <p className="text-gray-600 mb-1">{selectedJob.workType}</p>
            <p className="text-gray-600 mb-1">{selectedJob.region}</p>
            <p className="text-gray-600 mb-4">{selectedJob.jobType}</p>
            <button className="w-full bg-sky-800 text-white py-2 rounded-lg hover:bg-sky-600 transition">
              Confirm Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
