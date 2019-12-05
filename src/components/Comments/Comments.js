import React from 'react';
import ClampLines from 'react-clamp-lines';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {formatDate} from '../../utils/formatDate';
import './Comments.scss';


const Comments = props => {

    const {comments, color } = props;

    return(
        <div className='ui segment commentss'>
            <div className='ui comments'>
                {comments.map((comment) => {
                    //proper data is deeply nested.
                    const data = comment.snippet.topLevelComment.snippet;
                    const fullFormattedDate = formatDate(data.publishedAt);
                    
                    return(
                        <div key={comment.id} className='comment bottomSpacing'>
                            <div className='avatar'>
                                <img src={data.authorProfileImageUrl} alt={data.authorDisplayName} />
                            </div>
                            <div className='content'>
                                <div className={`author ${color} details-text`}>
                                    {data.authorDisplayName}
                                    <span className='metadata'>
                                        <span className={`date ${color} details-text`}>
                                            {fullFormattedDate}
                                        </span>
                                    </span>
                                </div> 
                                <div className={`text ${color}`}>
                                    <ClampLines
                                        text={data.textOriginal}  
                                        lines='4'
                                        ellipsis='...'
                                    />
                                </div>
                                <div className='actions'>
                                    <div className={`spacing ${color} details-text`}>
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

Comments.propTypes = {
    color: PropTypes.string,
    comments: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Comments);