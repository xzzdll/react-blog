import { put, call, takeEvery } from "redux-saga/effects";
import {articals} from "../service/api.js";

// saga
function* fetch(action) {
  try {
    const res = yield call(articals, action.payload);
    yield put({
      type: "detail:set",
      payload: res
    });
  } catch (err) {
    console.log(err);
  }
}

export default {
  name: "detail",
  reducer: (state = {}, action) => {
    switch (action.type) {
      case "detail:set":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  saga: function* listWatcher() {
    yield takeEvery("detail:fetchList", fetch);
  }
};
