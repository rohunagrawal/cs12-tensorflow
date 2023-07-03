import * as React from 'react';
import {useParams} from 'react-router-dom';
import allPosts from './allPosts';

function PostPage(props) { 
    let params = useParams();
    const post = allPosts.find(post => post.id === params.id)

    return (
        <div>
            <h1>{post.title}</h1>
            <h3>{post.tag}</h3>
            <p>{post.body}</p>
        </div>
    )
}

export default PostPage;