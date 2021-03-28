import '../styles/globals.css'

import Layout from '../Components/Layout'
import React, { useReducer } from "react";
import type { AppProps /*, AppContext */ } from 'next/app'
import {
  createMuiTheme,
  Theme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

// theme
import { lightTheme, darkTheme } from "../src/utils/appTheme";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [useDefaultTheme, toggle] = useReducer((theme) => !theme, true);
  let theme: Theme = createMuiTheme(useDefaultTheme ? darkTheme : lightTheme);
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <Layout 
        toggleTheme={toggle} 
        useDefaultTheme={useDefaultTheme} 
        Component={Component} 
        pageProps={pageProps} 
        router={router}
      />
    </ThemeProvider>
  );
}

export default MyApp
