import React from 'react';

import './styles/VideoList.css';
import VideoItem from './VideoItem';
import {connect} from 'react-redux';


const VideoList = (props) => {
    const renderedList = props.videos.map((video, index) => {
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

const mapStateToProps = state => {
    return{
        videos: state.videos
    }
}

export default connect(mapStateToProps)(VideoList);