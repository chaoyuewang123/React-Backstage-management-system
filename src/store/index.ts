import {legacy_createStore,combineReducers,applyMiddleware,compose} from 'redux'
import reduxThunk from "redux-thunk"
import NumStatereducer from './NumberStatus/reducer'
import ArrStatusreducer from './ArrStatus/reducer'

const reducer = combineReducers({
    NumStatereducer,
    ArrStatusreducer
})

/* const store = legacy_createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); */

/* const store = legacy_createStore(reducer) */

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose //rt

// 把仓库数据，浏览器redux-dev-tools，还有reduxThunk插件关联在store中
const store = legacy_createStore(reducer,composeEnhancers(applyMiddleware(reduxThunk))); 
export default store