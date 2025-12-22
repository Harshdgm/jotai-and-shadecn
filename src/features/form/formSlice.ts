import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormState, Gender, Country } from "@/types/form";

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
    setName(state, action: PayloadAction<string>) {
      state.current.name = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.current.email = action.payload;
    },
    setGender(state, action: PayloadAction<Gender>) {
      state.current.gender = action.payload;
    },
    setCountry(state, action: PayloadAction<Country>) {
      state.current.country = action.payload;
    },

    submitForm(state) {
      if (state.editingIndex !== null) {
        state.submitted[state.editingIndex] = { ...state.current };
        state.editingIndex = null;
      } else {
        state.submitted.push({ ...state.current });
      }

      state.current = { ...initialCurrent };
    },

    startEdit(state, action: PayloadAction<number>) {
      state.current = { ...state.submitted[action.payload] };
      state.editingIndex = action.payload;
    },

    deleteUser(state, action: PayloadAction<number>) {
      state.submitted.splice(action.payload, 1);

      if (state.editingIndex === action.payload) {
        state.editingIndex = null;
        state.current = { ...initialCurrent };
      }
    },
  },
});

export const {
  setName,
  setEmail,
  setGender,
  setCountry,
  submitForm,
  startEdit,
  deleteUser,
} = formSlice.actions;

export default formSlice.reducer;
