import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import './VideoList.scss';
import VideoItem from '../VideoItem/VideoItem';


const VideoList = ({videos}) => {
    const renderedList = videos.map((video, index) => {
        return (
            <VideoItem 
                key={index}
                video={video} 
            />
        )
    })

    return (
        <div className='ui relaxed divided list' >
            <div>
                Up next
            </div>
            {renderedList}
        </div>
    )
};

const mapStateToProps = state => {
    return{
        videos: state.videos
    }
}

VideoList.propTypes = {
    videos: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(VideoList);