import React from 'react';
import faker from 'faker';

const Comments = props => {
    console.log(props.comments)
    return(
        <div className='ui segment'>
            <h4>Comments</h4>
            <div className='ui comments'>
                {props.comments.map((comment) => {
                    return(
                        <div className='comment'>
                            <a className='avatar'>
                                <img src={faker.image.avatar()}/>
                            </a>
                            <div className='content'>
                                <a className='author'>{comment.snippet.topLevelComment.snippet.authorDisplayName}</a>
                                <div className='metadata'>
                                    <div className='date'>{comment.snippet.topLevelComment.snippet.publishedAt}</div>
                                </div>
                                <div className='text'>
                                    {comment.snippet.topLevelComment.snippet.textOriginal}
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