import React from 'react';
import {connect} from 'react-redux';
import {numShortener} from '../../utils/numShortener';

import './VideoItem.scss'


const VideoItem  = props => {
    const findViewCount = (currentId) => {
        const viewCount = props.viewCounts.filter((video) => video.id === currentId);
        if(viewCount){
            return viewCount[0] ? `${viewCount[0].statistics.viewCount}`: 10   
        }
    }
    
    const formattedNumber = numShortener(Number(findViewCount(props.video.id.videoId)));

    return (
        <a onClick={() => console.log('hello')} className='video-item item overflow'>
            <img alt={props.video.snippet.title} className='ui image thumbnail' src={props.video.snippet.thumbnails.medium.url} />
            <div className='content fillOuterContainer'>
                <div className={`${props.color} text header title`}>{props.video.snippet.title}</div>
                <div className={`${props.color} text`}>{props.video.snippet.channelTitle}</div>
                <div className={`${props.color} text`}>{formattedNumber !== 10 ? `${formattedNumber} views` : ''}</div>
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