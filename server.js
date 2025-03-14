//Joshua O. Pagcaliwagan CMSC 100 Exer6 MongoDB
//import needed packages
import express from 'express';
import router from './router.js';
import mongoose from 'mongoose';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
router(app);
app.listen(3000, () => {
    console.log('Connected to MongoDB: Server running on port 3000');//success msg
});