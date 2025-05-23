"use client";

import { useParams } from "next/navigation";
import { Job } from "@/app/types/job";
import jobsData from "@/app/mock-data/jobs.json";
import Link from "next/link";

export default function JobDetails() {
  const params = useParams();
  const jobId = Number(params.id);

  const job: Job | undefined = jobsData.jobItems.find(
    (job) => job.id === jobId
  );

  if (!job) return <p className="text-center text-red-500">Job not found</p>;

  return (
    <>
      <div className="text-3xl font-bold p-6">
        <Link href={`/`}>Flexdev</Link>
      </div>
      <main className="p-6 max-w-4xl mx-auto ">
        <h1 className="text-4xl font-bold">{job.title}</h1>
        <p>{job.company}</p>
        <p>{job.location}</p>
        <p className="text-green-600 font-semibold">{job.salary}</p>

        <img
          src={job.coverImgURL}
          alt={job.company}
          className="object-cover w-72 h-60 my-4 rounded-lg"
        />
        <p className="mt-4">{job.description}</p>

        <div className="mt-6 flex gap-4">
          <Link
            href={job.companyURL}
            target="_blank"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Visit Company Website
          </Link>
          <Link
            href={`/job/${job.id}/apply`}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Apply Now
          </Link>
          <Link href={`/`} className="bg-gray-500 text-white py-2 px-4 rounded">
            Home
          </Link>
        </div>
      </main>
    </>
  );
}
