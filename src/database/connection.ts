import mongoose from "mongoose";
import { mongoConfig } from "../config";

mongoose.connect(mongoConfig.url, {

})
    .then(db => console.log("DB is connected"))
    .catch(err => console.log(err));