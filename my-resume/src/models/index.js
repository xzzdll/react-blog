import {combineReducers} from 'redux'
import * as sagaEffects from 'redux-saga/effects'

const context = require.context('./', false, /\.js$/)
let modules = context.keys().filter(item => item !== './index.js').map(key => context(key))
let reducers = {}
let sagaList = []
for (let i = 0; i < modules.length; i++) {
  let module = modules[i].default
  reducers[module.name] = module.reducer
  sagaList.push(module.saga)
}

function getSaga(sagas) {
  return function* () {
    let forkList = sagas.map(saga => {
      return sagaEffects.fork(saga)
    })
    yield forkList
  }
}

export default {
  rootReducer: combineReducers({
    ...reducers
  }),
  rootSaga: getSaga(sagaList)
}
