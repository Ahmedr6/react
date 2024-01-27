import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Comp3() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="facebook.png" />
      <Card.Body>
        <Card.Title>twitter </Card.Title>
        <Card.Text>
          Facebook was founded in 2004 by Mark Zuckerberg, Eduardo Saverin,
          Dustin Moskovitz, and Chris Hughes, all of whom were students at
          Harvard University. Facebook became the largest social network in the
          world, with nearly three billion users as of 2021, and about half that
          number were using Facebook every day.
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

export default Comp3;
