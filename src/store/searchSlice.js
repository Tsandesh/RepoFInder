import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/axios";

const searchRepo = createSlice({
  name: "repo",
  initialState: { data: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contents = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
export default searchRepo.reducer;
export const { setRepo } = searchRepo.actions;

export const fetchData = createAsyncThunk("repo/fetchData", async (query) => {
  try {
    const res = await api.get(`/search/repositories?q=${query}`);

    const repos = await res.data;
    return repos;
  } catch (err) {
    console.log(err);
  }
});
