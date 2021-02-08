import React from 'react';
import Articles from '../Components/Articles';

function Headlines({ API_KEY, NEWS_URL }) {
    const req = NEWS_URL + API_KEY;
    return (
        <div>
            <h1>Headline News: </h1> 
            <p>This should be on the main home page</p>
            <Articles req={req}/>
        </div>
    )
}

export default Headlines;