import Navbar from './Navbar'
import Footer from './footer'
import Head from 'next/head'

export default function Layout({ children }) {
    return(
        <>
        <Head>
            <title>PokeDex</title>
        </Head>
        <Navbar />
        <main className ='main-container'>{children}</main>
        <Footer />
        </>
    )
}