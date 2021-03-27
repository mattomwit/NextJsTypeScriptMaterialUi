
import type { AppProps } from 'next/app'

export default function Layout({Component, pageProps}: AppProps) {
  return (
    <div>
      <div>blak</div>
      <Component {...pageProps}/>
    </div>
  );
}
