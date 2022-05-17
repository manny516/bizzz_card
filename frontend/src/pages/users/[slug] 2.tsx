import type { NextPage } from 'next'
import Header from 'components/globals/header'
import { useRouter } from "next/router";


const Profile: NextPage = () => {
   const router = useRouter();
    let slug = router.query.slug;

  return (
    <>
        <Header/>
        <h1>
          Welcome User {slug}
        </h1>
      </>
  )
}

export default Profile
