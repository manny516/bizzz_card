import { NextPage } from "next";
import  Header  from "components/globals/header";
import bgimage from "img/bgstarts.jpg";


const Signup:NextPage = () =>{
    return(
        <>
            <Header />
             <section className="section-top w-screen h-screen dark-mode" style={{backgroundImage: `url(${bgimage.src})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>

                 <section className="w-6/12 m-auto pb-20 pt-36">
                    <h1 className="text-center pb-4 text-5xl"> Bizzz Card  </h1>
                    <form className="p-6 pt-12 pb-12  ">
                        <article className="mb-4">
                            <input placeholder="Create Username" className="w-full h-14 bg-gray-200 rounded-xl" type="text" name="username" value="" />
                        </article> 

                        <article className="mb-4">
                            <input placeholder="Enter Email Address" className="w-full h-14 bg-gray-200 rounded-xl" type="text" name="email" value="" />
                        </article>

                        <article className="mb-4">
                            <input placeholder="Create Password" className="w-full h-14 bg-gray-200 rounded-xl" type="password" name="password" value="" />
                        </article>
                        
                        <input id="sign-up" type="submit" name="signup" className="p-2 h-12 text-center border-none bg-violet-800 w-full cursor-pointer text-white rounded-lg mt-4 hover:bg-zinc-800" value="Create Account" />
                        <span className="block mt-4 text-center"> Already have an account ? <a href="/login">Login </a></span>
                    </form>

                </section>

            </section>
        </>
    )


}

export default Signup;