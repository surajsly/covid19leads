import React from "react";
import { Switch, Route } from "react-router-dom";
import AddLeads from "./AddLead/AddLeads";
import FindLeads from "./FindLeads/FindLeads";
import HomePage from "./HomePage/HomePage";
import Resources from "./Resourses/Resourses";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route path="/addleads">
        <AddLeads />
      </Route>

      <Route path="/findLeads">
        <FindLeads />
      </Route>

      <Route path="/resourses">
        <Resources />
      </Route>
    </Switch>
  );
};

export default React.memo(Routes);
