import { Switch, Route } from "react-router-dom";

import DigitalAgencyLandingPage from "../Digital Agency Landing Page/DigitalAgencyLandingPage";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <DigitalAgencyLandingPage />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
