const {bizzUser} = require('./collections/Users');

export const createNewUser = async function(userInput){
    const user = new bizzUser(userInput);
    await user.save();
    console.log(user);
}
