const express = require("express")
const { getAllCategory, createCategory, updateCategory, getCategoryDataById } = require("../controller/category.controller")
const authenticate = require("../middleware/authentication")
const authorise = require("../middleware/authorise");

const router = express.Router()



router.route("/getallcategory")
.get( authenticate, authorise(["Admin", "Manager", "Seo"]),getAllCategory)
.post( authenticate, authorise(["Admin","Manager", "Seo" ]), createCategory)

router.route("/getallcategory/:id")
.get( authenticate, authorise(["Admin", "Manager", "Seo"]), getCategoryDataById)
.patch( authenticate, authorise(["Admin", "Manager", "Seo"]), updateCategory)



module.exports = router;