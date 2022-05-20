import type { NextPage } from 'next'
import  MetaHead  from "components/globals/MetaHead";
import { useRouter } from "next/router";
import Image from 'next/image'
import profileImg from "img/profile.png";
import DividerBlind from 'components/globals/DividerBlind';

const Profile: NextPage = () => {
  const router = useRouter();
  let slug = router.query.slug;


  return (
    <>
        <MetaHead/>
        <section className='dark-mode pt-10 blur-box card-bg w-screen h-80 overflow-hidden' style={{backgroundImage :'url(https://assets.imgix.net/examples/pione.jpg)', backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
            <article className=' w-28 m-auto'>
                <Image className='rounded-full m-auto' src={profileImg} width="100" height="100"/>
                <h1>{slug}</h1> 
            </article>
        </section>
        <DividerBlind classList="h-72 relative -top-72 z-40 " />
      </>
  )
}

export default Profile




