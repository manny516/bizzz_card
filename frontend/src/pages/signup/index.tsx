import { NextPage } from "next";
import  MetaHead  from "components/globals/MetaHead";
import bgimage from "img/bgstarts.jpg";
import { ChangeEvent, useState, useEffect,useRef } from "react";
import axios from "axios";
import ValidationEmail from "../../components/globals/ValidationEmail";


type FormState = {
    username : String,
    password : String,
    email : String,
    bizzzcard : Object,
}

type ErrorState = {
    usernameError : String,
    passwordError : String,
    emailError : String ,
    errorState : Boolean
}


const Signup:NextPage = () =>{

    const signupAPI = "http://localhost:4000/signup";

    const [fieldState, setFieldState] = useState<FormState>({
        username : " ",
        password : " ",
        email : "",
        bizzzcard : " ",
    });
    
    const [checkErrorState, setCheckErrorState] = useState<ErrorState>({
        usernameError : " ",
        passwordError:" ",
        emailError: " ",
        errorState : false
    });
    



const userRef = useRef();
const errRef = useRef();
const [success, setSuccess] = useState(false);

useEffect(()=>{
    userRef.current.focus();
},[]);

useEffect(()=>{
    setCheckErrorState({...checkErrorState})
    setFieldState({...fieldState})
},[fieldState.email,fieldState.password,fieldState.username,checkErrorState.errorState]);

console.log(fieldState);
   
    const handleSubmit = async (e:any) =>{
        e.preventDefault();
        console.log(`Email : ${fieldState.email}, Passsword:${fieldState.password}, UserName:${fieldState.username}`);

        if(checkErrorState.emailError && checkErrorState.usernameError && checkErrorState.passwordError == " "){
            setCheckErrorState(allError =>{
                return{
                    ...allError,
                    usernameError : "",
                    passwordError : "",
                    emailError : "",
                    errorState : true
                }
            })
            // setErrorState(true);
        }

        if((fieldState.email == "") || (!ValidationEmail(fieldState.email))){
            setCheckErrorState(emailError => {
                return{
                    ...emailError,
                    emailError : "Sorry invalid Email or Empty email  "
                }
            })
        }else{
            setCheckErrorState(emailError => {
                return{
                    ...emailError,
                    emailError : " "
                }
            })
        }

        if(fieldState.password.length <= 4){
            setCheckErrorState( passwordError => {
                return{ 
                    ...passwordError,
                    passwordError : "Passwords must contain at least eight characters, including at least 1 letter and 1 number"
                }
            })
        }else{
            setCheckErrorState( passwordError => {
                return{ 
                    ...passwordError,
                    passwordError : " " 
                }
            })
        }

        if(fieldState.username.length <= 4){
            setCheckErrorState(usernameError =>{
                return{
                    ...usernameError,
                    usernameError : "User name must be more then 4 character"
                }
            });
        }else{
            setCheckErrorState(usernameError =>{
                return{
                    ...usernameError,
                    usernameError : " "
                }
            })
        }

        if(checkErrorState.errorState){
            setSuccess(true);
            await postSubmission();
        }
    };


    const postSubmission = async () =>{
        fieldState.bizzzcard = {
            email : fieldState.email
        }
        const payload = {...fieldState}

        try{
            await axios.post(signupAPI,payload);
            console.log("New user Created");
        }catch(err){
            console.log(err);
        }
    }   

   
    return(
        <>
            <MetaHead />
             <section className="section-top w-screen h-screen dark-mode" style={{backgroundImage: `url(${bgimage.src})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>

                 <section className="w-6/12 m-auto pb-20 pt-36">
                    <h1 className="text-center pb-4 text-5xl"> Bizzz Card  </h1>
                    <p ref={errRef}> {success ? "You did it"  : " " }</p>
                    <form onSubmit={handleSubmit}  className="p-6 pt-12 pb-12  ">
                        <article className="mb-4">
                            <p>{ checkErrorState.usernameError}</p>
                            <label htmlFor="username"> Create Username</label>
                            <input 
                                id="username" 
                                placeholder="Create Username" 
                                className="text-black w-full h-14 bg-gray-200 rounded-xl pl-4" 
                                type="text" 
                                autoComplete="no"
                                name="username" 
                                value={fieldState.username} 
                                onChange={(e) => setFieldState(userState =>{
                                    return{
                                        ...userState,
                                        username : e.target.value

                                    }
                                })}
                                ref={userRef}  />
                        </article> 

                        <article className="mb-4">
                            <p>{ checkErrorState.emailError}</p>
                            <label htmlFor="email"> Enter Email Address</label>
                            <input 
                                id="email" 
                                placeholder="Enter Email Address" 
                                className="w-full h-14 bg-gray-200 rounded-xl pl-4" 
                                type="text" 
                                name="email" 
                                value={fieldState.email} 
                                onChange={(e) => setFieldState(prevState => {
                                    return {
                                    ...prevState,
                                    email : e.target.value
                                    }

                                })}
                                ref={userRef}   
                            />
                        </article>

                        <article className="mb-4">
                            <p>{ checkErrorState.passwordError}</p>
                            <label htmlFor="password"> Create Password</label>
                            <input 
                                id="password" 
                                placeholder="Create Password" 
                                className="w-full h-14 bg-gray-200 rounded-xl pl-4" 
                                type="password" 
                                name="password" 
                                value={fieldState.password} 
                                onChange={(e) => setFieldState( passwordState =>{
                                    return{
                                        ...passwordState,
                                        password : e.target.value
                                    }
                                }) }   
                                ref={userRef}
                            />
                        </article>
                        
                        <input id="sign-up" type="submit" name="signup" className="p-2 h-12 text-center border-none bg-primary w-full cursor-pointer text-white rounded-lg mt-4 hover:bg-zinc-800 text-black" />
                        <span className="block mt-4 text-center"> Already have an account ? <a href="/login">Login </a></span>
                    </form>

                </section>

            </section>
        </>
    )


}

export default Signup;