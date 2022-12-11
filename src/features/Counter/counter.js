import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  makeSelectCount,
  makeSelectExample,
  makeSelectPrices,
  makeSelectLoading,
} from "./counterSelector";
import { increment, decrement, changeText, getData } from "./counterSlice";

const selectCount = createStructuredSelector({
  count: makeSelectCount(),
  example: makeSelectExample(),
  prices: makeSelectPrices(),
  loading: makeSelectLoading(),
});

const Counter = () => {
  const dispatch = useDispatch();
  const { count, example, prices, loading } = useSelector(selectCount);

  useEffect(() => {
    if (prices.length === 0 && !loading) {
      dispatch(getData());
    }
  }, []);

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h1>
        {count}
        {example}
      </h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(changeText())}>click</button>
      {console.log(prices)}
    </div>
  );
};

export default Counter;
