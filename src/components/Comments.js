import React from 'react';
import './Comments.css';

const Comments = props => {
    return(
        <div className='ui segment commentss'>
            <div className='ui comments'>
                {props.comments.map((comment) => {
                    return(
                        <div key={comment.id} className='comment bottomSpacing'>
                            <div className='avatar'>
                                <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt={comment.snippet.topLevelComment.snippet.authorDisplayName} />
                            </div>
                            <div className='content'>
                                <div className='author'>
                                    {comment.snippet.topLevelComment.snippet.authorDisplayName}
                                    <span className='metadata'>
                                        <span className='date'>
                                            {comment.snippet.topLevelComment.snippet.publishedAt}
                                        </span>
                                    </span>
                                </div> 
                                <div className='text'>
                                    {comment.snippet.topLevelComment.snippet.textOriginal}
                                </div>
                                <div className='actions'>
                                    <div className='spacing'>
                                        <i className='thumbs grey up icon'/> {comment.snippet.topLevelComment.snippet.likeCount ? comment.snippet.topLevelComment.snippet.likeCount : ''} <i className='thumbs grey down icon'/> REPLY
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
}

export default Comments;