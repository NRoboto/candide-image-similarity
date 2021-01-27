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

import { getRelevantImages } from "./utils/relevantImages";
import fileDescriptions from "./data/fileDescriptions.json";

type FileName = keyof typeof fileDescriptions;

// type FileDescription = typeof fileDescriptions[keyof typeof fileDescriptions];

type DisplayProps = {
  imgName: FileName;
};

const SmallDisplay = ({ imgName }: DisplayProps) => (
  <Card className="hover-card p-1 mb-2">
    <CardImg
      top
      width="100%"
      src={`/images/${imgName}`}
      alt=""
      className="display-small-img"
    />
    <CardBody>
      <CardTitle tag="h3">{fileDescriptions[imgName].title}</CardTitle>
    </CardBody>
  </Card>
);

const LargeDisplay = ({ imgName }: DisplayProps) => (
  <Card className="hover-card p-1">
    <CardImg top width="100%" src="/images/1.jpg" alt="" />
    <CardBody>
      <CardTitle tag="h3">{fileDescriptions["1.jpg"].title}</CardTitle>
      <hr />
      <CardText>
        {fileDescriptions["1.jpg"].description ?? "Description goes here"}
      </CardText>
      <hr />
      <CardSubtitle className="text-muted">
        Tags: {fileDescriptions["1.jpg"].tags.join(", ")}
      </CardSubtitle>
    </CardBody>
  </Card>
);

function App() {
  const relevantImages = getRelevantImages("1.jpg");

  return (
    <div
      id="main-container"
      className="container-xl d-flex flex-column flex-lg-row h-100 pt-4 pb-4"
    >
      <Col
        xs="12"
        lg="6"
        className="order-lg-1 d-flex flex-column justify-content-around"
      >
        <LargeDisplay imgName="1.jpg" />
      </Col>
      <h4 className="mt-4 d-lg-none">Similar Images</h4>
      <Col lg="3" className="d-flex flex-column justify-content-around">
        {relevantImages.slice(1, 4).map((id) => (
          <SmallDisplay imgName={id as any} />
        ))}
      </Col>
      <Col lg="3" className="order-2 d-flex flex-column justify-content-around">
        {relevantImages.slice(5, 8).map((id) => (
          <SmallDisplay imgName={id as any} />
        ))}
      </Col>
    </div>
  );
}

export default App;
