import Head from 'next/head'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <main>
      <Head>
        <title>Sameet@Moosavi</title>
        <meta name='description' content='sameetmoosavi website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container md:w-4/6 m-auto p-5'>
        <Navbar />
        {children}
      </div>
    </main>
  )
}

export default Layout
