const jwt = require("jsonwebtoken");
const catchAsyncError = require("../middleware/catchAyncError");
const User = require("../model/auth.model");

const newToken = (user) => {
  return jwt.sign({user},process.env.JWT_SECRET_KEY)
}


exports.register = catchAsyncError(async (req, res) => {
  const user = await User.findOne({email: req.body.email , name: req.body.name, mobile: req.body.mobile , password: req.body.password, gender: req.body.gender, status: req.body.status }, {new: true}).lean().exec()

  if(!user){
     const user = await User.create(req.body)

      const token = newToken(user)
      
      return res.send(200,
      {
        success:true,
        message:"User Created Successfully",
        user
      })
     }
      return res.send("Please try another email")
})


exports.login = catchAsyncError(async (req, res) => {
  const user = await User.findOne({email: req.body.email})

  if(!user){
    return res.send("Please try another email or password")
  }
  const match = user.checkPassword(req.body.password);
if(!match){
    return res.send("Please try another email or password")
}
const token = newToken(user)

    return res.send({user,token})
   
})



