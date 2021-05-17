import React, { useState, useEffect } from 'react';
import Products from './Products';
import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios';

export default function List() {

    //Get beers from API
    const [ beers, setBeers ] = useState([]);

    //Controlled pagination
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
      setPage(value);
    };

    //Fetch all beers
    useEffect(() => {
        axios.get(`beers?page=${page}&per_page=9`)
            .then((res) => {
                setBeers(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [page]);

    return (
        <div className="container">
            <div className="content">
                { beers.map((beer, index) => 
                    <Products key={beer.id} beer={beer} index={index} />
                )}
                <Pagination count={9} onChange={handleChange} page={page} />
            </div>
        </div>
    );
};
