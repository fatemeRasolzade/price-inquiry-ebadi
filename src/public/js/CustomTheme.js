import { createTheme } from "@mui/material/styles";

const CustomTheme = createTheme({
  // direction: 'rtl',
  typography: {
    fontFamily: "iranYekan",
  },
  palette: {
    primary: {
      main: "#cc9c00",
    },

    background: {
      main: "rgb(30 41 59)",
      default: "rgb(30 41 59)",
      paper: "rgb(30 41 59)",
    },
    text: {
      primary: "#fff",
      secondary: "#cc9c00",
    },
    // secondary: {
    //   main: '#BDBDBD' //darkGray
    // },
    // light: {
    //   main: '#ffffff'   //light
    // },
    // error: {
    //   main: '#EF4053',  //red
    // },
  },
});

export default CustomTheme;
