import Head from 'next/head'
import { useRouter } from "next/router";

const Header = () =>{
   const router = useRouter();
    let slug = router.pathname;
    slug = slug.replace("/", "");
    return(
         <Head>
            <title>Welcome to Bizzzcard : {slug} </title>
            <meta name="description" content="Bizzz Card" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default Header;