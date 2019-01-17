import { put, call, takeEvery } from "redux-saga/effects";
import {getVisitorMount} from "../service/api.js";

// saga
function* fetch(action) {
  try {
    const res = yield call(getVisitorMount, action.payload);
    yield put({
      type: "visitors:set",
      payload: res
    });
  } catch (err) {
    console.log(err);
  }
}

export default {
  name: "visitors",
  reducer: (state = {}, action) => {
    switch (action.type) {
      case "visitors:set":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  saga: function* listWatcher() {
    yield takeEvery("visitors:fetchList", fetch);
  }
};
