const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {type: String, required: true },
    email : {type : String , required : true , unique: true},
    mobile: {type: Number, required : true },
    password: { type: String, required: true },
    designation: {type: String , required : true },
    role: [{ type: String }],
    gender:{type: String, required: false },
    status: {type: String, required: false}
  },
  {
    timestamps: true
  }
  )

userSchema.pre("save", function(next){

  var hash = bcrypt.hashSync( this.password, 8);
    this.password = hash;
    next()
})

userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model("user", userSchema)