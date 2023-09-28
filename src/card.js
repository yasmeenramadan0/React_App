import Card from 'react-bootstrap/Card';
import { useState } from 'react';


function cardcomp(props) {
  const [counter, setCounter] = useState(0);

  function addToFavorites() {
    setCounter(counter + 1);
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.descrption}</Card.Text>
        ★ ({counter})
        <Button variant="primary" onClick={addToFavorites}>
          Add to favorites
        </Button>
      </Card.Body>
    </Card>
    )
}
export default cardcomp;

