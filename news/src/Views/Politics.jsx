import React from 'react';
import Articles from '../Components/Articles';

function Politics({ API_KEY, NEWS_URL }) {
    const req = NEWS_URL + '&category=politics' + API_KEY;
    return (
        <div>
            <h1>Politics News: </h1>
            <Articles req={req}/>
        </div>
    )
}

export default Politics;