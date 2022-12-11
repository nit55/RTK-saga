import { call, put, takeLatest } from "redux-saga/effects";
import { fetchData } from "../../utils/helper/fetch";
import { getData, loadData } from "./counterSlice";

function* get_crypto_data() {
  try {
    const currentpriceresponse = yield call(
      fetchData,
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    if (currentpriceresponse?.status === 200) {
      yield put(loadData(currentpriceresponse));
    }
  } catch (err) {
    console.log(err);
  }
}
export default function* counterSaga() {
  yield takeLatest(getData.type, get_crypto_data);
}
