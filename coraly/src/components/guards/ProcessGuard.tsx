import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import useApi from "../../hooks/useApi";
import Process from "../../pages/board/processes/process/Process";
import { IRootState } from "../../redux/rootReducer";
import { Navigate } from "react-router";
import CoralyProgress from "../CoralyProgress";
import { setActiveProcess } from "../../redux";

function ProcessGuard() {
  const { pathname } = useLocation();
  const { activeProcess } = useSelector((state: IRootState) => state.workSpace);
  const dispatch = useDispatch();
  const [{ response, error }, getProcess] = useApi();
  const navigate = useNavigate();

  useEffect(() => {
    if (response) {
      dispatch(setActiveProcess(response));
      navigate(1);
    }

    if (error) {
      dispatch(setActiveProcess(undefined));
      navigate(-1);
    }
  }, [response, error]);

  useEffect(() => {
    if (!activeProcess) {
      const urlArray = pathname.split("/");
      const processId = urlArray[urlArray.indexOf("processes") + 1];
      getProcess("/processes/" + processId);
    }
  }, [activeProcess]);
  return activeProcess ? <Process /> : <CoralyProgress />;
}

export default ProcessGuard;
