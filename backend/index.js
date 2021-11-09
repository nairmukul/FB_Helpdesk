import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import commentRoutes from "./routes/comments.js";
const app = express();

app.use(cors());

app.use('', commentRoutes);
const CONNECTION_URL = "mongodb+srv://fb_helpdesk:fbhelpdesk@cluster0.kxwxr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error);
    });

// mongoose.set('useFindAndModify', false);