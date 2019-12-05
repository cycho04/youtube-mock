import { combineReducers } from 'redux';
import termReducer from './termReducer';
import commentsReducer from './commentsReducer';
import videoDetailsReducer from './videoDetailsReducer'
import channelInfoReducer from './channelInfoReducer';
import viewCountReducer from './viewCountReducer';
import selectdVideoReducer from './selectedVideoReducer';
import colorReducer from './colorReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    videos: termReducer,
    comments: commentsReducer,
    videoDetails: videoDetailsReducer,
    selectedVideo: selectdVideoReducer,
    channelInfo: channelInfoReducer,
    viewCount: viewCountReducer,
    color: colorReducer,
    error: errorReducer,
});