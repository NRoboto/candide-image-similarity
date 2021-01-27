import { Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/home";

import { ImageViewPage } from "./pages/imageView";
import { NotFoundPage } from "./pages/notFound";
import { SoloImagePage } from "./pages/soloImage";

const App = () => (
  <Switch>
    <Route path="/" exact>
      <HomePage />
    </Route>
    <Route path="/image/:fileName">
      <ImageViewPage />
    </Route>
    <Route path="/view/:fileName">
      <SoloImagePage />
    </Route>
    <Route path="*">
      <NotFoundPage />
    </Route>
  </Switch>
);

export default App;
