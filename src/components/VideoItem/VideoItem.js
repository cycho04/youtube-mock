import React from 'react';
import {connect} from 'react-redux';

import './VideoItem.scss'


const VideoItem  = props => {
    const findViewCount = (currentId) => {
        const viewCount = props.viewCounts.filter((video) => video.id === currentId);
        console.log(props.viewCounts)
        console.log(props.video.id.videoId)
        console.log(viewCount)
        if(viewCount){
            return viewCount[0] ? viewCount[0].statistics.viewCount : ''   
        }     
        else return 0;
    }

    const formattedNumber = Number(findViewCount(props.video.id.videoId)).toLocaleString();
    return (
        <a onClick={() => console.log('hello')} className='video-item item overflow'>
            <img alt={props.video.snippet.title} className='ui image thumbnail' src={props.video.snippet.thumbnails.medium.url} />
            <div className='content fillOuterContainer'>
                <div className={`${props.color} header title`}>{props.video.snippet.title}</div>
                <div className={`${props.color}`}>{props.video.snippet.channelTitle}</div>
                <div className={`${props.color}`}>{`${formattedNumber} views`}</div>
            </div>
            {props.order === 0 ? <div className='ui divider'></div> : ''}
        </a>
    )
};

const mapStateToProps = state => {
    return{
        viewCounts: state.viewCount,
        color: state.color,
    }
}

export default connect(mapStateToProps)(VideoItem);