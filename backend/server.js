//Server imports
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const {ApolloServer} = require('apollo-server-express');
const usersRoutes = require('./routes/users');
const {typeDefs,resolvers} = require('./schema');
require("dotenv").config();

const startServer = async () => {
    
    //app
    const app = express();

    //Cors Setuo 
    const corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    };

    //db
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }).then(() => console.log("DB.Connected")).catch(err => console.log("Sorry cant connect to Database"));


    //Apollo Server
    app.use(cors());

    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    server.applyMiddleware({app});

    //Middleware
    app.use(morgan("dev"));
    app.use(cors(corsOptions));

    //Routes
    app.use("/users", usersRoutes);
    
    app.get("/code", (req,res)=>{
        res.send(`<h1>Hello world</h1>`);
    });

    const ApiRoutes = require("./routes/users");
    app.use("/", ApiRoutes);

    //Port 
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, ()=> console.log(`Server started on port: ${PORT}`));

}

startServer();