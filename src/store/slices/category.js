import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../service/api";

export const getCategories = createAsyncThunk("category/getAll", async () => {
  let response = await axios.get("/categories");
  return response.data;
});

const initialState = {
  isLoading: false,
  categories: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
    });
    build.addCase(getCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    });
    build.addCase(getCategories.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {} = categorySlice.actions;
export default categorySlice.reducer;
