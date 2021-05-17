import React , { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {useCart }from '../context/CartContext';

export default function Products({ beer }) {
    //State for onClick button management : if product is added to cart, display remove button and so on
    const [ added, setAdded ] = useState(false);
    //Add products into cart and save it into localStorage;
    const { addProducts } = useCart();

    function addToCart(item) {
        addProducts(item);
        console.log(localStorage.getItem('cart'))
        setAdded(true);
    };

    function removeFromCart() {
        setAdded(false);
    };

    return (
        <article>
            <Card style={ added ? { backgroundColor: '#edeae8'} : { backgroundColor: '#ffffff'}}>
                <CardMedia
                    image={beer.image_url}
                    title="Beer image"
                />
                { added ? <p className="card-badge" style={{color: 'green', textAlign: 'center'}}>
                    Added to cart!
                </p> : null}
                <CardContent>
                    <h2> {beer.name} </h2>
                    <h3> Vol: {beer.volume.value} {beer.volume.unit} </h3>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        See more
                    </Button>
                </CardActions>
                { added ? 
                <Button variant="contained" color="secondary" onClick={removeFromCart}>REMOVE FROM CART</Button> :
                <Button variant="contained" color="primary" onClick={() => addToCart(beer)}>ADD TO CART</Button>
                }
            </Card>
        </article>
    );
};
