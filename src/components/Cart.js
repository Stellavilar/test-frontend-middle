import React from 'react';
import {Card, CardContent, CardMedia, CardActions, Button} from '@material-ui/core';
import { useCart } from '../context/CartContext';

function CartItem ({ beer }) {
    return (
        <article>
            <Card >
                <CardMedia
                    image={beer.image_url}
                    title="Beer image"
                />
                <CardContent>
                    <h2> {beer.name} </h2>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        See details
                    </Button>
                </CardActions>
            </Card>
        </article>
    );
}

export default function Cart() {
    //Get cart array stored into localStorage
    const {cartContents} = useCart();

    if(cartContents.length === 0) { 
        return (
            <div className="container">
            <div className="content">
                Your cart is empty
            </div>
        </div>
        );
    };

    return (
        <div className="container">
            <div className="content">
                { cartContents.map((item, index) => (
                    <CartItem
                        key={index}
                        beer={item}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};
