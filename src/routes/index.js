import React from "react";
import { Switch, Route } from "react-router-dom";
import AddLeads from "./AddLead/AddLeads";
import FindLeads from "./FindLeads/FindLeads";

const Routes = () => {
  return (
    <Switch>
      <Route path="/addleads">
        <AddLeads />
      </Route>

      <Route path="/findLeads">
        <FindLeads />
      </Route>
    </Switch>
  );
};

export default React.memo(Routes);
