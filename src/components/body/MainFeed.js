import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import AddSesh from "./addSesh/AddSesh";
import SeshList from "./seshList/SeshList";
import SingleSesh from "./SingleSesh";

function MainFeed() {
  const [seshes, setSeshes] = useState([]);

  return (
    <div className="w-7/12 flex flex-col items-center justify-center m-auto space-y-5 mt-5">
      <Switch>
        <Route path="/" exact>
          <AddSesh seshes={seshes} setSeshes={setSeshes} />
          <SeshList seshes={seshes} setSeshes={setSeshes} />
        </Route>
        <Route path="/sesh/:seshId">
          <SingleSesh />
        </Route>
      </Switch>
    </div>
  );
}

export default MainFeed;
