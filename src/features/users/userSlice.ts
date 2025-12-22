import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types/users";
import { fetchUsersAPI } from "./userAPI";

/* -------------------- ASYNC THUNK -------------------- */

export const fetchUsers = createAsyncThunk<User[]>(
  "users/fetchUsers",
  async () => {
    return await fetchUsersAPI();
  }
);

/* -------------------- STATE -------------------- */

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

/* -------------------- SLICE -------------------- */

const userSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },

    updateUser(state, action: PayloadAction<User>) {
      const index = state.users.findIndex(
        (u) => u.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },

    deleteUser(state, action: PayloadAction<number>) {
      state.users = state.users.filter(
        (u) => u.id !== action.payload
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<User[]>) => {
          state.loading = false;
          state.users = action.payload;
        }
      )
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Failed to fetch users";
      });
  },
});

export const { addUser, updateUser, deleteUser } =
  userSlice.actions;

export default userSlice.reducer;
