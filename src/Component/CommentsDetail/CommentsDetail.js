import React from 'react';
import './CommentsDetail.css'

const CommentsDetail = (props) => {
    // console.log(props, "click now");
    const {email, body} = props.comments;
    return (
        <div className="commentsStyle">
            {/* <h3>comments now</h3> */}
            <h3>{email}</h3>
            <p>{body}</p>
        </div>
    );
};

export default CommentsDetail;