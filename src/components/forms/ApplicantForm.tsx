"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applicantSchema, ApplicantFormData } from "@/types/applicant";
import toast from "react-hot-toast";
import { useRouter } from 'next/router';


const courses = ["Frontend Engineering", "Backend Engineering", "Digital Marketing", "Data Analysis"];
const educations = ["High School", "Diploma", "Undergraduate", "Postgraduate", "Other"];
const paymentMethods = ["Debit Card", "Bank Transfer", "Other"];

const ApplicantForm: React.FC = () => {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = useForm<ApplicantFormData>({
    resolver: zodResolver(applicantSchema),
  });

  const paymentMethod = watch("paymentMethod");
  const formData = getValues();

  const onSubmit = (data: ApplicantFormData) => {
    console.log("Submitted data:", data);
    toast.success("Form details reviewed. Proceed to confirm.");
    setStep(4); // Move to summary
  };
  
  const handleFinalSubmit = () => {
    console.log("Final submission:", formData);
  
    const isSuccess = true; // Simulate submission status
  
    if (isSuccess) {
      toast.success("Application submitted successfully!");
      setTimeout(() => {
        router.push("/dashboard/student"); // Adjust path if needed
      }, 1500); // Delay for user to see the toast
    } else {
      toast.error("Submission failed. Please try again.");
    }
  };
  
  
  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div
      className="min-h-screen flex items-end justify-center p-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl mb-32 p-8 rounded-3xl bg-white/15 backdrop-blur-lg border border-white/20 shadow-2xl animate-slide-up"
      >
        <h2 className="text-4xl font-light text-white text-center mb-8">Application Form</h2>

        {/* Progress Bar */}
        <div className="flex justify-center gap-2 mb-8">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`w-20 h-1 rounded-full transition-all duration-300 ${
                step === s ? "bg-white" : "bg-white"
              }`}
            />
          ))}
        </div>

        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-white">Full Name</label>
              <input
                {...register("fullName")}
                className="w-full p-4 mt-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName.message}</p>}
            </div>
            <div>
              <label className="block text-lg font-medium text-white">Email Address</label>
              <input
                type="email"
                {...register("email")}
                className="w-full p-4 mt-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-lg font-medium text-white">Phone Number</label>
              <input
                type="tel"
                {...register("phoneNumber")}
                className="w-full p-4 mt-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Enter your phone number"
              />
              {errors.phoneNumber && <p className="text-red-400 text-sm mt-1">{errors.phoneNumber.message}</p>}
            </div>
            <div>
              <label className="block text-lg font-medium text-white">Date of Birth</label>
              <input
                type="date"
                {...register("dateOfBirth")}
                className="w-full p-4 mt-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              {errors.dateOfBirth && <p className="text-red-400 text-sm mt-1">{errors.dateOfBirth.message}</p>}
            </div>
          </div>
        )}

        {/* Step 2: Course Selection */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-white">Highest Education</label>
              <select
                {...register("education")}
                className="w-full p-4 mt-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <option value="" className="text-white/50">
                  Select
                </option>
                {educations.map((e) => (
                  <option key={e} value={e} className="text-black">
                    {e}
                  </option>
                ))}
              </select>
              {errors.education && <p className="text-red-400 text-sm mt-1">{errors.education.message}</p>}
            </div>
            <div>
              <label className="block text-lg font-medium text-white">Choose Your Course</label>
              <select
                {...register("course")}
                className="w-full p-4 mt-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <option value="" className="text-white/50">
                  Select
                </option>
                {courses.map((c) => (
                  <option key={c} value={c} className="text-black">
                    {c}
                  </option>
                ))}
              </select>
              {errors.course && <p className="text-red-400 text-sm mt-1">{errors.course.message}</p>}
            </div>
            <div>
              <label className="block text-lg font-medium text-white">Preferred Start Date</label>
              <input
                type="date"
                {...register("preferredStartDate")}
                className="w-full p-4 mt-2 bg-white/10 border border-white/-backend rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              {errors.preferredStartDate && (
                <p className="text-red-400 text-sm mt-1">{errors.preferredStartDate.message}</p>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Payment & Terms */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-white">Payment Method</label>
              <select
                {...register("paymentMethod")}
                className="w-full p-4 mt-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <option value="" className="text-white/50">
                  Select
                </option>
                {paymentMethods.map((m) => (
                  <option key={m} value={m} className="text-black">
                    {m}
                  </option>
                ))}
              </select>
              {errors.paymentMethod && <p className="text-red-400 text-sm mt-1">{errors.paymentMethod.message}</p>}
            </div>
            {paymentMethod === "Bank Transfer" && (
              <div>
                <label className="block text-lg font-medium text-white">Upload Payment Confirmation</label>
                <input
                  type="file"
                  {...register("paymentConfirmation")}
                  className="w-full p-4 mt-2 bg-white/10 border border-white/20 rounded-lg text-white"
                />
                {errors.paymentConfirmation && (
                  <p className="text-red-400 text-sm mt-1">{errors.paymentConfirmation?.message?.toString()}</p>
                )}
              </div>
            )}
            <div>
              <label className="inline-flex items-center gap-2 text-white">
                <input
                  type="checkbox"
                  {...register("terms")}
                  className="h-5 w-5 text-white bg-white/10 border-white/20 focus:ring-white/50"
                />
                I agree to the terms and understand that tuition is non-refundable.
              </label>
              {errors.terms && <p className="text-red-400 text-sm mt-1">{errors.terms.message}</p>}
            </div>
          </div>
        )}

        {/* Step 4: Summary */}
        {step === 4 && (
          <div className="space-y-6 text-white">
            <h3 className="text-2xl font-light">Application Summary</h3>
            <div className="grid grid-cols-1 gap-4">
              <p>
                <strong>Full Name:</strong> {formData.fullName || "Not provided"}
              </p>
              <p>
                <strong>Email Address:</strong> {formData.email || "Not provided"}
              </p>
              <p>
                <strong>Phone Number:</strong> {formData.phoneNumber || "Not provided"}
              </p>
              <p>
                <strong>Date of Birth:</strong> {formData.dateOfBirth || "Not provided"}
              </p>
              <p>
                <strong>Highest Education:</strong> {formData.education || "Not provided"}
              </p>
              <p>
                <strong>Course:</strong> {formData.course || "Not provided"}
              </p>
              <p>
                <strong>Preferred Start Date:</strong> {formData.preferredStartDate || "Not provided"}
              </p>
              <p>
                <strong>Payment Method:</strong> {formData.paymentMethod || "Not provided"}
              </p>
              {formData.paymentMethod === "Bank Transfer" && (
                <p>
                  <strong>Payment Confirmation:</strong>{" "}
                  {formData.paymentConfirmation?.[0]?.name || "Not uploaded"}
                </p>
              )}
              <p>
                <strong>Terms Accepted:</strong> {formData.terms ? "Yes" : "No"}
              </p>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="text-white font-medium hover:text-white/80 transition-colors"
            >
              Back
            </button>
          )}
          <div className="space-x-4">
            {step < 3 && (
              <button
                type="button"
                onClick={nextStep}
                className="bg-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-colors"
              >
                Next
              </button>
            )}
            {step === 3 && (
              <button
                type="submit"
                className="bg-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-colors"
              >
                Review
              </button>
            )}
          {step === 4 && (
            <button
              type="button"
              onClick={handleFinalSubmit}
              className="bg-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-colors"
            >
              Confirm Submission
            </button>
          )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplicantForm;