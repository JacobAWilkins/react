import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from './Article';

function Articles({ req }) {
    const [articles, setArticles] = useState([]);

    useEffect(()=> {
        axios
            .get(req)
            .then(res => {
                const data = res.data;
                setArticles([...data.articles]);
            });
    },[req])

    return (
        <div className="articles">
            {articles.map((article, index) =>
                <Article 
                    key={index}
                    title={article.title}
                    source={article.source.name}
                    author={article.author}
                    description={article.description}
                    url={article.url}
                    urlToImage={article.urlToImage}
                    content={article.content}
                />
            )}
        </div>
    )
}

export default Articles;