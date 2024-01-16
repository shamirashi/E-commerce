import  express  from "express";
import dotenv from "dotenv";
import cors from "cors";

import conn from "./connection.js";
import router from "./router.js";

dotenv.config();

const app= express();

app.use(cors());
app.use(express.json());
app.use(express.static("./dist"));

app.use("/api", router);

conn().then(() => {
    app.listen(process.env.VITE_PORT, (error) => {
        if (error) {
            console.error(error);
        } else {
            console.log("Server started ");
        }
    });
})
.catch((error) => {
    console.error("Database connection error:", error);
});
