'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


const formSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits'),
  linkedIn: z.string().url({ message: 'Enter a valid LinkedIn URL' }),
  highestQualification: z.enum(['Diploma', 'Bachelor’s', 'Master’s', 'PhD', 'Other']),
  yearsOfExperience: z.enum(['<1 Year', '1-3 Years', '3-5 Years', '>5 Years']),
  certifications: z.string().optional(),
  resume: z.any(),
  areasOfExpertise: z.array(z.string()).min(1, 'Select at least one area'),
  schedule: z.string().min(1, 'Schedule is required'),
  timezone: z.string().min(1, 'Timezone is required'),
  statement: z.string().min(10, 'Statement must be at least 10 characters'),
})

type FormData = z.infer<typeof formSchema>

export default function TutorApplicationForm() {
  const router = useRouter()
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const [submitted] = useState(false)

  const onSubmit = (data: FormData) => {
    console.log(data)
    router.push('/dashboard/tutor')

  }

  const expertiseOptions = ['Frontend Engineering', 'Product Marketing', 'Data Science', 'Backend Engineering']
  const selectedExpertise = watch('areasOfExpertise') || []

  const toggleExpertise = (area: string) => {
    const updated = selectedExpertise.includes(area)
      ? selectedExpertise.filter(a => a !== area)
      : [...selectedExpertise, area]
    setValue('areasOfExpertise', updated)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed p-4" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503676260728-1eedeb01366d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}>
      <div className="max-w-4xl w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-8 space-y-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center">Tutor Application Form</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                {...register('fullName')}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="John Doe"
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                {...register('email')}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                {...register('phoneNumber')}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="+1234567890"
              />
              {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">LinkedIn Profile</label>
              <input
                {...register('linkedIn')}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="https://linkedin.com/in/yourprofile"
              />
              {errors.linkedIn && <p className="mt-1 text-sm text-red-600">{errors.linkedIn.message}</p>}
            </div>
          </div>

          {/* Professional Background */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Highest Qualification</label>
              <select
                {...register('highestQualification')}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Select</option>
                {['Diploma', 'Bachelor’s', 'Master’s', 'PhD', 'Other'].map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.highestQualification && <p className="mt-1 text-sm text-red-600">{errors.highestQualification.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Years of Experience</label>
              <select
                {...register('yearsOfExperience')}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Select</option>
                {['<1 Year', '1-3 Years', '3-5 Years', '>5 Years'].map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.yearsOfExperience && <p className="mt-1 text-sm text-red-600">{errors.yearsOfExperience.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Relevant Certifications</label>
              <input
                {...register('certifications')}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="e.g., AWS Certified Developer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Upload Resume</label>
              <input
                type="file"
                {...register('resume')}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
              />
            </div>
          </div>

          {/* Areas of Expertise */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Expertise</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertiseOptions.map(area => (
                <label key={area} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedExpertise.includes(area)}
                    onChange={() => toggleExpertise(area)}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <span className="text-gray-700">{area}</span>
                </label>
              ))}
            </div>
            {errors.areasOfExpertise && <p className="mt-1 text-sm text-red-600">{errors.areasOfExpertise.message}</p>}
          </div>

          {/* Availability */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Teaching Schedule</label>
              <input
                {...register('schedule')}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="e.g., Weekdays 9 AM - 12 PM"
              />
              {errors.schedule && <p className="mt-1 text-sm text-red-600">{errors.schedule.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Time Zone</label>
              <input
                {...register('timezone')}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="e.g., PST, GMT+1"
              />
              {errors.timezone && <p className="mt-1 text-sm text-red-600">{errors.timezone.message}</p>}
            </div>
          </div>

          {/* Statement */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Why do you want to join Fredmind Digital School?</label>
            <textarea
              {...register('statement')}
              rows={5}
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Share your motivation and goals..."
            />
            {errors.statement && <p className="mt-1 text-sm text-red-600">{errors.statement.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-6 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200"
          >
            Submit Application
          </button>

          {submitted && (
            <p className="text-green-600 text-center font-medium mt-4">Application submitted successfully!</p>
          )}
        </form>
      </div>
    </div>
  )
}