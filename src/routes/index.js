import React from "react";
import { Switch , Route } from "react-router-dom";
import AddLeads from "./AddLead/AddLeads";

const Routes = () => {
    return (
        <Switch>
            <Route path="/addleads">
                <AddLeads />
            </Route>
        </Switch>
    )}

export default React.memo(Routes)