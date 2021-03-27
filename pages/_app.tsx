import '../styles/globals.css'
import Layout from '../Components/Layout'
import type { AppProps /*, AppContext */ } from 'next/app'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout Component={Component} pageProps={pageProps} router={router}/>
  );
}

export default MyApp
