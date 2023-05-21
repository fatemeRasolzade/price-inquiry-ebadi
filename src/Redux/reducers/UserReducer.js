import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: {}};

const userManagement = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.user = action.payload;
    },
    clearProfile: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { setProfile, clearProfile } = userManagement.actions;
export const UserReducer = userManagement.reducer;