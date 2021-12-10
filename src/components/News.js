import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

export default function News() {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage, setNewsPerPage] = useState(10)

    const [active, setActive] = useState(false);

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://cryptocurrency-news-live.p.rapidapi.com/crypto-news',
            headers: {
                'x-rapidapi-host': 'cryptocurrency-news-live.p.rapidapi.com',
                'x-rapidapi-key': 'd82d8cc75bmshc07b9ac0dd8b90dp1a6bdbjsn6a6323be1f18'
            }
        };

        axios.request(options).then((response) => {
            setArticles(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [])

    const indexOfLastArtcl = currentPage * newsPerPage;
    const indexOfFirstArtcl = indexOfLastArtcl - newsPerPage;
    const currentArtcl = articles.slice(indexOfFirstArtcl, indexOfLastArtcl);

    const paginate = (pageNumbers) => {
        setCurrentPage(pageNumbers)
        setActive(true)
    }

    return (
        <div className="newsContent">
            <h2 className="newsTitle">News</h2>
            {currentArtcl.map((artcl, index) => (
                <div key={index}>
                    <a
                        href={artcl.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p>{artcl.title}</p>
                    </a>
                </div>))}
            <Pagination
                newsPerPage={newsPerPage}
                totalNews={articles.length}
                paginate={paginate}
                active={active}
                currentPage={currentPage}
            />
        </div>
    )
}
