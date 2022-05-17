import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import  MetaHead  from "components/globals/MetaHead";
const Home: NextPage = () => {
  return (
    <>
        <MetaHead/>
        <button className="bg-blue-700 hover:bg-blue-300 text-white font-bold py-8 px-4 rounded">
          Welcome to Bizzzcard new
        </button>
      </>

  )
}

export default Home
