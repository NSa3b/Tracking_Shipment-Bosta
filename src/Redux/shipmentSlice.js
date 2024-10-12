import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/fetchData", async (id) => {
  const response = await fetch(
    `https://tracking.bosta.co/shipments/track/${id}`
  );
  if (!response.ok) {
    throw new Error(response);
  }
  const data = await response.json();
  return data;
});

const shipmentSlice = createSlice({
  name: "shipment",
  initialState: {
    Shipment: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.Shipment = action.payload; // Store the fetched data
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Handle errors
      });
  },
});

export default shipmentSlice.reducer;
