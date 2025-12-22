import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormState, Gender, Country } from "@/types/form";

const initialState: FormState = {
  name: "",
  email: "",
  gender: "male",
  country: "india",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setGender(state, action: PayloadAction<Gender>) {
      state.gender = action.payload;
    },
    setCountry(state, action: PayloadAction<Country>) {
      state.country = action.payload;
    },
    resetForm() {
      return initialState;
    },
  },
});

export const {
  setName,
  setEmail,
  setGender,
  setCountry,
  resetForm,
} = formSlice.actions;

export default formSlice.reducer;
