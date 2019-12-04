import { combineReducers } from 'redux';
import { login } from './login';
import { models } from './model';
import { user } from './user';

const rootReducer = combineReducers({
    login,
    models,
    user
});

export default rootReducer;
