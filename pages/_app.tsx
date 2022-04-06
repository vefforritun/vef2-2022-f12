import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (<section>
    <h1>Hello</h1>
    <Component {...pageProps} />
  </section>)
}

export default MyApp
