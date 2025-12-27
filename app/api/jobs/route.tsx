import { NextResponse } from "next/server";
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

export async function GET(res: NextResponse) {
  return NextResponse.json(jobs);
}
