import { Route, Switch } from "react-router-dom";
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
import { HomePage } from "./pages/home";

import { ImageViewPage } from "./pages/imageView";
import { NotFoundPage } from "./pages/notFound";

const App = () => (
  <Switch>
    <Route path="/" exact>
      <HomePage />
    </Route>
    <Route path="/image/:fileName">
      <ImageViewPage fileName="1.jpg" />
    </Route>
    <Route path="*">
      <NotFoundPage />
    </Route>
  </Switch>
);

export default App;
