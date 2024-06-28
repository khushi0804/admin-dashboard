import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
// import db from "./config/Database.js"
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js"
dotenv.config();


const app = express();
app.use(express.json());


// (async()=>{
// await db.sync();
// })();
app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized:true,
    cookie:{
        secure:'auto'
    }
}));

// so, here we are applying the middleware in the code with Cross-Origin Resource

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
    // origin is used to connect the API's backend to frontend
  })
);


app.use(UserRoute);
app.use(ProductRoute);



app.listen(process.env.APP_PORT, () => {
  console.log(`Server up and running...${process.env.APP_PORT}`);
});
