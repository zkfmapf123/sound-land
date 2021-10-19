import { combineReducers, createStore, Reducer, Store } from 'redux';
import { sideReducer} from './reducer.index';

const rootReducer :Reducer = combineReducers({
    sideReducer
});

const store: Store = createStore(rootReducer);
export default store;