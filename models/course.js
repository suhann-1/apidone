const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "Coursename":String,
         "Trainername":String,
         "Venue":String,
         "Duration":String,
         "Date":String,
    }
)
let coursesmodel=mongoose.model("courses",schema)
module.exports={coursesmodel}