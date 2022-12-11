import { createSelector } from "@reduxjs/toolkit";

// import { initialState } from "./counterSlice";

const counterSelect = (state) => state.counter || {};

const makeSelectCount = () =>
  createSelector(counterSelect, (state) => state.count);

const makeSelectExample = () =>
  createSelector(counterSelect, (state) => state.example);

const makeSelectPrices = () =>
  createSelector(counterSelect, (state) => state.prices);

const makeSelectLoading = () =>
  createSelector(counterSelect, (state) => state.loading);

export {
  counterSelect,
  makeSelectCount,
  makeSelectExample,
  makeSelectPrices,
  makeSelectLoading,
};
