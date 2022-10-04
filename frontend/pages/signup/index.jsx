import MetaHead from "../../components/global/MetaHead";
import bgimage from "../../public/img/bgstarts.jpg";
import { useState, useEffect} from "react";
import useUpdateStateObj from "../../components/utils/useUpdateStateObj";
import axios from "axios";
import {ValidationEmail,AlphaNumeric,ValidatePassword} from "../../components/utils/formValidators";
const Signup = () =>{

    const [fieldState, setFieldState] = useState({
        username : "",
        password : "",
        email : "",
    });
    
    const [checkErrorState, setCheckErrorState] = useState({
        usernameError : "",
        passwordError: "",
        emailError: "",
    });

    const [validForm,setValidForm] = useState(false);
    
    const {username,password,email}= fieldState;
    const {usernameError,passwordError,emailError,} = checkErrorState;
    

    useEffect(() =>{
        
        //Validate Each form Field and update state.
        (email == "") || (!ValidationEmail(email)) ? 
        useUpdateStateObj(setCheckErrorState,"emailError","Sorry invalid Email or Empty email") : 
        useUpdateStateObj(setCheckErrorState,"emailError","");

       (!ValidatePassword(fieldState.password)) ? 
       useUpdateStateObj(setCheckErrorState,"passwordError","Passwords must contain at least eight characters, including at least 1 letter and 1 number"): 
       useUpdateStateObj(setCheckErrorState,"passwordError","") ;

       (!AlphaNumeric(fieldState.username)) ? 
       useUpdateStateObj(setCheckErrorState,"usernameError","User name must be 4 character using only letters or numbers") : 
       useUpdateStateObj(setCheckErrorState,"usernameError","");

       //Check if every form Field is valid
       const validFormResults =  [usernameError,passwordError,emailError].every(value =>{
            return value === "";
        });

        //Update state based on results from field validation check
        setValidForm(validFormResults);
     
    },[username,password,email,usernameError,passwordError,emailError])


//On Form submit
    const postSubmission = async () =>{
        const signupAPI = "http://localhost:4000/signup";
        const payload = {...fieldState}
            await axios({
                method : 'post',
                url : signupAPI,
                data : payload
            })
            .catch((err) =>{
                if(err){
                    console.log(err);
                    const errorMessage  = err.response.data.message;
                    const errorKey = errorMessage.split(" ");
                    console.log(errorKey[0]);
                  
                    if((errorKey[0])){
                        setCheckErrorState( (errorMessage)=>{
                            return {
                                ...errorMessage,
                                [`${errorKey[0]}Error`] : err.response.data.message
                            }
                        })
                    }

                }
            });
        console.log(`State Error : ${checkErrorState.emailError}`);
    }   
      const handleSubmit = async (e) =>{
        e.preventDefault();
        validForm ? await postSubmission() : '';
    };



   
    return(
        <>
            <MetaHead />
             <section className="section-top w-screen h-screen dark-mode" style={{backgroundImage: `url(${bgimage.src})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundColor:"#666"}}>

                 <section className="w-6/12 m-auto pb-20 pt-36">
                    <h1 className="text-center pb-4 text-5xl"> Bizzz Card  </h1>
                    <form onSubmit={handleSubmit}  className="p-6 pt-12 pb-12  ">
                        <article className="mb-4">
                            {usernameError && (<h3> {usernameError}</h3>)}
                            <label htmlFor="username"> Create Username</label>
                            <input 
                                value={username} 
                                id="username" 
                                placeholder="Create Username" 
                                className="text-black w-full h-14 bg-gray-200 rounded-xl pl-4" 
                                type="text" 
                                autoComplete="no"
                                name="username" 
                                onChange={(e) => useUpdateStateObj(setFieldState,"username",e.target.value)} />
                        </article> 

                        <article className="mb-4">
                            {emailError && (<h3> {emailError} </h3>)}
                            <label htmlFor="email"> Enter Email Address</label>
                            <input 
                                id="email" 
                                placeholder="Enter Email Address" 
                                className="w-full h-14 bg-gray-200 rounded-xl pl-4 text-black" 
                                type="text" 
                                name="email" 
                                value={email} 
                                onChange={(e) => useUpdateStateObj(setFieldState,"email",e.target.value)}  
                            />
                        </article>

                        <article className="mb-4">
                            {passwordError && (<h3> {passwordError}</h3>)}
                            <label htmlFor="password"> Create Password</label>
                            <input 
                                id="password" 
                                placeholder="Create Password" 
                                className="w-full h-14 bg-gray-200 rounded-xl pl-4 text-black" 
                                type="password" 
                                name="password" 
                                value={password} 
                                onChange={(e) => useUpdateStateObj(setFieldState,"password",e.target.value) }   
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