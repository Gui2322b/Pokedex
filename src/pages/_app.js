import '@/styles/globals.css'

import Layout from '../Components/Layout'

function App({ Component, pageProps }) {
  return (<Layout>
    <Component {...pageProps} />
    </Layout>)
}

export default App