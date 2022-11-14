import React, { useEffect } from "react";
import { userKey } from "../../config/localStorageKeys";
import useLocalStorage from "../../hooks/useLocalStorage";
import Board from "../../layouts/board/Board";
import { Navigate, useNavigate } from "react-router";
import { setWorkSpace } from "../../redux";
import useApi, { HttpMethods } from "../../hooks/useApi";
import { useDispatch } from "react-redux";
import CoralyProgress from "../../components/CoralyProgress";

const BoardContainer = () => {
  const [user] = useLocalStorage(userKey);
  const [{ loading, response, error }, getWorkspace] = useApi();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      getWorkspace("/workspaces?userId=" + user.id, {
        method: HttpMethods.GET,
      });
    }
  }, [user]);

  useEffect(() => {
    if (response) {
      const workspace = response[0];
      dispatch(setWorkSpace(workspace));
    }

    if (error) {
      navigate("/login");
    }
  }, [response, error]);

  return user ? (
    response ? (
      <Board user={user} workspace={response[0]} />
    ) : (
      <CoralyProgress />
    )
  ) : (
    <Navigate to="/login" />
  );
};

export default BoardContainer;
