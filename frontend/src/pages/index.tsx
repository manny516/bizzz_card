import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from 'components/globals/header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome to Bizzzcard</title>
        <meta name="description" content="Bizzz Card" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
        <button className="bg-blue-700 hover:bg-blue-300 text-white font-bold py-8 px-4 rounded">
          Welcome to Bizzzcard new
        </button>
      </>

  )
}

export default Home
