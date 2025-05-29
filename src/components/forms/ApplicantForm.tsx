import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { CheckCircle, ChevronRight, ChevronLeft, CreditCard, Book, User, Info, HelpCircle, Calendar, Mail, Phone, Globe, Award, AlertCircle } from 'lucide-react';
import apiService from '../../../services/onboard';

// Define interfaces for form data (unchanged)
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
  const [animateStep, setAnimateStep] = useState(true);
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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [voucherApplied, setVoucherApplied] = useState(false);
  const [voucherMessage, setVoucherMessage] = useState('');
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Animation effect when changing steps
  useEffect(() => {
    setAnimateStep(false);
    const timer = setTimeout(() => {
      setAnimateStep(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [step]);

  // Handle input changes for personal info
  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // Handle input changes for course info
  const handleCourseInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
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
    else if (!/\S+@\S+\.\S+/.test(personalInfo.email)) newErrors.email = 'Please enter a valid email';
    if (!personalInfo.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!personalInfo.gender) newErrors.gender = 'Gender is required';
    if (!personalInfo.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!personalInfo.academicAchievement) newErrors.academicAchievement = 'Academic achievement is required';
    if (!personalInfo.ageRange) newErrors.ageRange = 'Age Range is required';
    if (!personalInfo.country) newErrors.country = 'Country is required';
    if (!personalInfo.state) newErrors.state = 'State is required';
    if (!personalInfo.howDidYouHear) newErrors.howDidYouHear = 'This field is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate course information
  const validateCourseInfo = () => {
    const newErrors: Record<string, string> = {};
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

  // Handle payment submission
  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      const payload = {
        first_name: personalInfo.firstName,
        last_name: personalInfo.lastName,
        email: personalInfo.email,
        phone_number: personalInfo.phoneNumber,
        gender: personalInfo.gender,
        date_of_birth: personalInfo.dateOfBirth,
        academic_achievement: personalInfo.academicAchievement,
        age_range: personalInfo.ageRange,
        country: personalInfo.country,
        state: personalInfo.state,
        how_did_you_hear: personalInfo.howDidYouHear,
        advisor_id: personalInfo.advisorId || null,
        course: courseInfo.course,
        cohort: courseInfo.cohort,
        class_format: courseInfo.classFormat,
        payment_plan: courseInfo.paymentPlan,
        currency: courseInfo.currency,
        voucher: courseInfo.voucher || null,
        student_policy: courseInfo.studentPolicy,
        course_fee: paymentInfo.courseFee,
        amount_to_pay: paymentInfo.amountToPay,
        balance_to_pay: paymentInfo.balanceToPay,
        transaction_fee: paymentInfo.transactionFee,
        total_amount_due: voucherApplied
          ? paymentInfo.amountToPay * 0.9 + paymentInfo.transactionFee
          : paymentInfo.totalAmountDue,
        currency_symbol: paymentInfo.currencySymbol,
      };

      const response = await apiService.submitStudentApplication(payload);
      if (response.payment_url) {
        window.location.href = response.payment_url; // Redirect to Paystack
      } else {
        router.push('/success');
      }
    } catch (error: unknown) {
      if (
        error &&
        typeof error === 'object' &&
        error !== null &&
        'message' in error &&
        typeof (error as { message?: unknown }).message === 'string'
      ) {
        setSubmissionError((error as { message: string }).message);
      } else {
        setSubmissionError('Failed to submit application');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Apply voucher handler
  const handleApplyVoucher = () => {
    if (courseInfo.voucher.trim()) {
      if (courseInfo.voucher.toLowerCase() === 'fredmind2025') {
        setVoucherApplied(true);
        setVoucherMessage('Voucher applied successfully! 10% discount');
      } else {
        setVoucherApplied(false);
        setVoucherMessage('Invalid voucher code');
      }
    } else {
      setVoucherMessage('Please enter a voucher code');
    }
  };

  // Get currency symbol based on selected currency
  const getCurrencySymbol = (currency: string) => {
    switch (currency) {
      case 'USD':
        return '$';
      case 'USDT/USDC':
        return '₮';
      case 'NGN':
      default:
        return '₦';
    }
  };

  // Format input class based on errors
  const getInputClass = (fieldName: string) => {
    return `mt-1 block w-full p-3 border ${
      errors[fieldName] ? 'border-red-300 bg-red-50' : 'border-gray-300'
    } rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all duration-300`;
  };

  // Get step status class
  const getStepStatusClass = (stepNumber: number) => {
    if (step === stepNumber) {
      return 'bg-yellow-400 text-gray-900';
    } else if (step > stepNumber) {
      return 'bg-green-500 text-white';
    }
    return 'bg-gray-200 text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-yellow-400 to-green-500 rounded-xl p-8 text-white text-center shadow-xl mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Join Fredmind School</h1>
          <p className="text-lg md:text-xl font-light opacity-90">Embark on your educational journey with us</p>
        </div>

        {/* Progress Indicator */}
        <div className="relative mb-12">
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 rounded-full -translate-y-1/2"></div>
          <div className="flex justify-between relative z-10">
            {[
              { label: 'Personal Info', icon: <User size={20} /> },
              { label: 'Course Selection', icon: <Book size={20} /> },
              { label: 'Summary', icon: <CreditCard size={20} /> }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className={`flex items-center justify-center w-14 h-14 rounded-full ${getStepStatusClass(index + 1)} shadow-lg transition-all duration-500`}
                >
                  {step > index + 1 ? <CheckCircle size={24} /> : item.icon}
                </div>
                <span className={`mt-3 text-sm font-medium ${step === index + 1 ? 'text-yellow-500' : 'text-gray-600'}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Submission Error */}
        {submissionError && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-center text-red-600 shadow-sm">
            <AlertCircle size={20} className="mr-2" />
            {submissionError}
          </div>
        )}

        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className={`bg-white shadow-xl rounded-xl p-6 md:p-8 ${animateStep ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'} transition-all duration-500`}>
            <div className="border-b border-gray-100 pb-4 mb-6">
              <h3 className="text-2xl md:text-3xl font-semibold flex items-center text-gray-800">
                <User size={24} className="mr-2 text-yellow-500" /> Personal Information
              </h3>
              <p className="text-gray-500 text-sm md:text-base mt-1">Please provide your personal details to get started</p>
            </div>
            
            <form onSubmit={handlePersonalInfoSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={personalInfo.firstName}
                    onChange={handlePersonalInfoChange}
                    className={getInputClass('firstName')}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-2 flex items-center">
                      <AlertCircle size={14} className="mr-1" /> {errors.firstName}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={personalInfo.lastName}
                    onChange={handlePersonalInfoChange}
                    className={getInputClass('lastName')}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-2 flex items-center">
                      <AlertCircle size={14} className="mr-1" /> {errors.lastName}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={personalInfo.email}
                      onChange={handlePersonalInfoChange}
                      className={`${getInputClass('email')} pl-10`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-2 flex items-center">
                      <AlertCircle  className="mr-1" /> {errors.email}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={personalInfo.phoneNumber}
                      onChange={handlePersonalInfoChange}
                      className={`${getInputClass('phoneNumber')} pl-10`}
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-xs mt-2 flex items-center">
                      <AlertCircle  className="mr-1" /> {errors.phoneNumber}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={personalInfo.gender}
                    onChange={handlePersonalInfoChange}
                    className={getInputClass('gender')}
                  >
                    <option value="" disabled>Select your gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.gender && (
                    <p className="text-red-500 text-xs mt-2 flex items-center">
                      <AlertCircle  className="mr-1" /> {errors.gender}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={personalInfo.dateOfBirth}
                      onChange={handlePersonalInfoChange}
                      className={`${getInputClass('dateOfBirth')} pl-10`}
                    />
                  </div>
                  {errors.dateOfBirth && (
                    <p className="text-red-500 text-xs mt-2 flex items-center">
                      <AlertCircle className="mr-1" /> {errors.dateOfBirth}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="academicAchievement" className="block text-sm font-medium text-gray-700 mb-2">Highest Academic Achievement</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Award size={18} className="text-gray-400" />
                    </div>
                    <select
                      id="academicAchievement"
                      name="academicAchievement"
                      value={personalInfo.academicAchievement}
                      onChange={handlePersonalInfoChange}
                      className={`${getInputClass('academicAchievement')} pl-10`}
                    >
                      <option value="" disabled>Select your highest education</option>
                      <option value="High School">High School</option>
                      <option value="Bachelor's Degree">Bachelor's Degree</option>
                      <option value="Master's Degree">Master's Degree</option>
                      <option value="PhD">PhD</option>
                    </select>
                  </div>
                  {errors.academicAchievement && (
                    <p className="text-red-500 text-xs mt-2 flex items-center">
                      <AlertCircle  className="mr-1" /> {errors.academicAchievement}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="ageRange" className="block text-sm font-medium text-gray-700 mb-2">Age Range</label>
                  <select
                    id="ageRange"
                    name="ageRange"
                    value={personalInfo.ageRange}
                    onChange={handlePersonalInfoChange}
                    className={getInputClass('ageRange')}
                  >
                    <option value="" disabled>Select your age range</option>
                    <option value="18-25">18-25</option>
                    <option value="26-35">26-35</option>
                    <option value="36-45">36-45</option>
                    <option value="46+">46+</option>
                  </select>
                  {errors.ageRange && (
                    <p className="text-red-500 text-xs mt-2 flex items-center">
                      <AlertCircle  className="mr-1" /> {errors.ageRange}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Globe size={18} className="text-gray-400" />
                    </div>
                    <select
                      id="country"
                      name="country"
                      value={personalInfo.country}
                      onChange={handlePersonalInfoChange}
                      className={`${getInputClass('country')} pl-10`}
                    >
                      <option value="" disabled>Select your country</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Ghana">Ghana</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  {errors.country && (
                    <p className="text-red-500 text-xs mt-2 flex items-center">
                      <AlertCircle  className="mr-1" /> {errors.country}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">State/Province</label>
                  <select
                    id="state"
                    name="state"
                    value={personalInfo.state}
                    onChange={handlePersonalInfoChange}
                    className={getInputClass('state')}
                  >
                    <option value="" disabled>Select your state</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Abuja">Abuja</option>
                    <option value="Rivers">Rivers</option>
                    <option value="Kaduna">Kaduna</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.state && (
                    <p className="text-red-500 text-xs mt-2 flex items-center">
                      <AlertCircle  className="mr-1" /> {errors.state}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-700 mb-2">How Did You Hear About Us?</label>
                  <select
                    id="howDidYouHear"
                    name="howDidYouHear"
                    value={personalInfo.howDidYouHear}
                    onChange={handlePersonalInfoChange}
                    className={getInputClass('howDidYouHear')}
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Friend/Referral">Friend/Referral</option>
                    <option value="Website">Website</option>
                    <option value="Advertisement">Advertisement</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.howDidYouHear && (
                    <p className="text-red-500 text-xs mt-2 flex items-center">
                      <AlertCircle  className="mr-1" /> {errors.howDidYouHear}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="advisorId" className="block text-sm font-medium text-gray-700 mb-2">
                    Advisor ID <span className="text-gray-400 text-xs">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="advisorId"
                    name="advisorId"
                    value={personalInfo.advisorId}
                    onChange={handlePersonalInfoChange}
                    className={getInputClass('advisorId')}
                    placeholder="Enter your advisor's ID if you have one"
                  />
                </div>
              </div>
              
              <div className="flex justify-end mt-8">
                <button 
                  type="submit" 
                  className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl hover:bg-yellow-500 transition-colors duration-300 flex items-center font-medium shadow-md"
                >
                  Next: Course Selection <ChevronRight size={20} className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 2: Course Selection */}
        {step === 2 && (
          <div className={`bg-white shadow-xl rounded-xl p-6 md:p-8 ${animateStep ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'} transition-all duration-500`}>
            <div className="border-b border-gray-100 pb-4 mb-6">
              <h3 className="text-2xl md:text-3xl font-semibold flex items-center text-gray-800">
                <Book size={24} className="mr-2 text-yellow-500" /> Course Selection
              </h3>
              <p className="text-gray-500 text-sm md:text-base mt-1">Select your preferred course and payment options</p>
            </div>
            
            <form onSubmit={handleCourseInfoSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">Choose Your Course</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    {[
                      { value: 'Frontend Engineering', label: 'Frontend Engineering', description: 'Learn modern web development' },
                      { value: 'Backend Engineering', label: 'Backend Engineering', description: 'Master server-side technologies' },
                      { value: 'Digital Marketing', label: 'Digital Marketing', description: 'Become a digital marketing expert' },
                      { value: 'Data Analysis', label: 'Data Analysis', description: 'Analyze and interpret complex data' }
                    ].map((option) => (
                      <div 
                        key={option.value} 
                        className={`border rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                          courseInfo.course === option.value 
                            ? 'border-yellow-400 bg-yellow-50 ring-2 ring-yellow-200' 
                            : 'border-gray-200 hover:border-yellow-300'
                        }`}
                        onClick={() => setCourseInfo(prev => ({ ...prev, course: option.value }))}
                      >
                        <div className="flex items-start">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 ${
                            courseInfo.course === option.value ? 'bg-yellow-400' : 'border-2 border-gray-300'
                          }`}>
                            {courseInfo.course === option.value && <CheckCircle size={16} className="text-gray-900" />}
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">{option.label}</div>
                            <div className="text-xs text-gray-500 mt-1">{option.description}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.course && (
                    <p className="text-red-500 text-xs mt-2 flex items-center">
                      <AlertCircle  className="mr-1" /> {errors.course}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="cohort" className="block text-sm font-medium text-gray-700 mb-2">Cohort (Start Month)</label>
                  <select
                    id="cohort"
                    name="cohort"
                    value={courseInfo.cohort}
                    onChange={handleCourseInfoChange}
                    className={getInputClass('cohort')}
                  >
                    <option value="" disabled>Select your Cohort</option>
                    <option value="January 2025">January 2025</option>
                    <option value="April 2025">April 2025</option>
                    <option value="July 2025">July 2025</option>
                    <option value="October 2025">October 2025</option>
                  </select>
                  {errors.cohort && (
                    <p className="text-red-500 text-xs mt-2 flex items-center">
                      <AlertCircle  className="mr-1" /> {errors.cohort}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Class Format</label>
                  <div className="flex space-x-4 mt-2">
                    {[
                      { value: 'Virtual Class', label: 'Virtual Class', icon: <Globe size={20} /> },
                      { value: 'Physical Class', label: 'Physical Class', icon: <Book size={20} /> }
                    ].map((option) => (
                      <div 
                        key={option.value}
                        className={`flex-1 border rounded-xl p-4 cursor-pointer transition-all duration-300 flex items-center ${
                          courseInfo.classFormat === option.value 
                            ? 'border-yellow-400 bg-yellow-50' 
                            : 'border-gray-200 hover:border-yellow-300'
                        }`}
                        onClick={() => setCourseInfo(prev => ({ ...prev, classFormat: option.value }))}
                      >
                        <input
                          type="radio"
                          id={option.value.replace(' ', '')}
                          name="classFormat"
                          value={option.value}
                          checked={courseInfo.classFormat === option.value}
                          onChange={handleCourseInfoChange}
                          className="hidden"
                        />
                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                          courseInfo.classFormat === option.value ? 'border-yellow-400' : 'border-gray-300'
                        }`}>
                          {courseInfo.classFormat === option.value && (
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          )}
                        </div>
                        <div className="ml-3 flex items-center">
                          <span className="mr-2 text-yellow-500">{option.icon}</span>
                          <span className="text-sm font-medium">{option.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.classFormat && (
                    <p className="text-red-500 text-xs mt-2 flex items-center">
                      <AlertCircle className="mr-1" /> {errors.classFormat}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment Plan</label>
                  <div className="flex space-x-4 mt-2">
                    {[
                      { value: 'Full Payment', label: 'Full Payment', icon: <CreditCard size={20} /> },
                      { value: 'Part Payment', label: 'Installments', icon: <Calendar size={20} /> }
                    ].map((option) => (
                      <div 
                        key={option.value}
                        className={`flex-1 border rounded-xl p-4 cursor-pointer transition-all duration-300 flex items-center ${
                          courseInfo.paymentPlan === option.value 
                            ? 'border-yellow-400 bg-yellow-50' 
                            : 'border-gray-200 hover:border-yellow-300'
                        }`}
                        onClick={() => setCourseInfo(prev => ({ ...prev, paymentPlan: option.value }))}
                      >
                        <input
                          type="radio"
                          id={option.value.replace(' ', '')}
                          name="paymentPlan"
                          value={option.value}
                          checked={courseInfo.paymentPlan === option.value}
                          onChange={handleCourseInfoChange}
                          className="hidden"
                        />
                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                          courseInfo.paymentPlan === option.value ? 'border-yellow-400' : 'border-gray-300'
                        }`}>
                          {courseInfo.paymentPlan === option.value && (
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          )}
                        </div>
                        <div className="ml-3 flex items-center">
                          <span className="mr-2 text-yellow-500">{option.icon}</span>
                          <span className="text-sm font-medium">{option.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.paymentPlan && (
                    <p className="text-red-500 text-xs mt-2 flex items-center">
                      <AlertCircle  className="mr-1" /> {errors.paymentPlan}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment Currency</label>
                  <div className="grid grid-cols-3 gap-3 mt-2">
                    {[
                      { value: 'NGN', label: 'NGN', icon: '₦' },
                      { value: 'USD', label: 'USD', icon: '$' },
                      { value: 'USDT/USDC', label: 'Crypto', icon: '₮' }
                    ].map((option) => (
                      <div 
                        key={option.value}
                        className={`border rounded-xl p-4 cursor-pointer transition-all duration-300 flex items-center justify-center ${
                          courseInfo.currency === option.value 
                            ? 'border-yellow-400 bg-yellow-50' 
                            : 'border-gray-200 hover:border-yellow-300'
                        }`}
                        onClick={() => setCourseInfo(prev => ({ ...prev, currency: option.value }))}
                      >
                        <input
                          type="radio"
                          id={option.value.replace('/', '-')}
                          name="currency"
                          value={option.value}
                          checked={courseInfo.currency === option.value}
                          onChange={handleCourseInfoChange}
                          className="hidden"
                        />
                        <div className="flex items-center">
                          <span className={`mr-2 font-medium ${courseInfo.currency === option.value ? 'text-yellow-500' : 'text-gray-600'}`}>
                            {option.icon}
                          </span>
                          <span className="text-sm font-medium">{option.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.currency && (
                    <p className="text-red-500 text-xs mt-2 flex items-center">
                      <AlertCircle  className="mr-1" /> {errors.currency}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <label htmlFor="voucher" className="block text-sm font-medium text-gray-700 mb-2">Have a discount voucher?</label>
                <div className="flex">
                  <input
                    type="text"
                    id="voucher"
                    name="voucher"
                    value={courseInfo.voucher}
                    onChange={handleCourseInfoChange}
                    className="flex-grow block p-3 border border-gray-300 rounded-l-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all duration-300"
                    placeholder="Enter voucher code (e.g. FREDMIND2025)"
                  />
                  <button
                    type="button"
                    className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-r-xl hover:bg-yellow-500 transition-colors duration-300 flex items-center font-medium"
                    onClick={handleApplyVoucher}
                  >
                    Apply
                  </button>
                </div>
                {voucherMessage && (
                  <p className={`text-xs mt-2 flex items-center ${voucherApplied ? 'text-green-500' : 'text-red-500'}`}>
                    {voucherApplied ? <CheckCircle  className="mr-1" /> : <AlertCircle className="mr-1" />}
                    {voucherMessage}
                  </p>
                )}
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="studentPolicy"
                    name="studentPolicy"
                    checked={courseInfo.studentPolicy}
                    onChange={handleCourseInfoChange}
                    className="mt-1 h-4 w-4 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400"
                  />
                  <label htmlFor="studentPolicy" className="ml-2 text-sm text-gray-700">
                    I agree to Fredmind School's{' '}
                    <Link href="#" className="text-yellow-600 hover:underline font-medium">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="#" className="text-yellow-600 hover:underline font-medium">
                      Privacy Policy
                    </Link>.
                  </label>
                </div>
                {errors.studentPolicy && (
                  <p className="text-red-500 text-xs mt-2 flex items-center">
                    <AlertCircle  className="mr-1" /> {errors.studentPolicy}
                  </p>
                )}
              </div>
              
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors duration-300 flex items-center font-medium shadow-sm"
                >
                  <ChevronLeft size={20} className="mr-2" /> Back
                </button>
                <button 
                  type="submit" 
                  className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl hover:bg-yellow-500 transition-colors duration-300 flex items-center font-medium shadow-md"
                >
                  Continue to Summary <ChevronRight size={20} className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: Summary */}
        {step === 3 && (
          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 ${animateStep ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'} transition-all duration-500`}>
            <div className="lg:col-span-2">
              <div className="bg-white shadow-xl rounded-xl p-6 md:p-8 mb-6">
                <div className="border-b border-gray-100 pb-4 mb-6">
                  <h3 className="text-2xl md:text-3xl font-semibold flex items-center text-gray-800">
                    <Info size={24} className="mr-2 text-yellow-500" /> Application Summary
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base mt-1">Please review your information before proceeding to payment</p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg md:text-xl font-medium text-gray-800 mb-4 flex items-center">
                      <User size={20} className="mr-2 text-yellow-500" /> Personal Information
                      <button 
                        type="button" 
                        onClick={() => setStep(1)} 
                        className="ml-auto text-sm bg-gray-100 text-gray-600 px-3 py-1.5 rounded-xl flex items-center hover:bg-gray-200 transition-colors duration-300"
                      >
                        Edit <ChevronRight  className="ml-1" />
                      </button>
                    </h4>
                    <div className="bg-gray-50 rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                      <div>
                        <p className="text-xs text-gray-500">Full Name</p>
                        <p className="font-medium text-gray-800">{`${personalInfo.firstName} ${personalInfo.lastName}`}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Email Address</p>
                        <p className="font-medium text-gray-800">{personalInfo.email}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Phone Number</p>
                        <p className="font-medium text-gray-800">{personalInfo.phoneNumber}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Gender</p>
                        <p className="font-medium text-gray-800">{personalInfo.gender}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Date of Birth</p>
                        <p className="font-medium text-gray-800">{personalInfo.dateOfBirth}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Age Range</p>
                        <p className="font-medium text-gray-800">{personalInfo.ageRange}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Education</p>
                        <p className="font-medium text-gray-800">{personalInfo.academicAchievement}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Location</p>
                        <p className="font-medium text-gray-800">{`${personalInfo.state}, ${personalInfo.country}`}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Referral Source</p>
                        <p className="font-medium text-gray-800">{personalInfo.howDidYouHear}</p>
                      </div>
                      {personalInfo.advisorId && (
                        <div>
                          <p className="text-xs text-gray-500">Advisor ID</p>
                          <p className="font-medium text-gray-800">{personalInfo.advisorId}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg md:text-xl font-medium text-gray-800 mb-4 flex items-center">
                      <Book size={20} className="mr-2 text-yellow-500" /> Course Details
                      <button 
                        type="button" 
                        onClick={() => setStep(2)} 
                        className="ml-auto text-sm bg-gray-100 text-gray-600 px-3 py-1.5 rounded-xl flex items-center hover:bg-gray-200 transition-colors duration-300"
                      >
                        Edit <ChevronRight className="ml-1" />
                      </button>
                    </h4>
                    <div className="bg-gray-50 rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                      <div>
                        <p className="text-xs text-gray-500">Selected Course</p>
                        <p className="font-medium text-gray-800">{courseInfo.course}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Cohort</p>
                        <p className="font-medium text-gray-800">{courseInfo.cohort}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Class Format</p>
                        <p className="font-medium text-gray-800">{courseInfo.classFormat}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Payment Plan</p>
                        <p className="font-medium text-gray-800">{courseInfo.paymentPlan}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Currency</p>
                        <div className="flex items-center font-medium text-gray-800">
                          <span>{getCurrencySymbol(courseInfo.currency)}</span>
                          <span className="ml-1">{courseInfo.currency}</span>
                        </div>
                      </div>
                      {courseInfo.voucher && voucherApplied && (
                        <div>
                          <p className="text-xs text-gray-500">Voucher</p>
                          <p className="font-medium flex items-center text-gray-800">
                            {courseInfo.voucher}
                            <span className="text-green-500 ml-2 flex items-center text-xs">
                              <CheckCircle  className="mr-1" /> Applied
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white shadow-xl rounded-xl overflow-hidden sticky top-6">
                <div className="bg-gradient-to-r from-yellow-400 to-green-500 p-4 text-white">
                  <h3 className="text-lg md:text-xl font-semibold flex items-center">
                    <CreditCard size={22} className="mr-2" /> Payment Summary
                  </h3>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Course Fee:</span>
                      <span className="font-medium text-gray-800">{`${paymentInfo.currencySymbol}${paymentInfo.courseFee.toLocaleString()}`}</span>
                    </div>
                    
                    {voucherApplied && (
                      <div className="flex justify-between py-2 text-green-600">
                        <span>Discount (10%):</span>
                        <span className="font-medium">-{`${paymentInfo.currencySymbol}${(paymentInfo.courseFee * 0.1).toLocaleString()}`}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Amount to Pay:</span>
                      <span className="font-medium text-gray-800">
                        {`${paymentInfo.currencySymbol}${voucherApplied 
                          ? (paymentInfo.amountToPay * 0.9).toLocaleString() 
                          : paymentInfo.amountToPay.toLocaleString()}`}
                      </span>
                    </div>
                    
                    {courseInfo.paymentPlan === 'Part Payment' && (
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Balance to Pay:</span>
                        <span className="font-medium text-gray-800">{`${paymentInfo.currencySymbol}${paymentInfo.balanceToPay.toLocaleString()}`}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between py-2 text-yellow-600">
                      <span>Amount Payable Now:</span>
                      <span className="font-medium">
                        {`${paymentInfo.currencySymbol}${voucherApplied 
                          ? (paymentInfo.amountToPay * 0.9).toLocaleString() 
                          : paymentInfo.amountToPay.toLocaleString()}`}
                      </span>
                    </div>
                    
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Transaction Fee:</span>
                      <span className="font-medium text-gray-800">{`${paymentInfo.currencySymbol}${paymentInfo.transactionFee.toLocaleString()}`}</span>
                    </div>
                    
                    <div className="border-t border-gray-200 mt-3 pt-4">
                      <div className="flex justify-between py-2 font-bold text-lg text-gray-800">
                        <span>Total Due:</span>
                        <span>
                          {`${paymentInfo.currencySymbol}${voucherApplied 
                            ? ((paymentInfo.amountToPay * 0.9) + paymentInfo.transactionFee).toLocaleString() 
                            : paymentInfo.totalAmountDue.toLocaleString()}`}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <form onSubmit={handlePaymentSubmit} className="mt-6">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl flex items-center justify-center font-medium shadow-md transition-colors duration-300 ${
                        isSubmitting
                          ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                          : 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
                      }`}
                    >
                      <CreditCard size={20} className="mr-2" />
                      {isSubmitting
                        ? 'Processing...'
                        : `Pay ${paymentInfo.currencySymbol}${voucherApplied 
                            ? ((paymentInfo.amountToPay * 0.9) + paymentInfo.transactionFee).toLocaleString() 
                            : paymentInfo.totalAmountDue.toLocaleString()}`}
                    </button>
                  </form>
                  
                  <Link 
                    href="/support" 
                    className="block w-full text-center bg-gray-100 text-gray-700 px-4 py-3 rounded-xl mt-3 hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center shadow-sm"
                  >
                    <HelpCircle size={20} className="mr-2" /> Need Help?
                  </Link>
                  
                  <div className="flex justify-between mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center mr-2 shadow-sm"
                    >
                      <ChevronLeft  className="mr-1" /> Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center shadow-sm"
                    >
                      <User className="mr-1" /> Edit All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} Fredmind School. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Apply;