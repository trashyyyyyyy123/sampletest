const { default: mongoose } = require("mongoose");

const connectDB = async () => {
    try {
        if (!mongoose.connections[0].readyState) {
            await mongoose.connect(
                "mongodb+srv://trashtrash462:1cATRbeIdhxsRA4z@sampletest.rymaivm.mongodb.net/abc"
            );
        }
    } catch (error) {
        return error;
    }
};

export default connectDB;
