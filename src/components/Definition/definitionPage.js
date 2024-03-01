import * as React from 'react';
import {useParams} from 'react-router-dom';
import allDefinitions from './allDefinitions.js';

function DefinitionPage(props) { 
    let params = useParams();
    const post = allDefinitions.find(post => post.id === params.id)

    return (
        <div className={"container"}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default DefinitionPage;