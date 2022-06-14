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
      <div className="flex flex-col">
        <Navbar />
        <div className="py-16">
          <Router />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
