import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { FormState, UpdateFieldPayload } from '@/types/form';

const initialState: FormState = {
  name: '',
  email: '',
  gender: '',
  country: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField(state, action: PayloadAction<UpdateFieldPayload>) {
      state[action.payload.field] = action.payload.value;
    },
    resetForm() {
      return initialState;
    },
  },
});

export type FormActions =
  | ReturnType<typeof formSlice.actions.updateField>
  | ReturnType<typeof formSlice.actions.resetForm>;

export const { updateField, resetForm } = formSlice.actions;
export default formSlice.reducer;
