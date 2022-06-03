   const ValidationEmail = (emaillAddress:String) => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return String(emaillAddress).toLowerCase().match(regex);       
    }

    export default  ValidationEmail;

