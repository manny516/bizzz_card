import Head from 'next/head'
import { useRouter } from "next/router";

<<<<<<< HEAD:frontend/src/components/globals/header.js
const Header = () =>{
   const router = useRouter();
    let slug = router.pathname;
    slug = slug.replace("/", "");
=======
const MetaHead = () =>{

>>>>>>> user-profile:frontend/src/components/globals/MetaHead.js
    return(
         <Head>
            <title>Welcome to Bizzzcard : {slug} </title>
            <meta name="description" content="Bizzz Card" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default MetaHead;