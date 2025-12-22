import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types/users";
import { UserState } from "@/types/users";

export const userReducers = {
  addUser(state: UserState, action: PayloadAction<User>) {
    state.users.push(action.payload);
  },

  updateUser(state: UserState, action: PayloadAction<User>) {
    const index = state.users.findIndex(u => u.id === action.payload.id);
    if (index !== -1) state.users[index] = action.payload;
  },

  deleteUser(state: UserState, action: PayloadAction<number>) {
    state.users = state.users.filter(u => u.id !== action.payload);
  },
};
