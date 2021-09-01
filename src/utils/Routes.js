import { Switch, Route } from "react-router-dom";

import DigitalAgencyLandingPage from "../Digital Agency Landing Page/DigitalAgencyLandingPage";
import MainMenu from "../MainMenu";
import TravelWebsiteHomePage from "../Travel Website Home Page/TravelWebsiteHomePage";
import FrequencyUI from "../FrequencyUI/FrequencyUI";
import RailroadTravelersHomepage from "../Railroad Travelers Homepage/RailroadTravelersHomepage";

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
        <Route exact path="/frequencyUI">
          <FrequencyUI />
        </Route>
        <Route exact path="/railroadTravelersHomepage">
          <RailroadTravelersHomepage />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
