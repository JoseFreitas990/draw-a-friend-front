import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { authApi } from "./authApi";

type User = {
  id: string;
  email: string;
  name: string;
};

type AuthState = {
  user: User | null;
};

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null } as AuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    );
  },
});

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
