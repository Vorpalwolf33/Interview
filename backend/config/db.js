import mongoose from 'mongoose';

const configDB = () => {
    mongoose.Promise = global.Promise;
    return mongoose.connect(process.env.MONGO_ENV)
}

export default configDB;