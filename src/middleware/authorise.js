module.exports = function (permittedRoles) {
    return function (req, res, next) {
      // first get the user from the req
      const user = req.user;
  
      // check if user has any of the permittedRoles
      let isPermitted = false;
      //   ["admin", "Manager", "Seo",]
      permittedRoles.map((role) => {
        // user
        // [ "customer" ]
        if (user.role.includes(role)) {
          isPermitted = true;
        }
      });
  
      // if not then throw an error
      if (!isPermitted) {
        return res.status(403).send({ message: "You are Not Authorised Permission denied" });
      }
      // if yes then return next
      return next();
    };
  };
  