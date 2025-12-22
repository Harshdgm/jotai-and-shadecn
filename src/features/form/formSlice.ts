import { createSlice } from "@reduxjs/toolkit";
import { FormState } from "@/types/form";
import { setName, setEmail, setGender, setCountry } from "@/features/form/formReducer";
import { submitFormOp, startEditOp, deleteUserOp } from "@/features/form/submittedReducer";

interface FormSliceState {
  current: FormState;
  submitted: FormState[];
  editingIndex: number | null;
}

const initialCurrent: FormState = {
  name: "",
  email: "",
  gender: "male",
  country: "india",
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
    setName,
    setEmail,
    setGender,
    setCountry,

    submitForm: submitFormOp,
    startEdit: startEditOp,
    deleteUser: deleteUserOp,
  },
});

export const {
  setName: setNameAction,
  setEmail: setEmailAction,
  setGender: setGenderAction,
  setCountry: setCountryAction,
  submitForm,
  startEdit,
  deleteUser,
} = formSlice.actions;

export default formSlice.reducer;
