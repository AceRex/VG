import { configureStore } from "@reduxjs/toolkit";
import FlightSlice from "./slice.tsx";

const store = configureStore({
  reducer: {
    flight: FlightSlice.reducer,
  },
});

export default store;
