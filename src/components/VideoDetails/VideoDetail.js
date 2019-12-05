import React from 'react';
import PropTypes from 'prop-types';
import Comments from '../Comments/Comments';
import ClampLines from 'react-clamp-lines';
import {connect} from 'react-redux';

import './VideoDetail.scss';
import {formatDate} from '../../utils/formatDate';
import {numShortener} from '../../utils/numShortener';

const VideoDetail = props => {

    const {publishedAt, videoId, title, viewCount, url, channelTitle, description, commentCount, subscriberCount, color} = props;

    const fullFormattedDate = formatDate(publishedAt);
    
    //iframe
    const videoSrc = `https://www.youtube.com/embed/${videoId}`

    //render
    return (
        <div>
            <div className='ui embed video'>
                <iframe title='video player' src={videoSrc} />
            </div>
            <div className='ui segment videoDetail'>
                <div className='ui secondary pointing menu'>
                    <div className='item cutLeftPadding'>
                        <div className='content'>
                            <div className='header spacing'><h3 className={`${color} details-text`}>{title}</h3></div>
                            <div className='meta'><h3 className={`${color} details-text`}>{Number(viewCount).toLocaleString()} views</h3></div>
                        </div>
                    </div>
                </div>
                
               
                <div className='ui two column grid'>
                    <div className='ui feed column'>
                        <div className='ui event details-text'>
                            <div className='label'><img src={url} alt='Channel Avatar'/></div>
                            <div className='content'>
                                <div className={`${color} summary details-text`}>{channelTitle}</div>
                                <div className={`${color} details-text`}>{`Published on ${fullFormattedDate}`}</div>
                                <div className={`${color} extra`}>
                                    <ClampLines
                                        text={description}
                                        lines="3"
                                        ellipsis='...'
                                        moreText='SHOW MORE'
                                        lessText='SHOW LESS'
                                        className='clamp'
                                    />
                                </div>
                            </div>
                        </div> 
                    </div>
                    
                    <div className='column moveButton'><button className={`${color} ui red button`}>SUBSCRIBE {numShortener(subscriberCount)}</button></div>
                </div>
                
                    
                
                <div className='ui divider font'></div>
                <h3 className={`${color} details-text`}>{Number(commentCount).toLocaleString()} Comments &thinsp; &thinsp; &thinsp; &thinsp; <span className={color}><i className='sort amount up icon'/>SORT BY</span></h3>
            </div>
            <Comments />
        </div>
    )
}

const mapStateToProps = state => {
    return{
        videoId: state.selectedVideo.id.videoId,
        publishedAt: state.videoDetails.snippet.publishedAt,
        title: state.selectedVideo.snippet.title,
        viewCount: state.videoDetails.statistics.viewCount,
        likeCount: state.videoDetails.statistics.likeCount,
        dislikeCount: state.videoDetails.statistics.dislikeCount,
        url: state.videoDetails.snippet.thumbnails.default.url,
        channelTitle: state.videoDetails.snippet.channelTitle,
        description: state.videoDetails.snippet.description,
        subscriberCount: state.channelInfo.statistics.subscriberCount,
        commentCount: state.videoDetails.statistics.commentCount,
        color: state.color,
    }
}

VideoDetail.propTypes = {
    publishedAt: PropTypes.string, 
    videoId: PropTypes.string, 
    title: PropTypes.string, 
    viewCount: PropTypes.string, 
    url: PropTypes.string, 
    channelTitle: PropTypes.string, 
    description: PropTypes.string, 
    commentCount: PropTypes.string, 
    subscriberCount: PropTypes.string,
    color: PropTypes.string,
}

export default connect(mapStateToProps, null)(VideoDetail);