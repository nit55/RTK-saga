import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  count: 0,
  example: "test",
  prices: [],
  loading: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count > 0) state.count -= 1;
    },
    changeText: (state, action) => {
      state.example = "noTest";
    },
    getData: (state) => {
      return {
        ...state,
        loading: true,
      };
    },

    loadData: (state, action) => {
      return {
        ...state,
        prices: action.payload,
        loading: false,
      };
    },
  },
});

export const { increment, decrement, changeText, getData, loadData } =
  counterSlice.actions;
export default counterSlice.reducer;
