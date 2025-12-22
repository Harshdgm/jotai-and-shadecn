import { PayloadAction } from "@reduxjs/toolkit";
import { FormState } from "@/types/form";

interface FormSliceState {
  current: FormState;
  submitted: FormState[];
  editingIndex: number | null;
}

export const submitFormOp = (state: FormSliceState) => {
  if (state.editingIndex !== null) {
    state.submitted[state.editingIndex] = { ...state.current };
    state.editingIndex = null;
  } else {
    state.submitted.push({ ...state.current });
  }
  state.current = { ...state.current }; // optional: reset if needed
};

export const startEditOp = (state: FormSliceState, action: PayloadAction<number>) => {
  state.current = { ...state.submitted[action.payload] };
  state.editingIndex = action.payload;
};

export const deleteUserOp = (state: FormSliceState, action: PayloadAction<number>) => {
  state.submitted.splice(action.payload, 1);

  if (state.editingIndex === action.payload) {
    state.editingIndex = null;
    state.current = { ...state.current }; // optional: reset if needed
  }
};
