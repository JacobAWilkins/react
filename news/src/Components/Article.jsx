import React from 'react';

function Article({ title, source, author, description, url, urlToImage }) {
    return (
        <article>
            <header>
                <h2 width="85%"><a className="title" target="_blank" href={url}>{title}</a></h2>
                <h4>{source}</h4>
                <a target="_blank" href={url}><img width="85%" src={urlToImage} alt={title}/></a>
            </header>
            <main>
                <section className="descr">
                    <p>{description}</p>
                </section>
                <section>
                    <p className="author">- {author}</p>
                </section>
            </main>
        </article>
    )
}

export default Article;