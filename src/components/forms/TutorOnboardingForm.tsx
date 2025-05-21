
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  fullName: z.string().min(1, { message: 'Full name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phoneNumber: z.string().min(10, { message: 'Phone number must be at least 10 digits' }),
  linkedIn: z.string().url({ message: 'Enter a valid LinkedIn URL' }),
  highestQualification: z.enum(['Diploma', 'Bachelor’s', 'Master’s', 'PhD', 'Other'], {
    errorMap: () => ({ message: 'Please select a qualification' }),
  }),
  yearsOfExperience: z.enum(['<1 Year', '1-3 Years', '3-5 Years', '>5 Years'], {
    errorMap: () => ({ message: 'Please select years of experience' }),
  }),
  certifications: z.string().optional(),
  resume: z.any(),
  areasOfExpertise: z.array(z.string()).min(1, { message: 'Select at least one area' }),
  schedule: z.string().min(1, { message: 'Schedule is required' }),
  timezone: z.string().min(1, { message: 'Timezone is required' }),
  statement: z.string().min(10, { message: 'Statement must be at least 10 characters' }),
})

type FormData = z.infer<typeof formSchema>

const expertiseOptions = [
  'Frontend Engineering',
  'Product Marketing',
  'Data Science',
  'Backend Engineering',
] as const

export default function TutorApplicationForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      areasOfExpertise: [],
    },
  })

  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (data: FormData) => {
    console.log(data)
    setSubmitted(true)
    setTimeout(() => {
      router.push('/dashboard/tutor')
    }, 1000) // Delay for user feedback
  }

  const selectedExpertise = watch('areasOfExpertise') || []

  const toggleExpertise = (area: string) => {
    const updated = selectedExpertise.includes(area)
      ? selectedExpertise.filter((a) => a !== area)
      : [...selectedExpertise, area]
    setValue('areasOfExpertise', updated)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4">
      <div className="max-w-4xl w-full bg-gray-800/95 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-8">
        <h2 className="text-4xl font-extrabold text-green-400 text-center tracking-tight">
          Tutor Application Form
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-200">Full Name</label>
              <input
                {...register('fullName')}
                className="mt-1 w-full rounded-lg border border-gray-600 bg-gray-700 text-white px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200 placeholder-gray-400"
                placeholder="John Doe"
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">Email</label>
              <input
                type="email"
                {...register('email')}
                className="mt-1 w-full rounded-lg border border-gray-600 bg-gray-700 text-white px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200 placeholder-gray-400"
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">Phone Number</label>
              <input
                type="tel"
                {...register('phoneNumber')}
                className="mt-1 w-full rounded-lg border border-gray-600 bg-gray-700 text-white px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200 placeholder-gray-400"
                placeholder="+1234567890"
              />
              {errors.phoneNumber && <p className="mt-1 text-sm text-red-500">{errors.phoneNumber.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">LinkedIn Profile</label>
              <input
                {...register('linkedIn')}
                className="mt-1 w-full rounded-lg border border-gray-600 bg-gray-700 text-white px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200 placeholder-gray-400"
                placeholder="https://linkedin.com/in/yourprofile"
              />
              {errors.linkedIn && <p className="mt-1 text-sm text-red-500">{errors.linkedIn.message}</p>}
            </div>
          </div>

          {/* Professional Background */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-200">Highest Qualification</label>
              <select
                {...register('highestQualification')}
                className="mt-1 w-full rounded-lg border border-gray-600 bg-gray-700 text-white px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
              >
                <option value="" className="bg-gray-700">
                  Select
                </option>
                {(['Diploma', 'Bachelor’s', 'Master’s', 'PhD', 'Other'] as const).map((option) => (
                  <option key={option} value={option} className="bg-gray-700">
                    {option}
                  </option>
                ))}
              </select>
              {errors.highestQualification && (
                <p className="mt-1 text-sm text-red-500">{errors.highestQualification.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">Years of Experience</label>
              <select
                {...register('yearsOfExperience')}
                className="mt-1 w-full rounded-lg border border-gray-600 bg-gray-700 text-white px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
              >
                <option value="" className="bg-gray-700">
                  Select
                </option>
                {(['<1 Year', '1-3 Years', '3-5 Years', '>5 Years'] as const).map((option) => (
                  <option key={option} value={option} className="bg-gray-700">
                    {option}
                  </option>
                ))}
              </select>
              {errors.yearsOfExperience && (
                <p className="mt-1 text-sm text-red-500">{errors.yearsOfExperience.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">Relevant Certifications</label>
              <input
                {...register('certifications')}
                className="mt-1 w-full rounded-lg border border-gray-600 bg-gray-700 text-white px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200 placeholder-gray-400"
                placeholder="e.g., AWS Certified Developer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">Upload Resume</label>
              <input
                type="file"
                {...register('resume')}
                className="mt-1 w-full rounded-lg border border-gray-600 bg-gray-700 text-white px-4 py-3 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-green-600 file:text-white hover:file:bg-green-700 transition duration-200"
              />
            </div>
          </div>

          {/* Areas of Expertise */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Areas of Expertise</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertiseOptions.map((area) => (
                <label key={area} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedExpertise.includes(area)}
                    onChange={() => toggleExpertise(area)}
                    className="h-5 w-5 text-green-500 focus:ring-green-500 border-gray-600 rounded bg-gray-700"
                  />
                  <span className="text-gray-200">{area}</span>
                </label>
              ))}
            </div>
            {errors.areasOfExpertise && (
              <p className="mt-1 text-sm text-red-500">{errors.areasOfExpertise.message}</p>
            )}
          </div>

          {/* Availability */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-200">Preferred Teaching Schedule</label>
              <input
                {...register('schedule')}
                className="mt-1 w-full rounded-lg border border-gray-600 bg-gray-700 text-white px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200 placeholder-gray-400"
                placeholder="e.g., Weekdays 9 AM - 12 PM"
              />
              {errors.schedule && <p className="mt-1 text-sm text-red-500">{errors.schedule.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">Time Zone</label>
              <input
                {...register('timezone')}
                className="mt-1 w-full rounded-lg border border-gray-600 bg-gray-700 text-white px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200 placeholder-gray-400"
                placeholder="e.g., PST, GMT+1"
              />
              {errors.timezone && <p className="mt-1 text-sm text-red-500">{errors.timezone.message}</p>}
            </div>
          </div>

          {/* Statement */}
          <div>
            <label className="block text-sm font-medium text-gray-200">
              Why do you want to join Fredmind Digital School?
            </label>
            <textarea
              {...register('statement')}
              rows={5}
              className="mt-1 w-full rounded-lg border border-gray-600 bg-gray-700 text-white px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200 placeholder-gray-400"
              placeholder="Share your motivation and goals..."
            />
            {errors.statement && <p className="mt-1 text-sm text-red-500">{errors.statement.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-6 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200"
          >
            Submit Application
          </button>

          {submitted && (
            <p className="text-green-400 text-center font-medium mt-4 animate-pulse">
              Application submitted successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  )
}