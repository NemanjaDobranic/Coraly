import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { IProcess } from "../../../../redux/workspace/workSpaceReducer";
import Process from "./Process";

function ProcessContainer() {
  const navigate = useNavigate();
  const [process, setProcess] = useState<IProcess | null>(null);
  const { state } = useLocation();

  useEffect(() => {
    !state ? navigate("../") : setProcess(state.process);
  }, []);

  return <Process />;
}

export default ProcessContainer;
