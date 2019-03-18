import React from 'react';
import Comments from './Comments';
import './VideoDetail.css';
import ClampLines from 'react-clamp-lines';

const VideoDetail = (props) => {
    //Format Date here
    const date = new Date(props.videoDetails.snippet ? props.videoDetails.snippet.publishedAt : 0);

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
    if(!props.video){
        return <div>Loading...</div>;
    }

    //iframe
    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`

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
                            <div className='header spacing'><h3>{props.video.snippet.title}</h3></div>
                            <div className='meta'><h3>{Number(props.videoDetails.statistics.viewCount).toLocaleString()} views</h3></div>
                        </div>
                    </div>
                    <div className='right menu'>
                        <a className='active item' href='#'><i className='thumbs grey up icon'/>{props.videoDetails.statistics.likeCount.toLocaleString()}</a>
                        <a className='item' href='#'><i className='thumbs grey down icon'/>{props.videoDetails.statistics.dislikeCount.toLocaleString()}</a>
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
                                <div className='meta'>{`Published on ${fullFormattedDate}`}</div>
                                <div className='extra text'>
                                    <ClampLines
                                        text={props.videoDetails.snippet.description}
                                        lines='3'
                                        ellipsis='...'
                                        moreText='SHOW MORE'
                                        lessText='SHOW LESS'
                                        className='clamp'
                                    />
                                </div>
                            </div>
                        </div> 
                    </div>
                    
                    <div className='column moveButton'><button className='ui red button'>SUBSCRIBE {props.subscriberCount}</button></div>
                </div>
                
                    
                
                    
                
                <div className='ui divider font'></div>
                <h3>{Number(props.videoDetails.statistics.commentCount).toLocaleString()} Comments &thinsp; &thinsp; &thinsp; &thinsp; <span><i className='sort amount up icon'/>SORT BY</span></h3>
            </div>
            <Comments comments={props.comments} getStringMonth={getStringMonth} />
        </div>
    )
}

export default VideoDetail;