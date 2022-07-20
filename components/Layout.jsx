import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <div className='container md:w-5/12 m-auto p-4 mb-10'>
      <main>
        <Head>
          <title>Sameet@Moosavi</title>
          <meta name='description' content='sameetmoosavi website' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        {children}
      </main>
      <footer className='mt-10 text-center'>
        <span className='text-white'>@2022 Sameet Moosavi. all rights reserved</span>
      </footer>
    </div>
  )
}

export default Layout
