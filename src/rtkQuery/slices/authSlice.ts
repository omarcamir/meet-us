// features/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  id: string | null;
  name: string | null;
}

const initialState: AuthState = { id: null, name: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ id: string; name: string }>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
    logout: () => initialState,
  },
});


export default authSlice.reducer;

export const { setUser, logout } = authSlice.actions;
