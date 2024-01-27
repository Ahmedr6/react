import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Comp2() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="Untitled.jpeg" />
      <Card.Body>
        <Card.Title>twitter </Card.Title>
        <Card.Text>
          Instagram is a free photo and video sharing app available on iPhone
          and Android. People can upload photos or videos to our service and
          share them with their followers or with a select group of friends.
          They can also view, comment and like posts shared by their friends on
          Instagram.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Comp2;
