"use client";

import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setName,
  setEmail,
  setGender,
  setCountry,
} from "@/features/form/formSlice";
import { Gender, Country } from "@/types/form";

export default function UserForm() {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state) => state.form);

  return (
    <form className="max-w-md mx-auto space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm my-10">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={form.name}
          placeholder="Enter your name"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch(setName(e.target.value))
          }
          className="rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"/>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={form.email}
          placeholder="Enter your email"
          onChange={(e) => dispatch(setEmail(e.target.value))}
          className="rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"/>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-gray-700">Gender</p>
        <div className="flex gap-4">
          {(["male", "female", "other"] as Gender[]).map((g) => (
            <label
              key={g}
              className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
              <input
                type="radio"
                value={g}
                checked={form.gender === g}
                onChange={() => dispatch(setGender(g))}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"/>
              <span className="capitalize">{g}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Country</label>
        <select
          value={form.country}
          onChange={(e) =>
            dispatch(setCountry(e.target.value as Country))
          }
          className="rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
        </select>
      </div>
    </form>
  );
}
