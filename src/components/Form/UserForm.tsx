import { FormEvent, ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setName,
  setEmail,
  setGender,
  setCountry,
  submitForm,
} from "@/features/form/formSlice";
import { Gender, Country } from "@/types/form";
import {
  validateForm,
  isFormValid,
  ValidationErrors,
} from "@/utils/formValidation";

export default function UserForm() {
  const dispatch = useAppDispatch();
  const { current, editingIndex } = useAppSelector((state) => state.form);

  const [errors, setErrors] = useState<ValidationErrors>({
    name: "",
    email: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(current);
    setErrors(validationErrors);

    if (!isFormValid(validationErrors)) {
      return;
    }

    dispatch(submitForm());

    setErrors({ name: "", email: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-md"
    >
      <h2 className="text-lg font-semibold text-gray-800">
        {editingIndex !== null ? "Edit User" : "Add User"}
      </h2>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={current.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch(setName(e.target.value))
          }
          className={`rounded-md border px-3 py-2 text-sm outline-none transition
            ${
              errors.name
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            }`}
        />
        {errors.name && (
          <span className="text-xs text-red-500">{errors.name}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={current.email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
          className={`rounded-md border px-3 py-2 text-sm outline-none transition
            ${
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            }`}
        />
        {errors.email && (
          <span className="text-xs text-red-500">{errors.email}</span>
        )}
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-700">Gender</p>
        <div className="flex gap-6">
          {(["male", "female", "other"] as Gender[]).map((g) => (
            <label
              key={g}
              className="flex cursor-pointer items-center gap-2 text-sm text-gray-600"
            >
              <input
                type="radio"
                checked={current.gender === g}
                onChange={() => dispatch(setGender(g))}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="capitalize">{g}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Country</label>
        <select
          value={current.country}
          onChange={(e) =>
            dispatch(setCountry(e.target.value as Country))
          }
          className="rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
        </select>
      </div>

   
      <button
        type="submit"
        className={`w-full rounded-md py-2 text-sm font-semibold text-white transition ${
          editingIndex !== null
            ? "bg-green-600 hover:bg-green-700"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {editingIndex !== null ? "Update User" : "Submit"}
      </button>
    </form>
  );
}
