import React from "react";
import { Toggle } from "../../containers/darkmode";
import Followus from "../Followus";
import TabBar from "../TabBar";

function Application() {
  return (
    <div>
      <Toggle />
      <TabBar />
      <Followus />
    </div>
  );
}

export default Application;
