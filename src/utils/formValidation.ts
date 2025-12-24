import { FormState } from "@/types/form";

export interface ValidationErrors {
  name: string;
  email: string;
  phone: string;
  skills: string;
}

export function validateForm(data: FormState): ValidationErrors {
  return {
    name:/^[a-zA-Z\s]+$/.test(data.name.trim()) ? "": "Name is required" ,
    email:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email.trim()) ? "" : "Email is required" ,
    phone:/^\d{10}$/.test(data.phone.trim()) && !/^0{10}$/.test(data.phone.trim())
    ? ""
    : data.phone.trim() === ""
    ? "Phone No. is required"
    : "Phone No. cannot be all zeros",
    skills: data.skills.length === 0 ? "At least one skill is required" : "",
  };
}

export function isFormValid(errors: ValidationErrors): boolean {
  return Object.values(errors).every((error) => error === "");
}
