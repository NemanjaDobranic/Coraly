import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./config/routes";

const App: React.FC = () => {
  return <div className="App">{useRoutes(routes)}</div>;
};

export default App;
