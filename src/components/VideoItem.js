import React from 'react';
import './VideoItem.css'

const VideoItem  = props => {
    console.log(props.video)
    return (
        <a onClick={() => props.onVideoSelect(props.video)} className='video-item item'>
            <img alt={props.video.snippet.title} className='ui image' src={props.video.snippet.thumbnails.medium.url} />
            <div className='content'>
                <div className='header'>{props.video.snippet.title}</div>
                <div>{props.video.snippet.channelTitle}</div>
                <div>Number of views</div>
            </div>
            
        </a>
    )
};

export default VideoItem;