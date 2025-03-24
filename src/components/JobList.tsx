"use client";

import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import jobsData from "@/app/mock-data/jobs.json";
import { Job } from "@/app/types/job";

export default function JobList() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    setJobs(jobsData.jobItems);
  }, []);

  return (
    <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
