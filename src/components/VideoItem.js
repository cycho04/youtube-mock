import React from 'react';
import './VideoItem.css'

const VideoItem  = props => {
    console.log(props.video)
    return (
        <a onClick={() => props.onVideoSelect(props.video)} className='video-item item overflow'>
            <img alt={props.video.snippet.title} className='ui image' src={props.video.snippet.thumbnails.medium.url} />
            <div className='content fillOuterContainer'>
                <div className='header title'>{props.video.snippet.title}</div>
                <div>{props.video.snippet.channelTitle}</div>
                <div>Number of views</div>
            </div>
            {props.order === 0 ? <div className='ui divider'></div> : ''}
        </a>
    )
};

export default VideoItem;