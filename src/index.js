import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import RouterApp from "./RouterApp";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../src/context/AuthContext";
import * as fb from "firebase/app";
import { firebaseConfig } from "./base";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

fb.initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <AuthProvider>
          <RouterApp />
        </AuthProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
