import { NextPage } from "next";
import  MetaHead  from "components/globals/MetaHead";
import bgimage from "img/bgstarts.jpg";
import { ChangeEvent, useState, useEffect } from "react";
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
    emailError : String 
}

const Signup:NextPage = () =>{

    const signupAPI = "http://localhost:4000/signup";

    const initFormState = {
        username : " ",
        password : " ",
        email : "",
        bizzzcard : " ",
    }


    const [fieldState, setFieldState] = useState<FormState>(initFormState);
    const [errorState, setErrorState] = useState<ErrorState>({
        usernameError : " ",
        passwordError:" ",
        emailError: " ",
    });

        // const validation = () => {
        // let emailError = " ";
        // let usernameError = " ";
        // let passwordError = " ";
    
        // if(!ValidationEmail(fieldState.email)){
        //     emailError = "Sorry invalid Email";
        // }

        // if(fieldState.username.length < 4 ){
        //     usernameError = " User name must be more then 4 character";
        // }

        // if(fieldState.password.length < 4){
        //     passwordError = "Passwords must contain at least eight characters, including at least 1 letter and 1 number";
        // }

        // if(emailError){
        //     errorState.emailError = emailError;
        //     setErrorState(errorState)
        // }

        // if(usernameError){
        //     errorState.usernameError = usernameError;
        //     setErrorState(errorState)
        // }

        // if(passwordError){
        //     errorState.passwordError = passwordError;
        //     setErrorState(errorState);
        // }

        // return true
        // if(emailError){
        //     console.log(emailError);
        // }else{
        //     console.log(emailError);
        // }
        // if(emailError){
        //     setFieldState(emailError);
        //     return false;
        // }
        // // return true;
        // console.log(emailError)
    //     return true
    // }

    
    
    console.log(fieldState.email.length);

     const updateFormHandler =  (event : ChangeEvent<HTMLInputElement>) =>{
        const {id,value} = event.target;
        const formKey = id as keyof FormState;
        const updatedFormState = {...fieldState};
        updatedFormState[formKey] = value;
        setFieldState(updatedFormState);
    }


   

 
    const handleSubmit = async (event: FormState) =>{
        event.preventDefault();
        await postSubmission();
        // let isValid = validation();
        // if(isValid){
        //      console.log(typeof errorState.usernameError);
        // }
    };


    const postSubmission = async () =>{
        fieldState.bizzzcard = {
            email : fieldState.email
        }
        const payload = {...fieldState}

        try{
            // if((fieldState.email && fieldState.username) && (fieldState.password && ValidationEmail(fieldState.email))){
                const result = await axios.post(signupAPI,payload);
            // }
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
                    <form onSubmit={handleSubmit} action={signupAPI} method="POST" className="p-6 pt-12 pb-12  ">
                        <article className="mb-4">
                            {/* <p>{ errorState.usernameError}</p> */}
                            <input id="username" placeholder="Create Username" className="text-black w-full h-14 bg-gray-200 rounded-xl pl-4" type="text" name="username" value={fieldState.username} onChange={updateFormHandler}  />
                        </article> 

                        <article className="mb-4">
                            {/* <p>{ errorState.emailError}</p> */}
                            <input id="email" placeholder="Enter Email Address" className="w-full h-14 bg-gray-200 rounded-xl pl-4" type="text" name="email" value={fieldState.email} onChange={updateFormHandler}   />
                        </article>

                        <article className="mb-4">
                            {/* <p>{ errorState.passwordError}</p> */}
                            <input id="password" placeholder="Create Password" className="w-full h-14 bg-gray-200 rounded-xl pl-4" type="password" name="password" value={fieldState.password} onChange={updateFormHandler}   />
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