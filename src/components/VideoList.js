import React from 'react';

import './styles/VideoList.css';
import VideoItem from './VideoItem';


const VideoList = props => {
    const renderedList = props.videos.map((video, index) => {
        //added a ternary operator into key= when a channel video is in the list, it doesnt have a videoId, but a channelId. looks for either or, depending on which is present.
        return (
            <VideoItem 
                key={video.id.videoId ? video.id.videoId : video.id.channelId } 
                onVideoSelect={props.onVideoSelect} 
                video={video} 
                order={index} 
                viewCounts={props.viewCounts}
            />
        )
    })

    return (
        <div className='ui relaxed divided list' >
            {console.log(props.viewCounts)}
            <div>
                Up next
                <div className='ui fitted toggle checkbox right'>
                    <input type='checkbox'/>
                    <label></label>
                </div>
                <span className='right'>
                    Auto-Play &thinsp; &thinsp; &thinsp;
                </span>
            </div>
            {renderedList}
            <button className='ui button fluid'>Does Nothing </button>
        </div>
    )
};

export default VideoList;