import React from 'react';

import './styles/VideoItem.css'


const VideoItem  = props => {
    const findViewCount = (currentId) => {
        const viewCount = props.viewCounts.filter((video) => video.id === currentId)
        
        if(viewCount){
            return viewCount[0] ? viewCount[0].statistics.viewCount :''   
        }     
        else return 0;
    }

    const formattedNumber = Number(findViewCount(props.video.id.videoId)).toLocaleString();
    return (
        <a onClick={() => props.onVideoSelect(props.video)} className='video-item item overflow'>
            <img alt={props.video.snippet.title} className='ui image' src={props.video.snippet.thumbnails.medium.url} />
            <div className='content fillOuterContainer'>
                <div className='header title'>{props.video.snippet.title}</div>
                <div className='meta'>{props.video.snippet.channelTitle}</div>
                <div className='meta'>{props.video.id.videoId ? `${formattedNumber} views` : ''}</div>
            </div>
            {props.order === 0 ? <div className='ui divider'></div> : ''}
        </a>
    )
};

export default VideoItem;