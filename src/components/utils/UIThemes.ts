import { createTheme } from "@mui/material/styles";
import { amber, blue, red } from "@material-ui/core/colors";
import { defaultTheme, mergeTheme } from "evergreen-ui";


// const theme = createTheme({
//   components: {
//     MuiButton: {
//       variants: [
//         {
//           props: { variant: 'dashed' },
//           style: {
//             textTransform: 'none',
//             border: `2px dashed ${defaultTheme.palette.primary.main}`,
//             color: defaultTheme.palette.primary.main,
//           },
//         },
//         {
//           props: { variant: 'dashed', color: 'secondary' },
//           style: {
//             border: `2px dashed ${defaultTheme.palette.secondary.main}`,
//             color: defaultTheme.palette.secondary.main,
//           },
//         },
//         {
//           props: { variant: 'dashed', size: 'large' },
//           style: {
//             borderWidth: 4,
//           },
//         },
//         {
//           props: { variant: 'dashed', color: 'secondary', size: 'large' },
//           style: {
//             fontSize: 18,
//           },
//         },
//       ],
//     },
//   },
// });

  export const theme = createTheme({
    palette: {

      primary: {
  
        main: "#2F327D",
  
      },
  
      secondary: {
  
        main: '#FFF',
  
        // contrastText: deepPurple[900],
  
      },
      error:{
        main:'#FF5364'
      }
  
    },
    typography: {
      button: {
        textTransform: "none"
      }
    }
  });

  export const BrandButtonStyle={
    height:40,
    borderRadius:40,
  }
  export const TabButtonStyle={
    height:40,
    borderRadius:5,
  }