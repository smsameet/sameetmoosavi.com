import Head from 'next/head'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Sameet@Moosavi</title>
        <meta name='description' content='sameetmoosavi website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`w-3/5 container ${styles.main}`}>
        {children}
      </main>
    </>
  )
}

export default Layout
