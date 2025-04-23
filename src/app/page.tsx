import JobList from "@/components/JobList";

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-gray-200 dark:bg-slate-700">
      <h2 className="text-3xl font-bold">Flexdev</h2>
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
        Job Listing
      </h1>
      <JobList />
      
    </main>
  );
}
