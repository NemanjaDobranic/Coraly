import React, { useEffect, useState } from "react";
import useApi, { HttpMethods } from "../../../../hooks/useApi";
import ProcessHeader from "./ProcessHeader";
import ProcessTable from "./ProcessTable";
import ProcessToolbar from "./ProcessToolbar";
import { ICard } from "./ProcessTable";
import CoralyProgress from "../../../../components/CoralyProgress";
import CoralyAlert, { ICoralyAlert } from "../../../../components/CoralyAlert";
import { Outlet, useNavigate } from "react-router-dom";
import { Box, styled } from "@mui/material";

const ProcessWrapper = styled(Box)({
  position: "relative",
  height: "calc(100% - 150px)",
});

function Process() {
  const [{ loading, response, error }] = useApi(
    {
      path: `/cards`,
      options: {
        method: HttpMethods.GET,
      },
    },
    true
  );
  const [cards, setCards] = useState<ICard[] | null>(null);
  const [alert, setAlert] = useState<ICoralyAlert>({
    color: undefined,
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setAlert({ color: "error", message: "Something went wrong" });
      setShowAlert(true);
      return;
    }

    if (response) {
      setCards(response);
    }
  }, [response, error]);

  const openInfoForm = () => {
    navigate("./info");
  };

  return loading ? (
    <CoralyProgress />
  ) : !showAlert && cards ? (
    <>
      <ProcessToolbar openInfo={openInfoForm} />
      <ProcessWrapper>
        <>
          <ProcessHeader openInfo={openInfoForm} />
          <ProcessTable cards={cards} />
        </>
        <Outlet />
      </ProcessWrapper>
    </>
  ) : (
    <CoralyAlert
      {...alert}
      changeVisibility={(isVisible) => setShowAlert(isVisible)}
    />
  );
}

export default Process;
