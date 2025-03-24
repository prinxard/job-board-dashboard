import Link from "next/link";
import { Job } from "@/app/types/job";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-4">
    <img
      src={job.coverImgURL}
      alt={job.company}
      className="w-40 h-40 object-cover rounded-lg"
    />
    <div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {job.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">{job.company}</p>
      <p className="text-gray-600 dark:text-gray-300">{job.location}</p>
      <p className="text-green-600 font-semibold">{job.salary}</p>
      <Link
        href={`/job/${job.id}`}
        className="inline-block mt-2 bg-blue-600 text-white py-2 px-4 rounded text-center"
      >
        View Details
      </Link>
    </div>
  </div>
  
  );
}
