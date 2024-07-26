import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Insight } from "../Types";

interface InsightsState {
  insights: Insight[];
  loading: boolean;
  error: string | null;
}

const initialState: InsightsState = {
  insights: [],
  loading: false,
  error: null,
};

// Async thunk for fetching insights
export const fetchInsights = createAsyncThunk(
  "insights/fetchInsights",
  async (fromDate: string) => {
    const response = await axios.get("/insights", {
      params: { from_date: fromDate },
    });
    return response.data;
  }
);

// Async thunk for adding a new diagnostic
export const addDiagnostic = createAsyncThunk(
  "insights/addDiagnostic",
  async (newDiagnostic: Partial<Omit<Insight, "insight_id">>) => {
    const response = await axios.post("/insights", newDiagnostic);
    return { ...newDiagnostic, insight_id: response.data.insight_id };
  }
);

const insightsSlice = createSlice({
  name: "insights",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInsights.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchInsights.fulfilled,
        (state, action: PayloadAction<Insight[]>) => {
          state.loading = false;
          state.insights = action.payload;
        }
      )
      .addCase(fetchInsights.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch insights";
      })
      .addCase(
        addDiagnostic.fulfilled,
        (state, action: PayloadAction<Insight>) => {
          state.insights.push(action.payload);
        }
      );
  },
});

export default insightsSlice.reducer;
