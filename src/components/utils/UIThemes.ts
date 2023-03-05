import { createTheme } from "@mui/material/styles";
import { amber, blue, red } from "@material-ui/core/colors";
import inter from "../assets/fonts/Inter/static/Inter-Regular.ttf";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    pneumaBlue: true;
    pneumaRed: true;
    pneumaWhite: true;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 400,
      sm: 640,
      md: 830,
      lg: 1024,
      xl: 1280,
     },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "pneumaBlue" },
          style: {
            textTransform: "none",
            backgroundColor: "#2F327D",
            color: "#FFF", 
            '&:hover': {
              background: "#40428d",
           },
          },
        },
        {
          props: { variant: "pneumaRed", },
          style: {
            backgroundColor:'#FF5364',
            color: "#FFF",
            '&:hover': {
              background: "#ff6978",
           }, 
          },
          
        },
        {
          props: { variant: "pneumaWhite", },
          style: {
            backgroundColor:'#FFF',
            color: "#2F327D",
            '&:hover': {
              background: "#f2f2f2",
           }, 
          },
          
        },
       
      ],
    },
  },
  palette: {
    primary: {
      main: "#2F327D",
    },
    secondary: {
      main: "#FFF",
    },
    error: {
      main: "#FF5364",
    },
    success:{
      main:'#4DC591'
    }
  },
  typography: {
    fontFamily: ["inter", "Roboto"].join(","),
    button: {
      textTransform: "none",
    },
  },
});

export const BrandButtonStyle = {
  height: 50,
  borderRadius: 50,
};
export const TabButtonStyle = {
  height: 40,
  borderRadius: 5,
};
