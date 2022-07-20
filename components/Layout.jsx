import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <main>
      <Head>
        <title>Sameet@Moosavi</title>
        <meta name='description' content='sameetmoosavi website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container md:w-5/12 m-auto p-4 mb-10'>
        {children}
      </div>
    </main>
  )
}

export default Layout
