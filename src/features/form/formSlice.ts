import { createSlice } from "@reduxjs/toolkit";
import { FormState } from "@/types/form";
import {
  setNameReducer,
  setEmailReducer, 
  setPhoneReducer,
  setGenderReducer,
  setCountryReducer,
  setDateRangeReducer,
  setSkillsReducer,
} from "./formReducer";
import {
  submitFormOp,
  startEditOp,
  deleteUserOp,
} from "./submittedReducer";

interface FormSliceState {
  current: FormState;
  submitted: FormState[];
  editingIndex: number | null;
}

const initialCurrent: FormState = {
  name: "",
  email: "",
  phone: "",
  gender: "male",
  country: "india",
  dateRange: {
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    key: "selection",
  },
  skills: [],
};

const initialState: FormSliceState = {
  current: initialCurrent,
  submitted: [],
  editingIndex: null,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setName: setNameReducer,
    setEmail: setEmailReducer,
    setPhone: setPhoneReducer,
    setGender: setGenderReducer,
    setCountry: setCountryReducer,
    setDateRange: setDateRangeReducer,
    setSkills: setSkillsReducer,
    submitForm: submitFormOp,
    startEdit: startEditOp,
    deleteUser: deleteUserOp,
  },
});

export const {
  setName: setNameAction,
  setEmail: setEmailAction,
  setPhone: setPhoneAction,
  setGender: setGenderAction,
  setCountry: setCountryAction,
  setDateRange,
  setSkills,
  submitForm,
  startEdit,
  deleteUser,
} = formSlice.actions;

export default formSlice.reducer;
