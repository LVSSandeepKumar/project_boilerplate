import mongoose from "mongoose";

const dummySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});

const Dummy = mongoose.model("Dummy", dummySchema);

export default Dummy;