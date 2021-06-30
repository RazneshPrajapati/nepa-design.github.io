import { Switch, Route } from "react-router-dom";

import DigitalAgencyLandingPage from "../Digital Agency Landing Page/DigitalAgencyLandingPage";
import TravelWebsiteHomePage from "../Travel Website Home Page/TravelWebsiteHomePage";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/digitalAgencyLandingPage">
          <DigitalAgencyLandingPage />
        </Route>
        <Route exact path="/">
          <TravelWebsiteHomePage />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
