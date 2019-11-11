import { combineReducers } from 'redux';
import termReducer from './termReducer';
import commentsReducer from './commentsReducer';
import videoDetailsReducer from './videoDetailsReducer'
import channelInfoReducer from './channelInfoReducer';
import viewCountReducer from './viewCountReducer';
import selectdVideoReducer from './selectedVideoReducer';

export default combineReducers({
    videos: termReducer,
    comments: commentsReducer,
    videoDetails: videoDetailsReducer,
    selectedVideo: selectdVideoReducer,
    channelInfo: channelInfoReducer,
    viewCount: viewCountReducer,
});