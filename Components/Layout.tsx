import type { AppProps } from 'next/app'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Footer from './Footer'
import Link from 'next/link'

export default function Layout({Component, pageProps}: AppProps) {
  return (
    <div className={styles.container}>
       <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/aaa2"><a>aaa2</a></Link>
      <main className={styles.main}>
        <Component {...pageProps}/>
      </main>
      <Footer/>
    </div>
  );
}
