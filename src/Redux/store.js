import { configureStore } from "@reduxjs/toolkit";
import shipmentReducer from "./shipmentSlice";

export const store = configureStore({
  reducer: {
    data: shipmentReducer, // Add the data slice to the store
  },
});

export default store;