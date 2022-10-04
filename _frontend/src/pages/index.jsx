import Head from 'next/head'
import Image from 'next/image'
import Button from './button';
import  MetaHead  from "components/globals/MetaHead";
import { useState, useEffect, SetStateAction } from 'react';


const Home = () => {

  return (
    <>
        <MetaHead/>
        <Button />
      </>

  )
}

export default Home
