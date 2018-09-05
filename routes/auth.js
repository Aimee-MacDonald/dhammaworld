const express = require("express");
const router = express.Router();

const User = require("../dbmodels/user");

router.post("/register", (req, res, next) => {
  User.find({'email': req.body.email}, (err, docs) => {
    if(err) throw err;

    if(docs.length > 0){
      res.status(422).send("User Already Exists");
    } else {
      // Encrypt Password
      let newUser = new User({'email': req.body.email, 'password': req.body.password});

      newUser.save(err => {
        if(err) console.log("Error: " + err);
        // Log User In

        res.status(200).send("User Registered");
      });
    }
  });
});

module.exports = router;
