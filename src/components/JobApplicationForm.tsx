"use client";

import { useForm, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface FormValues {
  fullName: string;
  email: string;
  resume: FileList | null;
  coverLetter: string;
}

const schema: yup.ObjectSchema<FormValues> = yup.object({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  resume: yup
    .mixed<FileList>()
    .test("fileRequired", "Resume is required", (value) => {
      return value instanceof FileList && value.length > 0;
    })
    .nullable() as yup.Schema<FileList | null>, // Fixes TypeScript issue
  coverLetter: yup.string().required("Cover Letter is required"),
});

export default function JobApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema) as Resolver<FormValues>,
  });

  const onSubmit = (data: FormValues) => {
    console.log("Submitted Data:", data);
    setSubmitted(true);
  };

  return (
    <>
      <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="flex justify-end">
          <button
            onClick={() => router.back()}
            className="inline-block mt-2 bg-gray-600 text-white py-2 px-4 rounded text-center"
          >
            ← Back
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4">Apply for this Job</h2>
        {submitted ? (
          <div>
            <p className="text-green-600 font-semibold">
              Application Submitted Successfully!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block font-semibold">Full Name</label>
              <input
                {...register("fullName")}
                type="text"
                className="w-full p-2 border rounded"
              />
              <p className="text-red-500">{errors.fullName?.message}</p>
            </div>

            <div>
              <label className="block font-semibold">Email Address</label>
              <input
                {...register("email")}
                type="email"
                className="w-full p-2 border rounded"
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>

            <div>
              <label className="block font-semibold">Resume (PDF only)</label>
              <input
                {...register("resume")}
                type="file"
                accept=".pdf"
                className="w-full p-2 border rounded"
              />
              <p className="text-red-500">{errors.resume?.message}</p>
            </div>

            <div>
              <label className="block font-semibold">Cover Letter</label>
              <textarea
                {...register("coverLetter")}
                className="w-full p-2 border rounded"
                rows={4}
              />
              <p className="text-red-500">{errors.coverLetter?.message}</p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Submit Application
            </button>
          </form>
        )}
      </div>
    </>
  );
}
