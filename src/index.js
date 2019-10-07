import React from "react";
import ReactDOM from "react-dom";

// import SettingsContext from './context/settings.js';

// import App from './app.js';
import App from "./newApp.js";

class Main extends React.Component {
  render() {
    return (
      <>
        <App />
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
