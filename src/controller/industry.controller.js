const mongoose = require("mongoose")
const Industry = require("../model/industry.model")
const catchAyncError = require("../middleware/catchAyncError");
const authentication = require("../middleware/authentication");




exports.getAllIndustryData = catchAyncError(async(req, res, next) => {
    const industry = await Industry.find();
    res.status(200).json({
        success: true,
        industry,
    });
});

exports.createIndustryData = ("", authentication (catchAyncError(async(req, res, next) => {
       
})))