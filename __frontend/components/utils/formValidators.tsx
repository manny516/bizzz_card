   const ValidationEmail = (emaillAddress:String) => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return String(emaillAddress).toLowerCase().match(regex);       
    }

    const AlphaNumeric = (formData:String) =>{
        const reg =/^[a-z0-9_-]{3,16}$/;
        return String(formData).match(reg);

    }

    const ValidatePassword = (password:String) =>{
        const passReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        return String(password).match(passReg);
    }

    export  {ValidationEmail,AlphaNumeric,ValidatePassword};

