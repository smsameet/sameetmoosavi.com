import Head from 'next/head'
import Navbar from '../components/Navbar'

const Layout = ({children}) => {
  return (
    <main className='flex flex-col p-3 pb-8 m-auto container md:w-3/6'>
      <Head>
        <title>Sameet@Moosavi</title>
        <meta name='description' content='sameetmoosavi website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <div className='pt-14'>
        {children}
      </div>
    </main>
  )
}

export default Layout
