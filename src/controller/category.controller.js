const mongoose = require("mongoose")
const Category = require("../model/category.model");
const catchAsyncError = require("../middleware/catchAyncError");
const ErrorHandler = require("../utils/errorhandler");


exports.getAllCategory = (catchAsyncError(async (req, res, next) => {
    const category = await Category.find();
    res.status(200).json({
      success: true,
      category,
    });
  }));

  exports.createCategory = (catchAsyncError(async (req, res, next) => {
    var {name, Slug, icon, description} = req.body
    if(!name){
        return next(new ErrorHandler("Please enter name", 404))
    }
    if(!icon){
        return next(new ErrorHandler("Please add icon", 404))
    }
    if(!description){
        return next(new ErrorHandler("Please enter description", 404))
    }
   
    if (!Slug) {
        Slug = name.toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "");
        OrgSlug = name.toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "");
        SlugFound = true;
        var index = 0;
        while (SlugFound) {
          index += 1;
          SlugCount = await Category.count({
            Slug: Slug,
          });
          if (SlugCount == 0) SlugFound = false;
          else {
            Slug = OrgSlug + "-" + index;
          }
        }
      } else {
        SlugCount = await Category.count({
          Slug: Slug,
        });
        if (SlugCount > 0) {
          return next(
            new ErrorHandler(
              "Slug is not valid. Please regenate or enter a unique slug!",
              404
            )
          );
        }
      }

      var RequestBody = {
        //  Status: req.body.Status,
        name: req.body.name,
        icon: req.body.icon,
        description: req.body.description,
        Slug: Slug,
      };


     const category = await Category.create(RequestBody);
    return res.status(200).send(category)
}));

exports.getCategoryDataById = catchAsyncError(async (req, res, next) => {
    const category = await Category.findById({ _id: req.params.id });
    if (!category) {
      return next(new ErrorHandler("Id is not found", 404));
    }
    res.status(200).json({
      success: true,
      category,
    });
  });



exports.updateCategory = (catchAsyncError(async(req, res, next) => {
    var { name, Slug, icon, description} = req.body
  
    if(!name){
        return next(new ErrorHandler("Please enter name", 404))
    }
    if(!icon){
        return next(new ErrorHandler("Please add icon", 404))
    }
    if(!description){
        return next(new ErrorHandler("Please enter description", 404))
    }
    if (!Slug) {
        Slug = name.toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "");
        OrgSlug = name.toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "");
        SlugFound = true;
        var index = 0;
        while (SlugFound) {
          index += 1;
          SlugCount = await Category.count({
            Slug: Slug,
          });
          if (SlugCount == 0) SlugFound = false;
          else {
            Slug = OrgSlug + "-" + index;
          }
        }
      } else {
        SlugCount = await Category.count({
          Slug: Slug,
        });
        if (SlugCount > 0) {
          return next(
            new ErrorHandler(
              "Slug is not valid. Please regenate or enter a unique slug!",
              404
            )
          );
        }
      }

      var RequestBody = {
        //  Status: req.body.Status,
        name: req.body.name,
        icon: req.body.icon,
        description: req.body.description,
        Slug: Slug,
      };

    var category = await Category.findByIdAndUpdate({_id: req.params.id}, 
    RequestBody,
    {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
return res.status(200).json({
    success: true,
    category,
})
}));

