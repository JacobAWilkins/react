import React from 'react';
import Articles from '../Components/Articles';

function Technology({ API_KEY, NEWS_URL }) {
    const req = NEWS_URL + '&category=technology' + API_KEY;
    return (
        <div>
            <h1>Technology News: </h1>
            <Articles req={req}/>
        </div>
    )
}

export default Technology;