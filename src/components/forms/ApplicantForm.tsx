import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

// Define interfaces for form data
interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  dateOfBirth: string;
  academicAchievement: string;
  ageRange: string;
  country: string;
  state: string;
  howDidYouHear: string;
  advisorId: string;
}

interface CourseInfo {
  course: string;
  cohort: string;
  classFormat: string;
  paymentPlan: string;
  currency: string;
  voucher: string;
  studentPolicy: boolean;
}

interface PaymentInfo {
  courseFee: number;
  amountToPay: number;
  balanceToPay: number;
  transactionFee: number;
  totalAmountDue: number;
  currencySymbol: string;
}

const Apply: React.FC = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    dateOfBirth: '',
    academicAchievement: '',
    ageRange: '',
    country: '',
    state: '',
    howDidYouHear: '',
    advisorId: '',
  });
  const [courseInfo, setCourseInfo] = useState<CourseInfo>({
    course: '',
    cohort: '',
    classFormat: 'Virtual Class',
    paymentPlan: 'Full Payment',
    currency: 'NGN',
    voucher: '',
    studentPolicy: false,
  });
  const [paymentInfo] = useState<PaymentInfo>({
    courseFee: 500000,
    amountToPay: 500000,
    balanceToPay: 0,
    transactionFee: 5000,
    totalAmountDue: 505000,
    currencySymbol: '₦',
  });
  const [errors, setErrors] = useState<Partial<PersonalInfo & CourseInfo>>({});

  // Handle input changes for personal info
  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // Handle input changes for course info
  const handleCourseInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setCourseInfo((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // Validate personal info
  const validatePersonalInfo = () => {
    const newErrors: Partial<PersonalInfo> = {};
    if (!personalInfo.firstName) newErrors.firstName = 'First name is required';
    if (!personalInfo.lastName) newErrors.lastName = 'Last name is required';
    if (!personalInfo.email) newErrors.email = 'Email is required';
    if (!personalInfo.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!personalInfo.gender) newErrors.gender = 'Gender is required';
    if (!personalInfo.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!personalInfo.academicAchievement) newErrors.academicAchievement = 'Academic achievement is required';
    if (!personalInfo.ageRange) newErrors.ageRange = 'Age range is required';
    if (!personalInfo.country) newErrors.country = 'Country is required';
    if (!personalInfo.state) newErrors.state = 'State is required';
    if (!personalInfo.howDidYouHear) newErrors.howDidYouHear = 'This field is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate course info
  const validateCourseInfo = () => {
    const newErrors: Partial<CourseInfo> = {};
    if (!courseInfo.course) newErrors.course = 'Course is required';
    if (!courseInfo.cohort) newErrors.cohort = 'Cohort is required';
    if (!courseInfo.classFormat) newErrors.classFormat = 'Class format is required';
    if (!courseInfo.paymentPlan) newErrors.paymentPlan = 'Payment plan is required';
    if (!courseInfo.currency) newErrors.currency = 'Currency is required';
    if (!courseInfo.studentPolicy) newErrors.studentPolicy = 'You must agree to the policies';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submissions
  const handlePersonalInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validatePersonalInfo()) {
      setStep(2);
    }
  };

  const handleCourseInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateCourseInfo()) {
      setStep(3);
    }
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Payment submitted:', { personalInfo, courseInfo, paymentInfo });
    // Simulate payment processing
    router.push('/success'); // Redirect to a success page (not implemented)
  };

  return (
    <div className="container mx-auto my-8 px-4 font-inter">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-8 text-white text-center">
        <h1 className="text-3xl font-bold">Join Fredmind School</h1>
        <p className="mt-2">Complete your admission form to start your journey with us. It only takes a few minutes!</p>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-between my-6">
        {['Personal Info', 'Course Selection', 'Summary'].map((label, index) => (
          <div
            key={index}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
              step === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
            }`}
          >
            <i className={`fas ${index === 0 ? 'fa-user' : index === 1 ? 'fa-book' : 'fa-file-invoice'}`}></i>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Step 1: Personal Information */}
      {step === 1 && (
        <div className="bg-white shadow-lg rounded-lg p-6 fade-in">
          <h3 className="text-xl font-semibold mb-4">
            <i className="fas fa-user-edit mr-2"></i> Personal Information
          </h3>
          <form onSubmit={handlePersonalInfoSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={personalInfo.firstName}
                  onChange={handlePersonalInfoChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter first name"
                  required
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={personalInfo.lastName}
                  onChange={handlePersonalInfoChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter last name"
                  required
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={personalInfo.email}
                  onChange={handlePersonalInfoChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter email"
                  required
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={personalInfo.phoneNumber}
                  onChange={handlePersonalInfoChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter phone number"
                  required
                />
                {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
              </div>
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={personalInfo.gender}
                  onChange={handlePersonalInfoChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="" disabled>Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
              </div>
              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={personalInfo.dateOfBirth}
                  onChange={handlePersonalInfoChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
                {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>}
              </div>
              <div>
                <label htmlFor="academicAchievement" className="block text-sm font-medium text-gray-700">Highest Academic Achievement</label>
                <select
                  id="academicAchievement"
                  name="academicAchievement"
                  value={personalInfo.academicAchievement}
                  onChange={handlePersonalInfoChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="" disabled>Select achievement</option>
                  <option value="High School">High School</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree">Master's Degree</option>
                  <option value="PhD">PhD</option>
                </select>
                {errors.academicAchievement && <p className="text-red-500 text-sm">{errors.academicAchievement}</p>}
              </div>
              <div>
                <label htmlFor="ageRange" className="block text-sm font-medium text-gray-700">Age Range</label>
                <select
                  id="ageRange"
                  name="ageRange"
                  value={personalInfo.ageRange}
                  onChange={handlePersonalInfoChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="" disabled>Select age range</option>
                  <option value="18-25">18-25</option>
                  <option value="26-35">26-35</option>
                  <option value="36-45">36-45</option>
                  <option value="46+">46+</option>
                </select>
                {errors.ageRange && <p className="text-red-500 text-sm">{errors.ageRange}</p>}
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <select
                  id="country"
                  name="country"
                  value={personalInfo.country}
                  onChange={handlePersonalInfoChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="" disabled>Select country</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Ghana">Ghana</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Other">Other</option>
                </select>
                {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                <select
                  id="state"
                  name="state"
                  value={personalInfo.state}
                  onChange={handlePersonalInfoChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="" disabled>Select your state</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
                  <option value="Rivers">Rivers</option>
                  <option value="Kaduna">Kaduna</option>
                  <option value="Other">Other</option>
                </select>
                {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
              </div>
              <div>
                <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-700">How Did You Hear About Us?</label>
                <select
                  id="howDidYouHear"
                  name="howDidYouHear"
                  value={personalInfo.howDidYouHear}
                  onChange={handlePersonalInfoChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="" disabled>Select an option</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Friend/Referral">Friend/Referral</option>
                  <option value="Website">Website</option>
                  <option value="Advertisement">Advertisement</option>
                  <option value="Other">Other</option>
                </select>
                {errors.howDidYouHear && <p className="text-red-500 text-sm">{errors.howDidYouHear}</p>}
              </div>
              <div>
                <label htmlFor="advisorId" className="block text-sm font-medium text-gray-700">Advisor ID (Optional)</label>
                <input
                  type="text"
                  id="advisorId"
                  name="advisorId"
                  value={personalInfo.advisorId}
                  onChange={handlePersonalInfoChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter Advisor ID"
                />
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Next: Course Selection <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Step 2: Course Selection */}
      {step === 2 && (
        <div className="bg-white shadow-lg rounded-lg p-6 fade-in">
          <h3 className="text-xl font-semibold mb-4">
            <i className="fas fa-book mr-2"></i> Course Selection
          </h3>
          <form onSubmit={handleCourseInfoSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700">Choose Your Course</label>
                <select
                  id="course"
                  name="course"
                  value={courseInfo.course}
                  onChange={handleCourseInfoChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="" disabled>Select course</option>
                  <option value="Frontend Engineering">Frontend Engineering</option>
                  <option value="Backend Engineering">Backend Engineering</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Data Analysis">Data Analysis</option>
                </select>
                {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}
              </div>
              <div>
                <label htmlFor="cohort" className="block text-sm font-medium text-gray-700">Cohort (Start Month)</label>
                <select
                  id="cohort"
                  name="cohort"
                  value={courseInfo.cohort}
                  onChange={handleCourseInfoChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="" disabled>Select your Cohort</option>
                  <option value="January 2025">January 2025</option>
                  <option value="April 2025">April 2025</option>
                  <option value="July 2025">July 2025</option>
                  <option value="October 2025">October 2025</option>
                </select>
                {errors.cohort && <p className="text-red-500 text-sm">{errors.cohort}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Class Format</label>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="virtualClass"
                      name="classFormat"
                      value="Virtual Class"
                      checked={courseInfo.classFormat === 'Virtual Class'}
                      onChange={handleCourseInfoChange}
                      className="mr-2"
                      required
                    />
                    <label htmlFor="virtualClass" className="flex items-center">
                      <i className="fas fa-laptop mr-1"></i> Virtual Class
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="physicalClass"
                      name="classFormat"
                      value="Physical Class"
                      checked={courseInfo.classFormat === 'Physical Class'}
                      onChange={handleCourseInfoChange}
                      className="mr-2"
                    />
                    <label htmlFor="physicalClass" className="flex items-center">
                      <i className="fas fa-school mr-1"></i> Physical Class
                    </label>
                  </div>
                </div>
                {errors.classFormat && <p className="text-red-500 text-sm">{errors.classFormat}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Payment Plan</label>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="fullPayment"
                      name="paymentPlan"
                      value="Full Payment"
                      checked={courseInfo.paymentPlan === 'Full Payment'}
                      onChange={handleCourseInfoChange}
                      className="mr-2"
                      required
                    />
                    <label htmlFor="fullPayment" className="flex items-center">
                      <i className="fas fa-money-bill-wave mr-1"></i> Full Payment
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="partPayment"
                      name="paymentPlan"
                      value="Part Payment"
                      checked={courseInfo.paymentPlan === 'Part Payment'}
                      onChange={handleCourseInfoChange}
                      className="mr-2"
                    />
                    <label htmlFor="partPayment" className="flex items-center">
                      <i className="fas fa-calendar-alt mr-1"></i> Installments
                    </label>
                  </div>
                </div>
                {errors.paymentPlan && <p className="text-red-500 text-sm">{errors.paymentPlan}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Payment Currency</label>
                <div className="flex space-x-4 flex-wrap">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="ngn"
                      name="currency"
                      value="NGN"
                      checked={courseInfo.currency === 'NGN'}
                      onChange={handleCourseInfoChange}
                      className="mr-2"
                      required
                    />
                    <label htmlFor="ngn" className="flex items-center">
                      <i className="fas fa-naira-sign mr-1"></i> NGN
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="usd"
                      name="currency"
                      value="USD"
                      checked={courseInfo.currency === 'USD'}
                      onChange={handleCourseInfoChange}
                      className="mr-2"
                    />
                    <label htmlFor="usd" className="flex items-center">
                      <i className="fas fa-dollar-sign mr-1"></i> USD
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="crypto"
                      name="currency"
                      value="USDT/USDC"
                      checked={courseInfo.currency === 'USDT/USDC'}
                      onChange={handleCourseInfoChange}
                      className="mr-2"
                    />
                    <label htmlFor="crypto" className="flex items-center">
                      <i className="fab fa-bitcoin mr-1"></i> Crypto
                    </label>
                  </div>
                </div>
                {errors.currency && <p className="text-red-500 text-sm">{errors.currency}</p>}
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="voucher" className="block text-sm font-medium text-gray-700">Have a discount voucher?</label>
              <div className="flex">
                <input
                  type="text"
                  id="voucher"
                  name="voucher"
                  value={courseInfo.voucher}
                  onChange={handleCourseInfoChange}
                  className="block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter voucher code"
                />
                <button
                  type="button"
                  className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  onClick={() => console.log('Voucher applied:', courseInfo.voucher)}
                >
                  <i className="fas fa-ticket-alt mr-1"></i> Apply
                </button>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                id="studentPolicy"
                name="studentPolicy"
                checked={courseInfo.studentPolicy}
                onChange={handleCourseInfoChange}
                className="mr-2"
                required
              />
              <label htmlFor="studentPolicy" className="text-sm text-gray-700">
                I agree to Fredmind School's{' '}
                <Link href="#" className="text-blue-500 hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="#" className="text-blue-500 hover:underline">
                  Privacy Policy
                </Link>.
              </label>
            </div>
            {errors.studentPolicy && <p className="text-red-500 text-sm">{errors.studentPolicy}</p>}
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                <i className="fas fa-arrow-left mr-2"></i> Back
              </button>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Continue to Summary <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Step 3: Summary */}
      {step === 3 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6 fade-in">
            <h3 className="text-xl font-semibold mb-4">
              <i className="fas fa-user mr-2"></i> Personal Information
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Full Name:</span>
                <span>{`${personalInfo.firstName} ${personalInfo.lastName}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Gender:</span>
                <span>{personalInfo.gender || 'Not provided'}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Date of Birth:</span>
                <span>{personalInfo.dateOfBirth || 'Not provided'}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">How Did You Hear About Us:</span>
                <span>{personalInfo.howDidYouHear || 'Not provided'}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Email:</span>
                <span>{personalInfo.email || 'Not provided'}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Phone Number:</span>
                <span>{personalInfo.phoneNumber || 'Not provided'}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Highest Education:</span>
                <span>{personalInfo.academicAchievement || 'Not provided'}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Age Range:</span>
                <span>{personalInfo.ageRange || 'Not provided'}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Location:</span>
                <span>{`${personalInfo.state}, ${personalInfo.country}` || 'Not provided'}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Advisor ID:</span>
                <span>{personalInfo.advisorId || 'Not provided'}</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mt-6 mb-4">
              <i className="fas fa-book mr-2"></i> Course Selection
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Course:</span>
                <span>{courseInfo.course || 'Not selected'}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Cohort:</span>
                <span>{courseInfo.cohort || 'Not selected'}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Class Format:</span>
                <span>{courseInfo.classFormat || 'Not selected'}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Payment Plan:</span>
                <span>{courseInfo.paymentPlan || 'Not selected'}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Currency:</span>
                <span>{courseInfo.currency || 'Not selected'}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Voucher Code:</span>
                <span>{courseInfo.voucher || 'Not applied'}</span>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 fade-in">
            <h3 className="text-xl font-semibold mb-4">
              <i className="fas fa-file-invoice mr-2"></i> Payment Summary
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">Course Fee:</span>
                <span>{`${paymentInfo.currencySymbol}${paymentInfo.courseFee.toLocaleString()}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Amount to Pay:</span>
                <span>{`${paymentInfo.currencySymbol}${paymentInfo.amountToPay.toLocaleString()}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Balance to Pay:</span>
                <span>{`${paymentInfo.currencySymbol}${paymentInfo.balanceToPay.toLocaleString()}`}</span>
              </div>
              <div className="flex justify-between text-blue-500">
                <span className="font-medium">Amount Payable Now:</span>
                <span>{`${paymentInfo.currencySymbol}${paymentInfo.amountToPay.toLocaleString()}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Transaction Fee:</span>
                <span>{`${paymentInfo.currencySymbol}${paymentInfo.transactionFee.toLocaleString()}`}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total Amount Due:</span>
                <span>{`${paymentInfo.currencySymbol}${paymentInfo.totalAmountDue.toLocaleString()}`}</span>
              </div>
            </div>
            <form onSubmit={handlePaymentSubmit} className="mt-4">
              <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                <i className="fas fa-lock mr-2"></i> Pay {`${paymentInfo.currencySymbol}${paymentInfo.totalAmountDue.toLocaleString()}`}
              </button>
            </form>
            <Link href="/support" className="block w-full text-center bg-gray-200 text-gray-700 px-4 py-2 rounded-md mt-3 hover:bg-gray-300">
              <i className="fas fa-headset mr-2"></i> Need Help?
            </Link>
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                <i className="fas fa-arrow-left mr-2"></i> Back
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                <i className="fas fa-edit mr-2"></i> Edit Info
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apply;