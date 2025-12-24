export type Gender = "male" | "female" | "other";
export type Country = "india" | "usa" | "uk";

export interface FormState {
  name: string;
  email: string;
  phone: string;
  gender: Gender;
  country: Country;
  dateRange: DateRangeData;
  skills: string[]; 
}

export type DateRangeData = {
  startDate: string;
  endDate: string;
  key?: "selection" | string;
};