import Head from 'next/head'

const MetaHead = () =>{

    return(
         <Head>
            <title>Welcome to Bizzzcard </title>
            <meta name="description" content="Bizzz Card" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default MetaHead;