import { put, call, takeEvery } from "redux-saga/effects";
import {articals} from "../service/api.js";

// saga
function* fetch(action) {
  try {
    const res = yield call(articals, action.payload);
    yield put({
      type: "articals:set",
      payload: res
    });
  } catch (err) {
    console.log(err);
  }
}

export default {
  name: "articals",
  reducer: (state = {}, action) => {
    switch (action.type) {
      case "articals:set":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  saga: function* listWatcher() {
    yield takeEvery("articals:fetchList", fetch);
  }
};
