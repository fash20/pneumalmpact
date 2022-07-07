import { ThemeProvider } from "@material-ui/core";
import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import { theme } from "./components/utils/UIThemes";
import { Router } from "./Router";
import store from "./components/utils/store";
import UserNav from "./components/nav/UserNav";
import SideNav from "./components/nav/SideNav";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <div className="relative flex flex-col">
            <Navbar />
            {/* <UserNav /> */}
            <div className="">
              {/* <SideNav /> */}
              {/* <Router /> */}
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
