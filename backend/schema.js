const {bizzUser} = require('./models/collections/Users')
const {gql} = require('apollo-server-express');

export const typeDefs= gql`
    type Query{
        test : String!
        users : [User]
    }

    type Usersaddress{
        street : String,
        street_two : String,
        city : String,
        province : String,
        zip: Int,
        country: String
    }

    type User{
        id:ID!,
        first_name: String,
        last_name : String,
        company : String,
        phone : [String],
        email: String,
        urls: [String],
        address :[Usersaddress],
        birthday: String,
        posted: String,
        updated: String,
        socialLinks: [String],
        instant_messagers:[String],
        notes: String
    }

`;

export const resolvers = {

    Query : {
        test : () => "This is Test",
        users : async () => await bizzUser.find()
    }

    // Mutation : {
    //     createCat : async (_, {name}) =>{
    //         const kitty = new Cat({ name });
    //         await kitty.save();
    //         return kitty;
    //     }
    // }

} 


