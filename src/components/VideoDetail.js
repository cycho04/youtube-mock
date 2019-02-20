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
                <div className='ui secondary pointing menu'>
                    <div className='item cutLeftPadding'>
                        <div className='content'>
                            <div className='header spacing'><h3>{props.video.snippet.title}</h3></div>
                            <div className='meta'><h3>{props.videoDetails.statistics.viewCount} views</h3></div>
                        </div>
                    </div>
                    <div className='right menu'>
                        <a className='active item' href='#'><i className='thumbs grey up icon'/>{props.videoDetails.statistics.likeCount}</a>
                        <a className='item' href='#'><i className='thumbs grey down icon'/>{props.videoDetails.statistics.dislikeCount}</a>
                        <a className='item' href='#'><i className='share grey icon'/>Share</a>
                        <a className='item' href='#'><i className='plus grey icon'/>Save</a>
                        <a className='item' href='#'><i className='ellipsis horizontal grey icon'/></a>
                    </div>
                </div>
                
               
                <div className='ui two column grid'>
                    <div className='ui feed column'>
                        <div className='ui event'>
                            <div className='label'><img src={props.videoDetails.snippet.thumbnails.default.url} alt='Channel Avatar'/></div>
                            <div className='content'>
                                <div className='summary'>{props.videoDetails.snippet.channelTitle}</div>
                                <div className='meta'>{props.videoDetails.snippet.publishedAt}</div>
                                <div className='extra text test'>{props.videoDetails.snippet.description}</div>
                            </div>
                        </div> 
                    </div>
                    
                    <div className='column moveButton'><button className='ui red button'>SUBSCRIBE ???K</button></div>
                </div>
                
                    
                
                    
                
                <div className='ui divider'></div>
                <h3>{props.videoDetails.statistics.commentCount} Comments &thinsp; &thinsp; &thinsp; &thinsp; <i className='sort amount up icon'/>SORT BY</h3>
            </div>
            <Comments comments={props.comments}/>
        </div>
    )
}

export default VideoDetail;