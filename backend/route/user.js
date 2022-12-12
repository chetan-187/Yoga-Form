const express = require("express");
const router = express.Router();

//User Model
const User = require("../model/user_model");

const validateAge = (dateOfBirth) => {
  //                    mm-dd-yyyy   //1 year old : 1671235200000 // 21 year old : 1002479400000
  //for getting date in miliseconds //for testing
  // var dob2 = new Date("10/08/2001");
  // console.log(dob2.getTime());

  var dob = new Date(parseInt(dateOfBirth));
  // console.log(dob);

  //calculate month difference from current date in time
  var month_diff = Date.now() - dob.getTime();

  //convert the calculated difference in date format
  var age_dt = new Date(month_diff);

  //extract year from date
  var year = age_dt.getUTCFullYear();

  //now calculate the age of the user
  var age = Math.abs(year - 1970);

  //display the calculated age
  // document.write("Age of the date entered: " + age + " years");
  if (age >= 18 && age <= 65) {
    return true;
  }
  return false;
};

//sample data
// const payload = {
//   firstName: "Chetan",
//   lastName: "Lohkare",
//   email: "chetan@gmail.com",
//   phone: "9876543210",
//   gender: "male",
//   dateOfBirth: "1002479400000",
//   batch: "5:00 PM to 6:00 PM",
// };

//@route POST /user
//@desc  Create a new user
//@access Public
router.post("/", (req, res) => {
  // console.log(req.body);
  const { firstName, lastName, email, phone, gender, dateOfBirth, batch } =
    req.body;

  //Simple validation
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !gender ||
    !dateOfBirth ||
    !batch
  ) {
    return res.status(400).json({ errorMessage: "Please Enter all fields" });
  }

  //validate age 18 to 65
  let isValidAge = validateAge(dateOfBirth);
  // console.log(isValidAge);
  if (!isValidAge) {
    return res
      .status(400)
      .json({ errorMessage: "Age should be between 18 to 65" });
  }
  //Check for existing user
  User.findOne({
    email: email,
  }).then((user) => {
    if (user) {
      return res.status(400).json({
        errorMessage: "User Already Exists",
      });
    }
    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      gender: gender,
      dateOfBirth: dateOfBirth,
      batch: batch,
    });

    //save in db
    newUser
      .save()
      .then((user) => {
        res.json({ User: user });
      })
      .catch((err) => {
        return res.status(400).json({ errorMessage: err });
      });
  });
});

module.exports = router;
