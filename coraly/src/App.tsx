import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./config/routes";
import { Provider } from "react-redux";
import store from "./redux/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">{useRoutes(routes)}</div>
    </Provider>
  );
};

export default App;
