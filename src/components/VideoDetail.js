import React from 'react';
import Comments from './Comments';
import './VideoDetail.css';

const VideoDetail = (props) => {
    console.log(props.videoDetails)
    if(!props.video){
        return <div>Loading...</div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`
    return (
        <div>
            <div className='ui embed'>
                <iframe title='video player' src={videoSrc} />
            </div>
            <div className='ui segment videoDetail'>
                <h3>{props.video.snippet.title}</h3>
                <div>{props.videoDetails.statistics.viewCount} Views</div>
                <div className='ui secondary pointing menu'>
                    <div className='right menu'>
                        <a className='active item'><i className='thumbs grey up icon'/>{props.videoDetails.statistics.likeCount}</a>
                        <a className='item'><i className='thumbs grey down icon'/>{props.videoDetails.statistics.dislikeCount}</a>
                        <a className='item'><i className='share grey icon'/>Share</a>
                        <a className='item'><i className='plus grey icon'/>Save</a>
                        <a className='item'><i className='ellipsis horizontal grey icon'/></a>
                    </div>
                </div>
                <p>{props.videoDetails.snippet.description}</p>
                <div className='ui divider'></div>
                <h3>{props.videoDetails.statistics.commentCount} Comments <i className='sort amount up icon'/>Sort By</h3>
            </div>
            <Comments comments={props.comments}/>
        </div>
    )
}

export default VideoDetail;