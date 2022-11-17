import React, { useEffect, useState } from "react";
import useApi, { HttpMethods } from "../../../../hooks/useApi";
import ProcessHeader from "./ProcessHeader";
import ProcessTable from "./ProcessTable";
import ProcessToolbar from "./ProcessToolbar";
import { ICard } from "./ProcessTable";
import CoralyProgress from "../../../../components/CoralyProgress";
import CoralyAlert, { ICoralyAlert } from "../../../../components/CoralyAlert";

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

  return loading ? (
    <CoralyProgress />
  ) : !showAlert && cards ? (
    <>
      <ProcessToolbar />
      <ProcessHeader />
      <ProcessTable cards={cards} />
    </>
  ) : (
    <CoralyAlert
      {...alert}
      changeVisibility={(isVisible) => setShowAlert(isVisible)}
    />
  );
}

export default Process;
