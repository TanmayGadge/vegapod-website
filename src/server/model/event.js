import mongoose from "mongoose";
const Event = mongoose.Schema(
    {
       title: String,
       slug: String,
       content: String,
       date: Date,
       location: String,
       images: [String]
    }
)
export default mongoose.models?.Event || mongoose.model("Event", Event);