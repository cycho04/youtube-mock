import youtube from '../apis/youtube';
import {
    SEARCH_TERM,
    GET_COMMENTS,
    GET_DETAILS,
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
        payload: videoDetails.data.items
    })
}