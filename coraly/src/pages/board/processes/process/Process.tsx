import React from "react";
import ProcessHeader from "./ProcessHeader";
import ProcessTable from "./ProcessTable";
import ProcessToolbar from "./ProcessToolbar";

function Process() {
  return (
    <div>
      <ProcessToolbar />
      <ProcessHeader />
      <ProcessTable />
    </div>
  );
}

export default Process;
