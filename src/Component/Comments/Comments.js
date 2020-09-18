import React, { useEffect, useState } from 'react';
import CommentsDetail from '../CommentsDetail/CommentsDetail';

const Comments = () => {
    const [comments, setComments] = useState([]);

    // const activateLasers =

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(data => setComments(data))
    }, []);
    return (
        <div>
            {
                comments.map(comment => <CommentsDetail comments={comment}></CommentsDetail>)
            }
        </div>
    );
};

export default Comments;