import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../service/api";

export const login = createAsyncThunk("auth/login", async (body) => {
  let response = await axios.post("/login", body);
  localStorage.setItem("authToken", response.data.token);
  return response.data;
});

export const register = createAsyncThunk("auth/register", async (body) => {
  let response = await axios.post("/register", body);
  localStorage.setItem("authToken", response.data.token);
  return response.data;
});

export const getUser = createAsyncThunk("auth/getUser", async () => {
  let response = await axios.get("/user");
  return response.data;
});

const initialState = {
  isLoading: false,
  loggedIn: false,
  hasError: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      return { ...state, loggedIn: false, user: null };
    },
    customLogin: (state, action) => {
      return { ...state, loggedIn: true, user: action.payload };
    },
  },
  extraReducers: (build) => {
    //login
    build.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    build.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.loggedIn = true;
    });
    build.addCase(login.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
    //register
    build.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    build.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.loggedIn = true;
    });
    build.addCase(register.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
    //singleUser
    build.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    build.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.loggedIn = true;
    });
    build.addCase(getUser.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
  },
});

export const { customLogin, logOut } = authSlice.actions;
export default authSlice.reducer;
