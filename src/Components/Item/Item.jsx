import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
//import prod from '../ItemListContainer';

const Item = ({products}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"products.img"} />
      <Card.Body>
        <Card.Title>{"products.name"}</Card.Title>
        <Card.Text>{"products.description"}</Card.Text>
        <Card.Text>$ {"products.price"}</Card.Text>
        <Button as = {Link} to ={`/Item/${"products.id"}`} variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  )
}

export default Item;
