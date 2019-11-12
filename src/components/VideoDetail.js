import React from 'react';
import Comments from './Comments';
import './styles/VideoDetail.css';
import ClampLines from 'react-clamp-lines';
import {connect} from 'react-redux';

const VideoDetail = ({publishedAt, videoId, title, videoDetails, viewCount, likeCount, dislikeCount, url, channelTitle, description, commentCount, comments, subscriberCount}) => {
    //Format Date here
    const date = new Date(publishedAt);

    const getStringMonth = number => {
        switch(number){
            case 0:
                return 'Jan'
            case 1:
                return 'Feb'
            case 2:
                return 'Mar'
            case 3:
                return 'Apr'
            case 4: 
                return 'May'
            case 5: 
                return 'Jun'
            case 6:    
                return 'Jul'
            case 7: 
                return 'Aug'
            case 8: 
                return 'Sep'
            case 9: 
                return 'Oct'
            case 10: 
                return 'Nov'
            case 11:
                return 'Dec'
            default:
                return ''
        }
    }

    const fullFormattedDate = getStringMonth(date.getMonth()) + ' ' + date.getDate() + ', ' + date.getFullYear();

    //Loading
    // if(){
    //     return (
    //         <div className="ui active inverted dimmer">
    //             <div className="ui text loader">Loading</div>
    //         </div>  
    //     )
    // }
    
    //iframe
    const videoSrc = `https://www.youtube.com/embed/${videoId}`

    //render
    return (
        <div>
            <div className='ui embed'>
                <iframe title='video player' src={videoSrc} />
            </div>
            <div className='ui segment videoDetail'>
                <div className='ui secondary pointing menu'>
                    <div className='item cutLeftPadding'>
                        <div className='content'>
                            <div className='header spacing'><h3>{title}</h3></div>
                            <div className='meta'><h3>{Number(viewCount).toLocaleString()} views</h3></div>
                        </div>
                    </div>
                    <div className='right menu'>
                        <a className='active item' href='#'><i className='thumbs grey up icon'/>{likeCount.toLocaleString()}</a>
                        <a className='item' href='#'><i className='thumbs grey down icon'/>{dislikeCount.toLocaleString()}</a>
                        <a className='item' href='#'><i className='share grey icon'/>Share</a>
                        <a className='item' href='#'><i className='plus grey icon'/>Save</a>
                        <a className='item' href='#'><i className='ellipsis horizontal grey icon'/></a>
                    </div>
                </div>
                
               
                <div className='ui two column grid'>
                    <div className='ui feed column'>
                        <div className='ui event'>
                            <div className='label'><img src={url} alt='Channel Avatar'/></div>
                            <div className='content'>
                                <div className='summary'>{channelTitle}</div>
                                <div className='meta'>{`Published on ${fullFormattedDate}`}</div>
                                <div className='extra text'>
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
                    
                    <div className='column moveButton'><button className='ui red button'>SUBSCRIBE {subscriberCount}</button></div>
                </div>
                
                    
                
                <div className='ui divider font'></div>
                <h3>{Number(commentCount).toLocaleString()} Comments &thinsp; &thinsp; &thinsp; &thinsp; <span><i className='sort amount up icon'/>SORT BY</span></h3>
            </div>
            <Comments comments={comments} getStringMonth={getStringMonth} />
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
    }
}

export default connect(mapStateToProps, null)(VideoDetail);