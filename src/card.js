import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useStart } from 'react' ; 

function cardcomp(props){
let [counter , setcounter] = useStart(0)
function addToFavorites(){
  setcounter(counter+1)
}
return(
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.descrption}
        </Card.Text>
        ★ (counter)
        <Button variant="primary">Add to favorites</Button>
      </Card.Body>
    </Card>
    )
}
export default cardcomp;
