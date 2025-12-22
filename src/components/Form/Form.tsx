import { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { updateField, resetForm } from '@/features/form/formSlice';
import type { FormState } from '@/types/form';

const countries: string[] = ['India', 'USA', 'UK'];

export default function Form() {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state) => state.form);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const field = e.target.name as keyof FormState;
    dispatch(updateField({ field, value: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('SUBMITTED DATA:', form);
    dispatch(resetForm());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={form.gender === 'male'}
          onChange={handleChange}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={form.gender === 'female'}
          onChange={handleChange}
        />
        Female
      </label>

      <select name="country" value={form.country} onChange={handleChange}>
        <option value="">Select Country</option>
        {countries.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}
