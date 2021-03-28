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
