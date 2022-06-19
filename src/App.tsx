import { ThemeProvider } from "evergreen-ui";
import React from "react";
import "./App.css";
import AuthContainer from "./components/authentication/AuthContainer";
import Navbar from "./components/nav/Navbar";
import { uiTheme } from "./components/utils/UIThemes";
import { useScreenSize } from "./components/utils/useScreenSize";
import { Router } from "./Router";

function App() {
  const screenSize = useScreenSize();
  return (
    <ThemeProvider value={uiTheme}>
      <div className="flex flex-col side-img" style={{position: "relative"}}>
        <Navbar />
        <div className="">
          <Router />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
