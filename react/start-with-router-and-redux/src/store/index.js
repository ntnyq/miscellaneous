import { createStore, applyMiddleware } from 'redux'
import incrementReducer from '../reducers/index'
import createdSagaMiddleware from 'redux-saga'
import { watchIncrementAsync } from '../sagas/index'

const sagaMiddleware = createdSagaMiddleware()
const store = createStore(incrementReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchIncrementAsync)
export default store
