import {Provider as StoreProvider} from "react-redux";
import store from "../../store";
import {ThemeProvider as MuiThemeProvider} from "@material-ui/styles";
import theme from "../../theme";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "../../Routes";
import React from "react";


export default function App() {
  return (
    <StoreProvider store={store}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <Routes/>
        </Router>
      </MuiThemeProvider>
    </StoreProvider>
  );
}