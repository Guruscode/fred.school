import { z } from 'zod';

export const applicantSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email'),
  phoneNumber: z.string().min(10, 'Phone number is required'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  education: z.enum(['High School', 'Diploma', 'Undergraduate', 'Postgraduate', 'Other']),
  fieldOfStudy: z.string().optional(),
  course: z.string().min(1, 'Select a course'),
  preferredStartDate: z.string().min(1, 'Preferred start date is required'),
  paymentMethod: z.enum(['Debit Card', 'Bank Transfer', 'Other']),
  paymentConfirmation: z.any().optional(),
  terms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms',
  }),
});

export type ApplicantFormData = z.infer<typeof applicantSchema>;
