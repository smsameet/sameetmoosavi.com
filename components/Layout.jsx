import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <main>
      <Head>
        <title>Sameet@Moosavi</title>
        <meta name='description' content='sameetmoosavi website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        {children}
      </div>
    </main>
  )
}

export default Layout
