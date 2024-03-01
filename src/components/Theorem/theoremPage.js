import * as React from 'react';
import {useParams} from 'react-router-dom';
import allTheorems from './allTheorems.js';

function TheoremPage(props) { 
    let params = useParams();
    const post = allTheorems.find(post => post.id === params.id)

    return (
        <div className={"container"}>
            <h1>{post.title}</h1>
            <p><b><u>Theorem</u></b> {post.theorem}</p>
            <p><em><u>Proof</u></em> {post.proof}</p>
        </div>
    )
}

export default TheoremPage;