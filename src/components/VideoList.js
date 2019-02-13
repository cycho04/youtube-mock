import React from 'react';

import VideoItem from './VideoItem';

const VideoList = props => {
    const renderedList = props.videos.map((video) => {
        //added a ternary operator into key= when a channel video is in the list, it doesnt have a videoId, but a channelId. looks for either or, depending on which is present.
        return <VideoItem key={video.id.videoId ? video.id.videoId : video.id.channelId } onVideoSelect={props.onVideoSelect} video={video} />;
    })

    return <div className='ui relaxed divided list' >{renderedList}</div>;
};

export default VideoList;