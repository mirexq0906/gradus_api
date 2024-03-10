import React from 'react';
import { Link, useParams } from 'react-router-dom';
import CatalogSearch from '../containers/search/catalogSearch';
const Search = () => {
    const params = useParams();
    return (
        <main className="search-page">
            <CatalogSearch />
        </main>
    );
};

export default Search;