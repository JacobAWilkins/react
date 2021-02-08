import React from 'react';
import Articles from '../Components/Articles';

function Sports({ API_KEY, NEWS_URL }) {
    const req = NEWS_URL + '&category=sports' + API_KEY;
    return (
        <div>
            <h1>Sports News: </h1>
            <Articles req={req}/>
        </div>
    )
}

export default Sports;