import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

export default function Products({ beer }) {
    return (
        <article>
            <Card>
                <CardMedia
                    image={beer.image_url}
                    title="Beer image"
                />
                <CardContent>
                    <h2> {beer.name} </h2>
                    <h3> Vol: {beer.volume.value} {beer.volume.unit} </h3>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        See more
                    </Button>
                </CardActions>
                <Button variant="contained" color="primary">ADD TO CART</Button>
            </Card>
        </article>
    );
};
