import {legacy_createStore} from 'redux'
import reducer from './reducer'
const store = legacy_createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* const store = legacy_createStore(reducer) */
export default store