import type { NextPage } from 'next'
import  MetaHead  from "components/globals/MetaHead";
import { useRouter } from "next/router";
import Imgix, { ImgixProvider } from "react-imgix";

const Profile: NextPage = () => {
   const router = useRouter();
    let slug = router.query.slug;

  return (
    <>
        <MetaHead/>
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
