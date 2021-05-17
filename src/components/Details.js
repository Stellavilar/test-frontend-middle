import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router';
import {Card, CardContent} from '@material-ui/core';
import axios from 'axios';


export default function Details() {
    //Display beer details
   const [ beer, setBeer ] = useState({});
   //Get id on the url params
   let {id} = useParams();

   useEffect(() => {
     //Get beers by id
    axios.get(`beers/${id}`)
     .then((res) => {
         setBeer(res.data[0]);
     })
     .catch((err) => {
         console.log(err)
     });
   },[id]);

    return (
        <div className="container">
            <div className="content">
                <article>
                    <Card style={{width: '70%', height:'90%'}}>
                        <img style={{width: '100px'}} src={beer.image_url} alt="beer" />
                        <CardContent>
                            <h2 style={{textAlign: 'center', fontSize:'1.8em'}}> {beer.name} </h2>
                            <h4>Ingredients:</h4>
                            <div className="ingredients">
                                <div className="ingr-part">
                                    <h3 >Malt :</h3>
                                    { beer.ingredients ? beer.ingredients.malt.map((ing, index) => 
                                            <li key={index}> {ing.name} : <span style={{fontStyle:'italic', color:'grey'}}>{ing.amount.value} {ing.amount.unit}</span></li>
                                        ) : null }
                                 </div>
                                <div className="ingr-part">
                                    <h3>Hops :</h3>
                                    { beer.ingredients ? beer.ingredients.hops.map((hop, index) => 
                                            <li  key={index}> {hop.name}: <span style={{fontStyle:'italic', color:'grey'}}>{hop.amount.value} {hop.amount.unit}</span> </li>
                                    ) : null}
                                </div>
                            </div>
                       <h4>Brewers Tips:</h4>
                        <p style={{fontStyle: 'italic'}}>"{beer.brewers_tips}"</p>
                        <p style={{fontStyle: 'italic', color:'grey'}}><span>By</span> {beer.contributed_by} </p>
    
                        </CardContent>
                    </Card>
                </article>
            </div>
        </div>
    );
};
