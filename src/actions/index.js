import youtube from '../apis/youtube';
import {
    SEARCH_TERM,
    GET_COMMENTS,
    GET_DETAILS,
    CURRENT_VIDEO,
    CHANNEL_INFO,
    VIEW_COUNTS,
    CHANGE_COLOR,
} from './types';


export const searchTerm = (term) => async dispatch =>{
    const searchTermResponse = await youtube.get('/search', {
        params: {
            part: 'snippet',
            q: term
        }
    })
    dispatch({
        type: SEARCH_TERM,
        payload: searchTermResponse.data.items
    })
    dispatch(selectCurrentVideo(searchTermResponse.data.items));
    dispatch(getViewCountList(searchTermResponse.data.items));
};

export const getComments = (id) => async dispatch =>{
    const comments = await youtube.get('/commentThreads', {
        params:{
            part: 'snippet,replies',
            videoId: id, 
            order: 'relevance'
        }
    });
    dispatch({
        type: GET_COMMENTS,
        payload: comments.data.items
    })
}

export const getVideoDetails = (id) => async dispatch =>{
    const videoDetails = await youtube.get('/videos', {
        params:{
            id: id,
            part: 'snippet,statistics'
        }
    });
    dispatch({
        type: GET_DETAILS,
        payload: videoDetails.data.items[0]
    })
}

export const selectCurrentVideo = (videos) => async dispatch => {
    const selectedVideo = videos.find(video => !video.id.channelId);
    dispatch ({
        type: CURRENT_VIDEO,
        payload: selectedVideo
    })
    dispatch(getComments(selectedVideo.id.videoId));
    dispatch(getVideoDetails(selectedVideo.id.videoId));
    dispatch(getChannelInfo(selectedVideo.snippet.channelId));
} 

export const getChannelInfo = (id) => async dispatch =>{
    const channelInfo = await youtube.get('/channels', {
        params:{
            id: id,
            part: 'statistics'
        }
    });
    dispatch({
        type: CHANNEL_INFO,
        payload: channelInfo.data.items[0]
    })
}

export const getViewCountList = (videos) => async dispatch =>{
    let viewCountsString = ''
    videos.map((video, i) => {
        //skips over item if channel
        if(video.id.channelId){
            return true;
        }
        //first item doesn't need to be added with ,
        else if(viewCountsString === ''){
            return viewCountsString = video.id.videoId
        }
        //all else is added with , format
        return viewCountsString = viewCountsString === undefined ? '' : viewCountsString.concat(',', video.id.videoId)
    })
    const viewCountResponse = await youtube.get('/videos', {
        params:{
            id: viewCountsString,
            part: 'statistics'
        }
    });
    dispatch({
        type: VIEW_COUNTS,
        payload: viewCountResponse.data.items
    })
}

export const changeColor = (color) => async dispatch => {
    dispatch ({
        type: CHANGE_COLOR,
        payload: color
    })
} 