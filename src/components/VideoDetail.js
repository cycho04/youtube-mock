import React from 'react';
import Comments from './Comments';

const VideoDetail = (props) => {
    if(!props.video){
        return <div>Loading...</div>;
    }

    const videoSrc = `http://www.youtube.com/embed/${props.video.id.videoId}`
    return (
        <div>
            <div className='ui embed'>
                <iframe title='video player' src={videoSrc} />
            </div>
            <div className='ui segment'>
                <h4>{props.video.snippet.title}</h4>
                <p>{props.video.snippet.description}</p>
            </div>
            <Comments comments={props.comments}/>
        </div>
    )
}

export default VideoDetail;