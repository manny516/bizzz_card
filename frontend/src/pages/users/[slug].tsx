import type { NextPage } from 'next'
import MetaHeader from 'components/globals/MetaHeader'
import { useRouter } from "next/router";
import Imgix, { ImgixProvider } from "react-imgix";

const Profile: NextPage = () => {
   const router = useRouter();
    let slug = router.query.slug;

  return (
    <>
        <MetaHeader/>
        <section className='card-bg w-screen h-80 overflow-hidden'>
       <h1>
          Welcome User {slug}
        </h1>
            <Imgix src="https://assets.imgix.net/examples/pione.jpg" sizes="100%" />;
        </section>
      </>
  )
}

export default Profile
