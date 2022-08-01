import { ThemeProvider } from '@mui/material/styles';
import React, { useState } from "react";
import { Provider} from "react-redux";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import { theme } from "./components/utils/UIThemes";
import { Router } from "./Router";
import store from "./components/store/store";
import UserNav from "./components/nav/UserNav";
import SideNav from "./components/nav/SideNav";
import { BrowserRouter, useParams } from "react-router-dom";
import Footer from "./components/nav/Footer";


function App() {


  console.log(window.location.pathname)

  const isHomeNavVisibile = () => {
    switch(window.location.pathname){
      case '/': return true
      
      case '/login': return true

      case '/signup': return true

      case '/passwordreset': return true

      default: return false
    }
  }
  const [showHomeNav, setShowHomeNav] = useState(isHomeNavVisibile() );

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <div className="relative flex flex-col w-full">
            {
              showHomeNav &&   <Navbar />
            }
              <Router />
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
