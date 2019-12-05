import { combineReducers } from 'redux';
import { login } from './login';
import { models } from './model';
import { user } from './user';
import { general } from './general';

const rootReducer = combineReducers({
    general,
    login,
    models,
    user
});

export default rootReducer;
