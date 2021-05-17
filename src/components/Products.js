import React , { useState, useEffect } from 'react';
import {Card, CardContent, CardMedia, CardActions, Button} from '@material-ui/core';
import {useCart }from '../context/CartContext';

export default function Products({ beer }) {
    //State for onClick button management : if product is added to cart, display remove button and so on
    const [ added, setAdded ] = useState(false);
    //Get cart array stored into localStorage:
    const { cartContents } = useCart();
    //Add products into cart and save it into localStorage;
    const { addProducts } = useCart();
    //Remove products from localstorage array
    const { removeProducts } = useCart();

    function addToCart(item) {
        addProducts(item);
    };

    function removeFromCart(index) {
        removeProducts(index)
    };

    useEffect(() => {
        //Management of the button and style state if the item is added to cart or not
        if(cartContents.find( x => x.id === beer.id)) {
            //Find item into localstorage array by its id
            return setAdded(true)
        }
        return setAdded(false)
    }, [cartContents, beer]);

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
                        See details
                    </Button>
                </CardActions>
                { added ? 
                <Button variant="contained" color="secondary" onClick={() => removeFromCart(beer.id)}>REMOVE FROM CART</Button> :
                <Button variant="contained" color="primary" onClick={() => addToCart(beer)}>ADD TO CART</Button>
                }
            </Card>
        </article>
    );
};
