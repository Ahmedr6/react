import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Component() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="twitter.png" />
      <Card.Body>
        <Card.Title>twitter </Card.Title>
        <Card.Text>
          Twitter is a free social networking site where users broadcast short
          posts known as tweets. These tweets can contain text, videos, photos
          or links. To access Twitter, users need an internet connection or
          smart phone to use the app or website, Twitter.com.
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

export default Component;
