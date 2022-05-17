import type { NextPage } from 'next'
<<<<<<< HEAD
import Header from 'components/globals/header'
import { useRouter } from "next/router";

=======
import  MetaHead  from "components/globals/MetaHead";
import { useRouter } from "next/router";
import Imgix, { ImgixProvider } from "react-imgix";
>>>>>>> user-profile

const Profile: NextPage = () => {
   const router = useRouter();
    let slug = router.query.slug;

  return (
    <>
<<<<<<< HEAD
        <Header/>
        <h1>
          Welcome User {slug}
        </h1>
=======
        <MetaHead/>
        <section className='card-bg w-screen h-80 overflow-hidden'>
       <h1>
          Welcome User {slug}
        </h1>
            <Imgix src="https://assets.imgix.net/examples/pione.jpg" sizes="100%" />;
        </section>
>>>>>>> user-profile
      </>
  )
}

export default Profile
