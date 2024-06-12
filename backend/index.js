import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import configDB from './config/db.js';
import router from './config/routes.js';

configDB()
    .then((resp) => {
        const app = express();
        app.use(cors(), express.json());
        app.use('/api', router)

        const PORT = process.env.PORT || 3001;

        app.listen(PORT, () => {
            console.log("Listening on port: ", PORT)
        })

    })
    .catch(err => {
        console.log(err)
    })