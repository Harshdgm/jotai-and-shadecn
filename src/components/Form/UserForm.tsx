import {  FormEvent,  useState, ChangeEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setNameAction,
  setEmailAction,
  setPhoneAction,
  setGenderAction,
  setCountryAction,
  setDateRange,
  setSkills,
  submitForm,
} from "@/features/form/formSlice";

import DateRangeInput from "./DateRangeInput";
import { Gender, Country } from "@/types/form";
import {
  validateForm,
  isFormValid,
  ValidationErrors,
} from "@/utils/formValidation";

const SKILLS = ["react", "redux", "typescript", "nextjs"] as const;

export default function UserForm() {
  const dispatch = useAppDispatch();
  const { current, editingIndex } = useAppSelector((state) => state.form);

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, "");

      if (value.length <= 10) {
        dispatch(setPhoneAction(value));
      };
  };

  const [errors, setErrors] = useState<ValidationErrors>({
    name: "",
    email: "",
    phone: "",
    skills:"",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(current);
    setErrors(validationErrors);

    if (!isFormValid(validationErrors)) return;

    dispatch(submitForm());
    setErrors({ name: "", email: "", phone:"", skills:"" });
  };

  useEffect(() => {
    setErrors({
      name: "",
      email: "",
      phone: "",
      skills: "",
    });
  }, [editingIndex]);

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md space-y-6 rounded-xl border border-gray-200 bg-white p-6 mt-10"
    >
      <h2 className="text-lg font-semibold text-gray-800">
        {editingIndex !== null ? "Edit User" : "Add User"}
      </h2>

      <div className="flex flex-col">
        <input
          type="text"
          value={current.name}
          onChange={(e) => dispatch(setNameAction(e.target.value))}
          placeholder="Name"
          className="border p-2 rounded w-full"
        />
        {errors.name ? (
          <span className="text-sm text-red-500 mt-1">{errors.name}</span>
        ) : null}
      </div>

      <div className="flex flex-col mt-4">
        <input
          type="email"
          value={current.email}
          onChange={(e) => dispatch(setEmailAction(e.target.value))}
          placeholder="Email"
          className="border p-2 rounded w-full"
        />
        {errors.email ? (
          <span className="text-sm text-red-500 mt-1">{errors.email}</span>
        ) : null}
      </div>

      <div className="flex flex-col">
        <input
          type="tel"
          inputMode="numeric"
          value={current.phone}
          onChange={handlePhoneChange}
          placeholder="Phone  No."
          maxLength={10}
          className="border p-2 rounded w-full"
        />
        {errors.phone ? (
          <span className="text-sm text-red-500 mt-1">{errors.phone}</span>
        ) : null}
      </div>


      <div className="flex gap-4">
        {(["male", "female", "other"] as Gender[]).map((g) => (
          <label key={g} className="flex items-center gap-2">
            <input
              type="radio"
              checked={current.gender === g}
              onChange={() => dispatch(setGenderAction(g))}
            />
            {g}
          </label>
        ))}
      </div>

      <DateRangeInput
        value={current.dateRange}
        onChange={(range) => dispatch(setDateRange(range))}
      />

      <div className="flex flex-wrap gap-2">
          {SKILLS.map(skill => (
            <label key={skill} className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={current.skills.includes(skill)}
                onChange={() => {
                  const newSkills = current.skills.includes(skill)
                    ? current.skills.filter(s => s !== skill)
                    : [...current.skills, skill];
                  dispatch(setSkills(newSkills));
                }}
              />
              {skill}
            </label>
          ))}

           {errors.skills ? (
          <span className="text-sm text-red-500 mt-1">{errors.skills}</span>
        ) : null}
      </div>

      <select
        value={current.country}
        onChange={(e) =>
          dispatch(setCountryAction(e.target.value as Country))
        }
        className="border p-2 rounded w-full"
      >
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded w-full"
      >
        {editingIndex !== null ? "Update User" : "Submit"}
      </button>
    </form>
  );
}
