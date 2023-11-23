const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    regNo: String,
    age: Number,
});

const User = mongoose.models.user || mongoose.model("user", UserSchema);
export default User;
