import { NextPage } from "next";
import  MetaHead  from "components/globals/MetaHead";
import bgimage from "img/bgstarts.jpg";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import ValidationEmail from "../../components/globals/ValidationEmail";


type FormState = {
    username : String,
    password : String,
    email : String,
    bizzzcard : Object,
}

type ErrorState = {
    usernameError : Boolean,
    passwordError : Boolean,
    emailError : Boolean 
}

const Signup:NextPage = () =>{

    const signupAPI = "http://localhost:4000/signup";

    const initFormState = {
        username : "",
        password : "",
        email : "",
        bizzzcard : "",
    }

    const errorStateForm = {
        usernameError : true,
        passwordError:false,
        emailError: false,
    }

    const [fieldState, setFieldState] = useState<FormState>(initFormState);
    const [errorState, setErrorState] = useState<ErrorState>(errorStateForm);

    if(fieldState.username.length > 4 ){
        const errorprops = {...errorState};
        errorprops['usernameError'] = false;
        setErrorState(errorprops);
    }

    const handleSubmit = async (event: FormState) =>{
        event.preventDefault();
        await postSubmission();
    };


    const postSubmission = async () =>{
        fieldState.bizzzcard = {
            email : fieldState.email
        }
        const payload = {...fieldState}

        try{
            if((fieldState.email && fieldState.username) && (fieldState.password && ValidationEmail(fieldState.email))){
                const result = await axios.post(signupAPI,payload);
            }
        }catch(err){
            console.log(err);
        }
    }   

    const updateFormHandler =  (event : ChangeEvent<HTMLInputElement>) =>{
        const {id,value} = event.target;
        const formKey = id as keyof FormState;
        const updatedFormState = {...fieldState};
        updatedFormState[formKey] = value;
        setFieldState(updatedFormState);
    }

    return(
        <>
            <MetaHead />
             <section className="section-top w-screen h-screen dark-mode" style={{backgroundImage: `url(${bgimage.src})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>

                 <section className="w-6/12 m-auto pb-20 pt-36">
                    <h1 className="text-center pb-4 text-5xl"> Bizzz Card  </h1>
                    <form onSubmit={handleSubmit} action={signupAPI} method="POST" className="p-6 pt-12 pb-12  ">
                        <article className="mb-4">
                            { errorState.usernameError ? <h3> User name must be more then 4 character </h3> : ""}
                            <input id="username" placeholder="Create Username" className="text-black w-full h-14 bg-gray-200 rounded-xl pl-4" type="text" name="username" value={fieldState.username} onChange={updateFormHandler}  />
                        </article> 

                        <article className="mb-4">
                            {ValidationEmail(fieldState.email) ? '' : <h3> Please enter a valid email address</h3>}
                            <input id="email" placeholder="Enter Email Address" className="w-full h-14 bg-gray-200 rounded-xl pl-4" type="text" name="email" value={fieldState.email} onChange={updateFormHandler}   />
                        </article>

                        <article className="mb-4">
                            {fieldState.username.length < 8 && <h3> Passwords must contain at least eight characters, including at least 1 letter and 1 number. </h3>}
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