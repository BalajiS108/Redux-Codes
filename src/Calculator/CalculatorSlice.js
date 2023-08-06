import { createSlice } from "@reduxjs/toolkit";

export const CalculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    value1: 10,
    value2: 11,
    result: 0,
  },
  reducers: {
    add: (state, action) => {
      const { value1, value2 } = action.payload;
      state.result = value1 + value2;
    },
    sub: (state, action) => {
      const { value1, value2 } = action.payload;
      state.result = value1 - value2;
    },
    mul: (state, action) => {
      const { value1, value2 } = action.payload;
      state.result = value1 * value2;
    },
    div: (state, action) => {
      const { value1, value2 } = action.payload;
      state.result = value1 / value2;
    },
  },
});

export const { add, sub, mul, div } = CalculatorSlice.actions;

export default CalculatorSlice.reducer;
