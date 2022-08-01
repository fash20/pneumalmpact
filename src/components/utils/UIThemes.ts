import { createTheme } from "@mui/material/styles";
import { amber, blue, red } from "@material-ui/core/colors";
import inter from "../assets/fonts/Inter/static/Inter-Regular.ttf";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    pneumaBlue: true;
    pneumaRed: true;
    dashed: true;
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
          },
        },
        {
          props: { variant: "pneumaRed", },
          style: {
            backgroundColor:'#FF5364',
            color: "#FFF", 
          },
        },
        {
          props: { variant: "dashed" },
          style: {
            textTransform: "none",
          },
        },
        {
          props: { variant: "dashed" },
          style: {
            border: `4px dashed ${red[500]}`,
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
  height: 40,
  borderRadius: 40,
};
export const TabButtonStyle = {
  height: 40,
  borderRadius: 5,
};
