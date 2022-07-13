import Head from 'next/head'
import styles from '../styles/Layout.module.css'

const index = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sameet@Moosavi</title>
        <meta name="description" content="sameetmoosavi website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className="text-9xl">Welcome to Next App</h1>
      </main>
    </div>
  )
}

export default index
