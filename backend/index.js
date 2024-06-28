import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv"
dotenv.config();

const app = express();


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

app.use(express.json());

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running...");
});
