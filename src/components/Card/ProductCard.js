import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './productCard.css';

const ProductCard = ({
  title, cardBody, actionButton, price,
}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://mui.com/static/images/cards/contemplative-reptile.jpg" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {cardBody}
        </Card.Text>
        <Card.Text>
          {price}
        </Card.Text>
        <Button variant="primary">{actionButton}</Button>
        <button className='shopIcon'><img src='https://icongr.am/fontawesome/shopping-cart.svg?size=24&color=3c86ff'/></button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
