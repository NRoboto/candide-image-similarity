import { Route, Switch } from "react-router-dom";
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
