import { Job } from "@/app/types/job";
import jobsData from "@/app/mock-data/jobs.json";
import Link from "next/link";

interface JobDetailsProps {
  params: { id: string };
}

export default function JobDetails({ params }: JobDetailsProps) {
  const job: Job | undefined = jobsData.jobItems.find(
    (job) => job.id.toString() === params.id
  );

  if (!job) return <p className="text-center text-red-500">Job not found</p>;

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold">{job.title}</h1>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-600">{job.location}</p>
      <p className="text-green-600 font-semibold">{job.salary}</p>

      <img
        src={job.coverImgURL}
        alt={job.company}
        className="w-full h-60 object-cover my-4 rounded-lg"
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
        <Link
          href={`/`}
          className="bg-gray-500 text-white py-2 px-4 rounded"
        >
          Home
        </Link>
      </div>
    </main>
  );
}
