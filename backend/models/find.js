const {bizzUser} = require('./collections/Users');


export const grabCollection =  function(request,response){
    bizzUser.find()
    .then(users => response.json(users))
    .catch(err => response.status(400).json('Error: ' + err ))
}