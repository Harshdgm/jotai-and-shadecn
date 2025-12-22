export type Gender = 'male' | 'female' | '';

export interface FormState {
  name: string;
  email: string;
  gender: Gender;
  country: string;
}

export interface UpdateFieldPayload {
  field: keyof FormState;
  value: string;
}
