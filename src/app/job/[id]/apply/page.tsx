
"use clent"

import JobApplicationForm from "@/components/JobApplicationForm";

export default function ApplyJob() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center">Job Application</h1>
      <JobApplicationForm />
    </main>
  );
}
