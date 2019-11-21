import React from 'react';
import ClampLines from 'react-clamp-lines';
import {connect} from 'react-redux';

import './Comments.scss';


const Comments = props => {
    return(
        <div className='ui segment commentss'>
            <div className='ui comments'>
                {props.comments.map((comment) => {

                    const data = comment.snippet.topLevelComment.snippet;
                    const date = new Date(data.publishedAt) //formatting dates
                    const fullFormattedDate = props.getStringMonth(date.getMonth()) + ' ' + date.getDate() + ', ' + date.getFullYear();

                    return(
                        <div key={comment.id} className='comment bottomSpacing'>
                            <div className='avatar'>
                                <img src={data.authorProfileImageUrl} alt={data.authorDisplayName} />
                            </div>
                            <div className='content'>
                                <div className={`author ${props.color}`}>
                                    {data.authorDisplayName}
                                    <span className='metadata'>
                                        <span className={`date ${props.color}`}>
                                            {fullFormattedDate}
                                        </span>
                                    </span>
                                </div> 
                                <div className={`text ${props.color}`}>
                                    <ClampLines
                                        text={data.textOriginal}  
                                        lines='4'
                                        ellipsis='...'
                                    />
                                </div>
                                <div className='actions'>
                                    <div className={`spacing ${props.color}`}>
                                        <i className='thumbs up icon'/> {data.likeCount || ''} <i className='thumbs down icon'/>
                                        <span>REPLY</span>
                                    </div>
                                    <div>{comment.replies ? `View ${comment.replies.comments.length} replies` : ''}{comment.replies ? <i className='angle down icon'/> : ''}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}    
            </div>   
        </div>
    );
};

const mapStateToProps = state => {
    return{
        comments: state.comments,
        color: state.color,
    }
}

export default connect(mapStateToProps)(Comments);