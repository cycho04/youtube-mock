import { combineReducers } from 'redux';
import termReducer from './termReducer';
import commentsReducer from './commentsReducer';
import videoDetailsReducer from './videoDetailsReducer'

export default combineReducers({
    videos: termReducer,
    comments: commentsReducer,
    videoDetails: videoDetailsReducer
});