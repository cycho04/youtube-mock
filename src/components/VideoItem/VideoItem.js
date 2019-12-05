import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import {numShortener} from '../../utils/numShortener';
import './VideoItem.scss'


const VideoItem  = props => {

    const { viewCounts, video, color, key } = props;

    const findViewCount = (currentId) => {
        const viewCount = viewCounts.filter((video) => video.id === currentId);
        if(viewCount){
            return viewCount[0] ? `${viewCount[0].statistics.viewCount}`: 10   
        }
    }
    
    const formattedNumber = numShortener(Number(findViewCount(video.id.videoId)));

    return (
        <button onClick={() => console.log('hello')} className='video-item item overflow'>
            <img alt={video.snippet.title} className='ui image thumbnail' src={video.snippet.thumbnails.medium.url} />
            <div className='content fillOuterContainer'>
                <div className={`${color} text header title`}>{video.snippet.title}</div>
                <div className={`${color} text`}>{video.snippet.channelTitle}</div>
                <div className={`${color} text`}>{formattedNumber !== 10 ? `${formattedNumber} views` : ''}</div>
            </div>
            {key !== 0 ? <div className='ui divider'></div> : ''}
        </button>
    )
};

const mapStateToProps = state => {
    return{
        viewCounts: state.viewCount,
        color: state.color,
    }
}

VideoItem.propTypes = {
    color: PropTypes.string,
    viewCount: PropTypes.array,
    video: PropTypes.object,
    key: PropTypes.number,
}

export default connect(mapStateToProps)(VideoItem);