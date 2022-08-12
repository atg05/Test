import { userModal } from "../../model/user.js";
import Express from "express";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";

function register(req, res) {
  var newUser = new userModal(req.body);
  newUser.hash_password = bcrypt.hashSync(req.body.hash_password, 10);
  newUser.save(function (err, user) {
    if (err) {
      console.log(err);
      return res.status(400).send({
        message: err,
      });
    } else {
      user.hash_password = undefined;
      console.log(user);
      return res.json(user);
    }
  });
}

function logIn(req, res) {
  console.log(req.body);
  userModal.findOne(
    {
      email: req.body.email,
    },
    (err, user) => {
      if (err) throw err;

      if (!user || !user.comparePassword(req.body.hash_password)) {
        return res.status(401).json({
          message: "Authentication failed. Invalid Email or Password",
        });
      }
      return res.json({
        token: jsonwebtoken.sign(
          {
            email: user.email,
            fullName: user.fullName,
            _id: user._id,
          },
          process.env.JWT_SECRET
        ),
      });
    }
  );
}

export { register, logIn };
