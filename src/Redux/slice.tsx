import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFlights = createAsyncThunk(
  "res/fetchFlights",
  async (data: any, { rejectWithValue }) => {
    const options = {
      method: "GET",
      url: "https://booking-com15.p.rapidapi.com/api/v1/attraction/searchAttractions",
      params: {
        id: "eyJ1ZmkiOi0yMDkyMTc0fQ==",
        sortBy: "trending",
        page: "1",
        currency_code: "INR",
        languagecode: "en-us",
      },
      headers: {
        "x-rapidapi-key": "b8bf90b99bmsh9540311617cb430p197706jsna1b29936408f",
        "x-rapidapi-host": "booking-com15.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const FlightSlice = createSlice({
  name: "flights",
  initialState: {
    status: "idle",
    allArticles: [],
    allDraftArticles: [],
    clickedArticle: "",
  },
  reducers: {
    setClickedArticle: (state, action) => {
      state.clickedArticle = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFlights.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
      })
      .addCase(fetchFlights.rejected, (state, action) => {
        state.status = "failed";
        // @ts-ignore
        state.error = action.error.message;
      });
  },
});

export const FlightAction = FlightSlice.actions;

export default FlightSlice;
