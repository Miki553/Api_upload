import  express  from "express";
import { router as upload } from "./upload";
import bodyParser from "body-parser";
import cors from "cors";


export const app = express();


// const cors = require('cors');
app.use(cors());
app.use(bodyParser.text());
app.use(bodyParser.json());

app.use("/upload",upload);





app.use("/",(req,res)=>{
    res.send("hello 22222")
});

