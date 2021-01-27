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

import { ImageViewPage } from "./pages/imageView";

function App() {
  return <ImageViewPage fileName="1.jpg" />;
}

export default App;
