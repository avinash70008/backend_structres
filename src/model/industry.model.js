const mongoose = require("mongoose")

const industrySchema = new mongoose.Schema({
    type: { type: String, required: true },
    mainTitle: { type: String, required: true },
    smallDesc: {type: String, required: true },
    fullDesc: { type: String, required: true },
    pageHeading: { type: String, required: true },
    btnName: { type: String, required: true },
    bgImage: {
        url: {type: String, required: true }
     },
     status: {type: String, required: true},
     content: [
        {
            format: { type: String, required: true },
            sectionTitle: { type: String , required: true },
            sectionSubTitle: {type: String , required: true },
            sectionDesc: {type: String, required: true },
            sectionImage: {type: String, required: true },
            sectionBtnName: {type: String, required: true },
            data: [
                {
                    icon:{ type: String, required: true },
                    title:{type: String, required: true },
                    discription: {type: String, required: true },
                    image: { type: String, required: true }
                },
            ],
        },
     ],
})

module.exports = mongoose.model("industrySchema", industrySchema);