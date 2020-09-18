import React from 'react';
import Button from '@material-ui/core/Button';
import './PostDetail.css';
import { Link } from 'react-router-dom';
import Comments from '../Comments/Comments';


const PostDetail = (props) => {
    const {title, body, id} = props.posts;
    return (
        <div className="postStyle">
            {/* <h2>Post Detail comming soon</h2> */}
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>
            <Link to={`/Comments/${id}`}>
                <Button variant="contained" color="secondary">
                        Continue
                </Button>
            </Link>
        </div>
    );
};

export default PostDetail;