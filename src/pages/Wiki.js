import * as React from 'react';
import {useParams} from 'react-router-dom';

import toc from '../tableOfContents.json';

function Wiki(props) {
    let params = useParams();
    const tocData = () => JSON.parse(JSON.stringify(toc));

    return (
      <div>
        <h1>Useful Definitions and Theorems</h1>
        <Explorer toc={tocData()} subdir={params.subdir}></Explorer>
      </div>
      
    );
  }


function Explorer({toc, subdir}) {

    if(subdir === undefined) {
        return (
            <ul>
                {Object.keys(toc).map(section => <li><a href = {`./${idify(section)}`}>{section}</a></li>)}
            </ul>
            
        )
    }
    
    
    
}

function idify(str) {
    return str.toLowerCase().replace(" ", "-")
}

export default Wiki;