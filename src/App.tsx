import { ThemeProvider } from "evergreen-ui";
import React from "react";
import "./App.css";
import AuthContainer from "./components/authentication/AuthContainer";
import Navbar from "./components/nav/Navbar";
import { uiTheme } from "./components/utils/UIThemes";
import { useScreenSize } from "./components/utils/useScreenSize";

function App() {
  const screenSize = useScreenSize();
  return (
    <ThemeProvider value={uiTheme}>
      <Navbar />
      <div>
        <AuthContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
