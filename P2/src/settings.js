import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
    palette: {
      type: 'light',
        primary: {
          main: '#3f7b6e',
        },
        secondary: {
          main: '#000000',
        },
      },
})

export const apiUrl = 'https://swapi.co/api'