const {bizzUser} = require('./models/collections/Users')
const {gql} = require('apollo-server-express');

export const typeDefs= gql`
    type Query{
        test : String!
        users : [BizzzAccount]
    }

    type Usersaddress{
        street : String,
        street_two : String,
        city : String,
        province : String,
        zip: Int,
        country: String
    }

    type UserCard{
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

    type BizzzAccount{
        id:ID!,
        username: String,
        password: String,
        bizzzcard: [UserCard]
    }

`;

export const resolvers = {

    Query : {
        test : () => "This is Test",
        users : async () => await bizzUser.find()
    }

} 


