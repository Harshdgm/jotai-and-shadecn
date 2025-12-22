import { FormState } from "@/types/form";

export interface ValidationErrors {
  name: string;
  email: string;
}

export function validateForm(data: FormState): ValidationErrors {
  return {
    name: data.name.trim() === "" ? "Name is required" : "",
    email: data.email.trim() === "" ? "Email is required" : "",
  };
}

export function isFormValid(errors: ValidationErrors): boolean {
  return Object.values(errors).every((error) => error === "");
}
