import { put, call, takeEvery } from "redux-saga/effects";
import {says} from "../service/api.js";

// saga
function* fetch(action) {
  try {
    const res = yield call(says, action.payload);
    yield put({
      type: "says:set",
      payload: res
    });
  } catch (err) {
    console.log(err);
  }
}

export default {
  name: "says",
  reducer: (state = {}, action) => {
    switch (action.type) {
      case "says:set":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  saga: function* listWatcher() {
    yield takeEvery("says:fetchList", fetch);
  }
};
