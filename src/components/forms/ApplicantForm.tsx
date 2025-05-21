import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { CheckCircle, ChevronRight, ChevronLeft, CreditCard, Book, User, Info, HelpCircle, Calendar, Mail, Phone, Globe, Award, AlertCircle } from 'lucide-react';

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
    if (!personalInfo.ageRange) newErrors.ageRange = 'Age range is required';
    if (!personalInfo.country) newErrors.country = 'Country is required';
    if (!personalInfo.state) newErrors.state = 'State is required';
    if (!personalInfo.howDidYouHear) newErrors.howDidYouHear = 'This field is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate course info
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

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Payment submitted:', { personalInfo, courseInfo, paymentInfo });
    // Simulate payment processing
    router.push('/success'); // Redirect to a success page (not implemented)
  };

  // Apply voucher handler
  const handleApplyVoucher = () => {
    if (courseInfo.voucher.trim()) {
      // Simulate voucher validation
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
      errors[fieldName] ? 'border-red-300 bg-red-50' : 'border-gray-200'
    } rounded-lg transition-all duration-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none`;
  };

  // Get step status class
  const getStepStatusClass = (stepNumber: number) => {
    if (step === stepNumber) {
      return 'bg-green-600 text-white';
    } else if (step > stepNumber) {
      return 'bg-green-500 text-white';
    }
    return 'bg-gray-200 text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="container  mx-auto px-4 py-8 max-w-5xl">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 text-white text-center shadow-lg mb-8">
          <h1 className="text-4xl font-bold mb-2">Join Fredmind School</h1>
          <p className="text-lg font-light opacity-90">Complete your admission form to start your educational journey</p>
        </div>

        {/* Progress Indicator */}
        <div className="relative mb-12">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
          <div className="flex justify-between relative z-10">
            {[
              { label: 'Personal Info', icon: <User size={18} /> },
              { label: 'Course Selection', icon: <Book size={18} /> },
              { label: 'Summary', icon: <CreditCard size={18} /> }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className={`flex items-center justify-center w-12 h-12 rounded-full ${getStepStatusClass(index + 1)} shadow-md transition-all duration-500`}
                >
                  {step > index + 1 ? <CheckCircle size={22} /> : item.icon}
                </div>
                <span className={`mt-2 text-sm font-medium ${step === index + 1 ? 'text-green-600' : 'text-gray-600'}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className={`bg-white shadow-lg rounded-xl p-6 md:p-8 ${animateStep ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'} transition-all duration-500`}>
            <div className="border-b border-gray-100 pb-4 mb-6">
              <h3 className="text-2xl font-semibold flex items-center text-gray-800">
                <User size={22} className="mr-2 text-green-500" /> Personal Information
              </h3>
              <p className="text-gray-500 text-sm mt-1">Please provide your personal details to get started</p>
            </div>
            
            <form onSubmit={handlePersonalInfoSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
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
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle size={12} className="mr-1" /> {errors.firstName}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
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
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle size={12} className="mr-1" /> {errors.lastName}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={16} className="text-gray-400" />
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
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle size={12} className="mr-1" /> {errors.email}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone size={16} className="text-gray-400" />
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
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle size={12} className="mr-1" /> {errors.phoneNumber}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
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
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle size={12} className="mr-1" /> {errors.gender}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar size={16} className="text-gray-400" />
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
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle size={12} className="mr-1" /> {errors.dateOfBirth}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="academicAchievement" className="block text-sm font-medium text-gray-700 mb-1">Highest Academic Achievement</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Award size={16} className="text-gray-400" />
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
                      <option value="Bachelor's Degree">Bachelors Degree</option>
                      <option value="Master's Degree">Masters Degree</option>
                      <option value="PhD">PhD</option>
                    </select>
                  </div>
                  {errors.academicAchievement && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle size={12} className="mr-1" /> {errors.academicAchievement}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="ageRange" className="block text-sm font-medium text-gray-700 mb-1">Age Range</label>
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
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle size={12} className="mr-1" /> {errors.ageRange}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Globe size={16} className="text-gray-400" />
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
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle size={12} className="mr-1" /> {errors.country}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State/Province</label>
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
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle size={12} className="mr-1" /> {errors.state}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-700 mb-1">How Did You Hear About Us?</label>
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
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle size={12} className="mr-1" /> {errors.howDidYouHear}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="advisorId" className="block text-sm font-medium text-gray-700 mb-1">
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
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center font-medium shadow-md"
                >
                  Next: Course Selection <ChevronRight size={18} className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 2: Course Selection */}
        {step === 2 && (
          <div className={`bg-white shadow-lg rounded-xl p-6 md:p-8 ${animateStep ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'} transition-all duration-500`}>
            <div className="border-b border-gray-100 pb-4 mb-6">
              <h3 className="text-2xl font-semibold flex items-center text-gray-800">
                <Book size={22} className="mr-2 text-green-500" /> Course Selection
              </h3>
              <p className="text-gray-500 text-sm mt-1">Select your preferred course and payment options</p>
            </div>
            
            <form onSubmit={handleCourseInfoSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Choose Your Course</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    {[
                      { value: 'Frontend Engineering', label: 'Frontend Engineering', description: 'Learn modern web development' },
                      { value: 'Backend Engineering', label: 'Backend Engineering', description: 'Master server-side technologies' },
                      { value: 'Digital Marketing', label: 'Digital Marketing', description: 'Become a digital marketing expert' },
                      { value: 'Data Analysis', label: 'Data Analysis', description: 'Analyze and interpret complex data' }
                    ].map((option) => (
                      <div 
                        key={option.value} 
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          courseInfo.course === option.value 
                            ? 'border-green-500 bg-green-50 ring-2 ring-green-200' 
                            : 'border-gray-200 hover:border-green-300'
                        }`}
                        onClick={() => setCourseInfo(prev => ({ ...prev, course: option.value }))}
                      >
                        <div className="flex items-start">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 ${
                            courseInfo.course === option.value ? 'bg-green-500' : 'border border-gray-300'
                          }`}>
                            {courseInfo.course === option.value && <CheckCircle size={16} className="text-white" />}
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
                      <AlertCircle size={12} className="mr-1" /> {errors.course}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="cohort" className="block text-sm font-medium text-gray-700 mb-1">Cohort (Start Month)</label>
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
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle size={12} className="mr-1" /> {errors.cohort}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Class Format</label>
                  <div className="flex space-x-4 mt-2">
                    {[
                      { value: 'Virtual Class', label: 'Virtual Class', icon: <Globe size={18} /> },
                      { value: 'Physical Class', label: 'Physical Class', icon: <Book size={18} /> }
                    ].map((option) => (
                      <div 
                        key={option.value}
                        className={`flex-1 border rounded-lg p-3 cursor-pointer transition-all flex items-center ${
                          courseInfo.classFormat === option.value 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-gray-200 hover:border-green-300'
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
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          courseInfo.classFormat === option.value ? 'border-green-500' : 'border-gray-300'
                        }`}>
                          {courseInfo.classFormat === option.value && (
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          )}
                        </div>
                        <div className="ml-2 flex items-center">
                          <span className="mr-2 text-green-500">{option.icon}</span>
                          <span className="text-sm">{option.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.classFormat && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle size={12} className="mr-1" /> {errors.classFormat}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Payment Plan</label>
                  <div className="flex space-x-4 mt-2">
                    {[
                      { value: 'Full Payment', label: 'Full Payment', icon: <CreditCard size={18} /> },
                      { value: 'Part Payment', label: 'Installments', icon: <Calendar size={18} /> }
                    ].map((option) => (
                      <div 
                        key={option.value}
                        className={`flex-1 border rounded-lg p-3 cursor-pointer transition-all flex items-center ${
                          courseInfo.paymentPlan === option.value 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-gray-200 hover:border-green-300'
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
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          courseInfo.paymentPlan === option.value ? 'border-green-500' : 'border-gray-300'
                        }`}>
                          {courseInfo.paymentPlan === option.value && (
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          )}
                        </div>
                        <div className="ml-2 flex items-center">
                          <span className="mr-2 text-green-500">{option.icon}</span>
                          <span className="text-sm">{option.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.paymentPlan && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle size={12} className="mr-1" /> {errors.paymentPlan}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Payment Currency</label>
                  <div className="grid grid-cols-3 gap-3 mt-2">
                    {[
                      { value: 'NGN', label: 'NGN', icon: '₦' },
                      { value: 'USD', label: 'USD', icon: '$' },
                      { value: 'USDT/USDC', label: 'Crypto', icon: '₮' }
                    ].map((option) => (
                      <div 
                        key={option.value}
                        className={`border rounded-lg p-3 cursor-pointer transition-all flex items-center justify-center ${
                          courseInfo.currency === option.value 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-gray-200 hover:border-green-300'
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
                          <span className={`mr-2 font-medium ${courseInfo.currency === option.value ? 'text-green-500' : 'text-gray-600'}`}>
                            {option.icon}
                          </span>
                          <span className="text-sm">{option.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.currency && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle size={12} className="mr-1" /> {errors.currency}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <label htmlFor="voucher" className="block text-sm font-medium text-gray-700 mb-2">Have a discount voucher?</label>
                <div className="flex">
                  <input
                    type="text"
                    id="voucher"
                    name="voucher"
                    value={courseInfo.voucher}
                    onChange={handleCourseInfoChange}
                    className="flex-grow block p-3 border border-gray-200 rounded-l-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    placeholder="Enter voucher code (e.g. FREDMIND2025)"
                  />
                  <button
                    type="button"
                    className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition-colors duration-300 flex items-center"
                    onClick={handleApplyVoucher}
                  >
                    Apply
                  </button>
                </div>
                {voucherMessage && (
                  <p className={`text-xs mt-2 flex items-center ${voucherApplied ? 'text-green-500' : 'text-red-500'}`}>
                    {voucherApplied ? <CheckCircle size={12} className="mr-1" /> : <AlertCircle size={12} className="mr-1" />}
                    {voucherMessage}
                  </p>
                )}
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="studentPolicy"
                    name="studentPolicy"
                    checked={courseInfo.studentPolicy}
                    onChange={handleCourseInfoChange}
                    className="mt-1"
                  />
                  <label htmlFor="studentPolicy" className="ml-2 text-sm text-gray-700">
                    I agree to Fredmind Schools{' '}
                    <Link href="#" className="text-green-600 hover:underline font-medium">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="#" className="text-green-600 hover:underline font-medium">
                      Privacy Policy
                    </Link>.
                  </label>
                </div>
                {errors.studentPolicy && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle size={12} className="mr-1" /> {errors.studentPolicy}
                  </p>
                )}
              </div>
              
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300 flex items-center font-medium"
                >
                  <ChevronLeft size={18} className="mr-2" /> Back
                </button>
                <button 
                  type="submit" 
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center font-medium shadow-md"
                >
                  Continue to Summary <ChevronRight size={18} className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: Summary */}
        {step === 3 && (
          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 ${animateStep ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'} transition-all duration-500`}>
            <div className="lg:col-span-2">
              <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 mb-6">
                <div className="border-b border-gray-100 pb-4 mb-6">
                  <h3 className="text-2xl font-semibold flex items-center text-gray-800">
                    <Info size={22} className="mr-2 text-green-500" /> Application Summary
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">Please review your information before proceeding to payment</p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                      <User size={18} className="mr-2 text-green-500" /> Personal Information
                      <button 
                        type="button" 
                        onClick={() => setStep(1)} 
                        className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded flex items-center hover:bg-gray-200 transition-colors"
                      >
                        Edit <ChevronRight size={12} className="ml-1" />
                      </button>
                    </h4>
                    <div className="bg-gray-50 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                      <div>
                        <p className="text-xs text-gray-500">Full Name</p>
                        <p className="font-medium">{`${personalInfo.firstName} ${personalInfo.lastName}`}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Email Address</p>
                        <p className="font-medium">{personalInfo.email}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Phone Number</p>
                        <p className="font-medium">{personalInfo.phoneNumber}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Gender</p>
                        <p className="font-medium">{personalInfo.gender}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Date of Birth</p>
                        <p className="font-medium">{personalInfo.dateOfBirth}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Age Range</p>
                        <p className="font-medium">{personalInfo.ageRange}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Education</p>
                        <p className="font-medium">{personalInfo.academicAchievement}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Location</p>
                        <p className="font-medium">{`${personalInfo.state}, ${personalInfo.country}`}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Referral Source</p>
                        <p className="font-medium">{personalInfo.howDidYouHear}</p>
                      </div>
                      {personalInfo.advisorId && (
                        <div>
                          <p className="text-xs text-gray-500">Advisor ID</p>
                          <p className="font-medium">{personalInfo.advisorId}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                      <Book size={18} className="mr-2 text-green-500" /> Course Details
                      <button 
                        type="button" 
                        onClick={() => setStep(2)} 
                        className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded flex items-center hover:bg-gray-200 transition-colors"
                      >
                        Edit <ChevronRight size={12} className="ml-1" />
                      </button>
                    </h4>
                    <div className="bg-gray-50 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                      <div>
                        <p className="text-xs text-gray-500">Selected Course</p>
                        <p className="font-medium">{courseInfo.course}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Cohort</p>
                        <p className="font-medium">{courseInfo.cohort}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Class Format</p>
                        <p className="font-medium">{courseInfo.classFormat}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Payment Plan</p>
                        <p className="font-medium">{courseInfo.paymentPlan}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Currency</p>
                        <div className="flex items-center font-medium">
                          <span>{getCurrencySymbol(courseInfo.currency)}</span>
                          <span className="ml-1">{courseInfo.currency}</span>
                        </div>
                      </div>
                      {courseInfo.voucher && voucherApplied && (
                        <div>
                          <p className="text-xs text-gray-500">Voucher</p>
                          <p className="font-medium flex items-center">
                            {courseInfo.voucher}
                            <span className="text-green-500 ml-2 flex items-center text-xs">
                              <CheckCircle size={12} className="mr-1" /> Applied
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
              <div className="bg-white shadow-lg rounded-xl overflow-hidden sticky top-6">
                <div className="bg-gradient-to-r from-green-600 to-indigo-700 p-4 text-white">
                  <h3 className="text-lg font-semibold flex items-center">
                    <CreditCard size={20} className="mr-2" /> Payment Summary
                  </h3>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Course Fee:</span>
                      <span className="font-medium">{`${paymentInfo.currencySymbol}${paymentInfo.courseFee.toLocaleString()}`}</span>
                    </div>
                    
                    {voucherApplied && (
                      <div className="flex justify-between py-2 text-green-600">
                        <span>Discount (10%):</span>
                        <span className="font-medium">-{`${paymentInfo.currencySymbol}${(paymentInfo.courseFee * 0.1).toLocaleString()}`}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Amount to Pay:</span>
                      <span className="font-medium">
                        {`${paymentInfo.currencySymbol}${voucherApplied 
                          ? (paymentInfo.amountToPay * 0.9).toLocaleString() 
                          : paymentInfo.amountToPay.toLocaleString()}`}
                      </span>
                    </div>
                    
                    {courseInfo.paymentPlan === 'Part Payment' && (
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Balance to Pay:</span>
                        <span className="font-medium">{`${paymentInfo.currencySymbol}${paymentInfo.balanceToPay.toLocaleString()}`}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between py-2 text-green-600">
                      <span>Amount Payable Now:</span>
                      <span className="font-medium">
                        {`${paymentInfo.currencySymbol}${voucherApplied 
                          ? (paymentInfo.amountToPay * 0.9).toLocaleString() 
                          : paymentInfo.amountToPay.toLocaleString()}`}
                      </span>
                    </div>
                    
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Transaction Fee:</span>
                      <span className="font-medium">{`${paymentInfo.currencySymbol}${paymentInfo.transactionFee.toLocaleString()}`}</span>
                    </div>
                    
                    <div className="border-t border-gray-200 mt-2 pt-3">
                      <div className="flex justify-between py-2 font-bold text-lg">
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
                      className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center font-medium shadow-md"
                    >
                      <CreditCard size={18} className="mr-2" />
                      Pay {`${paymentInfo.currencySymbol}${voucherApplied 
                        ? ((paymentInfo.amountToPay * 0.9) + paymentInfo.transactionFee).toLocaleString() 
                        : paymentInfo.totalAmountDue.toLocaleString()}`}
                    </button>
                  </form>
                  
                  <Link 
                    href="/support" 
                    className="block w-full text-center bg-gray-100 text-gray-700 px-4 py-3 rounded-lg mt-3 hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center"
                  >
                    <HelpCircle size={18} className="mr-2" /> Need Help?
                  </Link>
                  
                  <div className="flex justify-between mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center mr-2"
                    >
                      <ChevronLeft size={16} className="mr-1" /> Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center"
                    >
                      <User size={16} className="mr-1" /> Edit All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-8">
          &copy; {new Date().getFullYear()} Fredmind School. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Apply;