import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router';
import {Card, CardContent} from '@material-ui/core';
import axios from 'axios';
import {useCart} from '../context/CartContext';


export default function Details() {
    //Display beer details
   const [ beer, setBeer ] = useState({});
   //Get id on the url params
   let {id} = useParams();
   //Get cart array:
   const { cartContents } = useCart();
   //Management of the card background color to say that the card has been added to cart:
    const [ added, setAdded ] = useState(false);

   useEffect(() => {
     //Get beers by id
    axios.get(`beers/${id}`)
     .then((res) => {
         setBeer(res.data[0]);
     })
     .catch((err) => {
         console.log(err)
     });
     //Check if this item has been added to cart: 
    //1. If the cart is filled check into it if there is an id similar to the id of the current item:
    if(cartContents) {
        // eslint-disable-next-line eqeqeq
        if(cartContents.find( el => el.id == id )) {
            //If there is the same id, so this card has been added to card
            return setAdded(true) 
        } else {
            //If the id is not present into the cart, the card has not been added to the cart
            return setAdded(false) 
        };
    };
   },[id, cartContents]);

    return (
        <div className="container">
            <div className="content">
                <article>
                    <Card  style={ added ? { backgroundColor: '#edeae8', width: '70%', height:'90%'} : { backgroundColor: '#ffffff', width: '70%', height:'90%'}}>
                        <img style={{width: '100px'}} src={beer.image_url} alt="beer" />
                        { added ? 
                        <p className="card-badge" style={{color: 'green', textAlign: 'center'}}>
                            Added to cart!
                        </p> 
                        : null}
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
