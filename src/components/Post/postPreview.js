import * as React from 'react';
import allPosts from './allPosts';

function PostPreview(props) { 
    const post = allPosts.find(post => post.id === props.id)

    return (
        <div class = "post-preview">
            <div class = "post-preview-body">
                <h1>{post.title}</h1>
                Tags: {post.tag}
                <p>{post.body}</p>
            </div>
            
        </div>
    )
}

export default PostPreview;