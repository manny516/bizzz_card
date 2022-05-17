import { NextPage } from "next";
import  MetaHead  from "components/globals/MetaHead";
import bgimage from "img/bgstarts.jpg";

const Login:NextPage = () =>{
    return(
        <>
            <MetaHead/>
             <section className="section-top w-screen h-screen dark-mode" style={{backgroundImage: `url(${bgimage.src})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>

                <section className="w-6/12 m-auto pb-20 pt-36  ">
                    <h1 className="text-center pb-4 text-5xl"> Bizzz Card  </h1>
                    <form className=" p-6 pt-12 pb-12  ">
                        <article className="mb-4">
                            <input placeholder="Username" className="w-full h-14 bg-gray-200 rounded-xl pl-4" type="text" name="username" value="" />
                        </article> 

                        <article className="mb-4">
                            <input placeholder="Password" className="w-full h-14 bg-gray-200 rounded-xl pl-4" type="password" name="password" value="" />
                        </article>
                        
                        <input id="sign-up" type="submit" name="signup" className="p-2 h-12 text-center border-none cursor-pointer bg-primary w-full text-white rounded-lg mt-4 hover:bg-zinc-800" value="Login" />
                        <span className="block mt-4 text-center"> Create an account ? <a href="/signup">Signup </a></span>
                    </form>

                </section>
             </section>
        
        </>
    )
}

export default Login 