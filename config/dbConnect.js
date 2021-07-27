import mongoose from 'mongoose';

const dbConnect = () => {
    if (mongoose.connection.readyState >= 1) {
        return
    }

    mongoose.connect("mongodb+srv://azurahat:hotel420@hotels.o2vqk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })

}

export default dbConnect