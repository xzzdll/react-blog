import { put, call, takeEvery } from "redux-saga/effects";
import {articalList} from "../service/api.js";

// saga
function* fetch(action) {
  try {
    const res = yield call(articalList, action.payload);
    yield put({
      type: "list:set",
      payload: res
    });
  } catch (err) {
    console.log(err);
  }
}

export default {
  name: "list",
  reducer: (state = {}, action) => {
    switch (action.type) {
      case "list:set":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  saga: function* listWatcher() {
    yield takeEvery("list:fetchList", fetch);
  }
};
