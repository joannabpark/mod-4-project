import { combineReducers } from 'redux';
import notes from './notes';
import user from './user';
import search from './search';

export default combineReducers({
    notes,
    user,
    search
})