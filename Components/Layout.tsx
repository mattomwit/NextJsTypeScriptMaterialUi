import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
//Components
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

// define interface to represent component props
type Props = AppProps & {
  toggleTheme: () => void;
  useDefaultTheme: boolean;
}

export default function Layout({toggleTheme, useDefaultTheme, Component, pageProps, router }: Props) {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <Header/>
      <Navigation Component={Component} 
        pageProps={pageProps}
        router={router} 
      />
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/aaa2"><a>aaa2</a></Link>
     
      <Footer />
    </>
  );
}
