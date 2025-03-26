import JobList from "@/components/JobList";

export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
        Job Listings
      </h1>
      <JobList />
    </main>
  );
}
