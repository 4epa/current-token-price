import '../styles/style.css';
import Layout from '../components/Layout/Layout'; '../components/Layout/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}