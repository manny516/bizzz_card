const {bizzUser} = require('./collections/Users');

 export const deleteItem = async function(itemObj){

    try{
        const removeRecord = await bizzUser.deleteOne(itemObj);
        console.log(removeRecord);
    }catch(e){
        console.log(e.message);
    }
 }