import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import rootReducer from '../reducers/rootReducer';

const configureStore = (preloadedState: any) => {
    return createStore(
        rootReducer,
        /* preloadedState, */
        composeWithDevTools(
            applyMiddleware(
                thunkMiddleware
            )
        )
    )
};

export default configureStore;