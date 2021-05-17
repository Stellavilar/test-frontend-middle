import React , { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

export default function Products({ beer }) {
    //State for onClick button management : if product is added to cart, display remove button and so on
    const [ added, setAdded ] = useState(false);

    function addToCart() {
        setAdded(false);
    };

    function removeFromCart() {
        setAdded(true);
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
                <Button variant="contained" color="secondary" onClick={addToCart}>REMOVE FROM CART</Button> :
                <Button variant="contained" color="primary" onClick={removeFromCart}>ADD TO CART</Button>
                }
            </Card>
        </article>
    );
};
