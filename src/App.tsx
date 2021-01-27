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

type DisplayProps = {
  imgName: FileName;
  expanded?: boolean;
};

const Display = ({ imgName, expanded }: DisplayProps) => {
  const description = fileDescriptions[imgName];

  return (
    <Card className={`hover-card p-1 ${expanded ? "" : "mb-2"}`}>
      <CardImg
        top
        width="100%"
        src={`/images/${imgName}`}
        alt=""
        className={expanded ? "" : "display-small-img"}
      />
      <CardBody>
        <CardTitle tag="h3">{description.title}</CardTitle>
        {expanded ? (
          <>
            <CardText>
              {description.description ?? "Description goes here"}
            </CardText>
            <hr />
            <CardSubtitle className="text-muted">
              Tags: {description.tags.join(", ")}
            </CardSubtitle>
            <hr />
          </>
        ) : (
          ""
        )}
      </CardBody>
    </Card>
  );
};

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
        <Display imgName="1.jpg" expanded />
      </Col>
      <h4 className="mt-4 d-lg-none">Similar Images</h4>
      <Col lg="3" className="d-flex flex-column justify-content-around">
        {relevantImages.slice(1, 4).map((fileName) => (
          <Display imgName={fileName} />
        ))}
      </Col>
      <Col lg="3" className="order-2 d-flex flex-column justify-content-around">
        {relevantImages.slice(5, 8).map((fileName) => (
          <Display imgName={fileName} />
        ))}
      </Col>
    </div>
  );
}

export default App;
