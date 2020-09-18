import React, { useEffect, useState } from 'react';
import PostDetail from '../PostDetail/PostDetail';

const Post = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div>
      
            {
                posts.map(post => <PostDetail 
                    posts= {post}></PostDetail>)
            }
        </div>
    );
};

export default Post;