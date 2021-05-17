import React, { useState, useEffect } from 'react';
import Products from './Products';
import axios from 'axios';

export default function List() {

    //Get beers from API
    const [ beers, setBeers ] = useState([]);

    //Fetch all beers
    useEffect(() => {
        axios.get('beers')
            .then((res) => {
                setBeers(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    return (
        <div className="container">
            <div className="content">
                { beers.map((beer, index) => 
                    <Products key={beer.id} beer={beer} index={index} />
                )}
            </div>
        </div>
    );
};
