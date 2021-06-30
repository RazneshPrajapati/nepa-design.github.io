import { Switch, Route } from "react-router-dom";

import DigitalAgencyLandingPage from "../Digital Agency Landing Page/DigitalAgencyLandingPage";
import MainMenu from "../MainMenu";
import TravelWebsiteHomePage from "../Travel Website Home Page/TravelWebsiteHomePage";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <MainMenu />
        </Route>
        <Route exact path="/digitalAgencyLandingPage">
          <DigitalAgencyLandingPage />
        </Route>
        <Route exact path="/travelWebsiteHomePage">
          <TravelWebsiteHomePage />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
