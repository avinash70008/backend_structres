const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const categorySchema = new mongoose.Schema({
parents_id: {type: String, required: false},
name: {type: String, required: true },
Slug: {type: String, required: true },
icon: {type: String, required: true },
description: {type: String, required: false },
status: {type: String, required: false },

})

module.exports = mongoose.model("category", categorySchema)