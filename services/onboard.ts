import axios, { AxiosError } from 'axios';
import { API_BASE_URL } from "../utils/constant"

interface StudentApplicationData {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  gender: string;
  date_of_birth: string;
  academic_achievement: string;
  age_range: string;
  country: string;
  state: string;
  how_did_you_hear: string;
  advisor_id: string | null;
  course: string;
  cohort: string;
  class_format: string;
  payment_plan: string;
  currency: string;
  voucher: string | null;
  student_policy: boolean;
  course_fee: number;
  amount_to_pay: number;
  balance_to_pay: number;
  transaction_fee: number;
  total_amount_due: number;
  currency_symbol: string;
}

interface ApiResponse {
  message: string;
  data: any;
  payment_url?: string;
}

const apiService = {
  async submitStudentApplication(data: StudentApplicationData): Promise<ApiResponse> {
    try {
      const response = await axios.post<ApiResponse>(`${API_BASE_URL}/student-applications`, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data.error || 'Failed to submit application');
      }
      throw new Error('Network error occurred');
    }
  },
};

export default apiService;
