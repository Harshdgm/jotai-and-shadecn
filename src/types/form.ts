export type Gender = "male" | "female" | "other";
export type Country = "india" | "usa" | "uk";

export interface FormState {
  name: string;
  email: string;
  gender: Gender;
  country: Country;
}
