import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Col,
  Container,
  CardSubtitle,
} from "reactstrap";
import "../node_modules/bootswatch/dist/pulse/bootstrap.min.css";
import "./App.css";

import fileDescriptions from "./data/fileDescriptions.json";

function App() {
  return (
    <Container className="d-flex flex-column flex-md-row">
      <Col xs="12" md="6" className="order-md-1">
        <Card>
          <CardImg top width="100%" src="/images/1.jpg" alt="" />
          <CardBody>
            <CardTitle tag="h3">{fileDescriptions["1.jpg"].title}</CardTitle>
            <hr />
            <CardText>
              {fileDescriptions["1.jpg"].description ?? "Description goes here"}
            </CardText>
            <hr />
            <CardSubtitle className="text-muted">
              {fileDescriptions["1.jpg"].tags.join(", ")}
            </CardSubtitle>
          </CardBody>
        </Card>
      </Col>
      <Col md="3"></Col>
      <Col md="3" className="order-2"></Col>
    </Container>
  );
}

export default App;
