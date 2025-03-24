"use client";

import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import SearchBar from "./SearchBar";
import jobsData from "@/app/mock-data/jobs.json";
import { Job } from "@/app/types/job";

export default function JobList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [query, setQuery] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [salary, setSalary] = useState<string>("");

  useEffect(() => {
    setJobs(jobsData.jobItems);
    setFilteredJobs(jobsData.jobItems);
  }, []);

  useEffect(() => {
    let filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(query.toLowerCase())
    );

    if (location) {
      filtered = filtered.filter((job) =>
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (salary) {
        filtered = filtered.filter((job) => {
          const numericSalary = parseInt(job.salary.replace(/\D/g, ""), 10) || 0;
          return numericSalary >= parseInt(salary, 10);
        });
      }

    setFilteredJobs(filtered);
  }, [query, location, salary, jobs]);

  return (
    <div className="mt-6">
      <SearchBar setQuery={setQuery} setLocation={setLocation} setSalary={setSalary} />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
