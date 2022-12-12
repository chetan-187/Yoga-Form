import React from "react";
import { useState } from "react";
import yoga from "../assets/img/yoga.jpg";
import Payment from "./PaymentModal";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const notify = (message, notificationType) => {
    toast[notificationType](message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const [pay, setPay] = useState(false);
  const [date, setDate] = useState("");

  const [payload, setPayload] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "male",
    dateOfBirth: "",
    batch: "6:00 AM to 7:00 AM",
  });
  const handleInput = ({ target }) => {
    setPayload({ ...payload, [target.name]: target.value });

    setDate(payload["dateOfBirth"]);
    console.log(payload);
    // console.log(event.target.name, event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValidAge = validateAge(date);
    if (isValidAge) {
      setPay(true); //show payment modal
    } else {
      notify("You are out of age limit (18-65)", "warn");

      // alert("You are out of age limit (18-65)");
    }
  };

  // const validateAge = (inputDate) => {
  //   // mm-dd-yyyy   //1 year old : 1671235200000 // 21 year old : 1002479400000
  //   //for getting date in miliseconds //for testing
  //   // var dob2 = new Date("10/08/2001");
  //   // console.log(dob2.getTime());

  //   var dob = new Date(inputDate);

  //   //calculate month difference from current date in time
  //   var month_diff = Date.now() - dob.getTime();

  //   //convert the calculated difference in date format
  //   var age_dt = new Date(month_diff);

  //   //extract year from date
  //   var year = age_dt.getUTCFullYear();

  //   //now calculate the age of the user
  //   var age = Math.abs(year - 1970);

  //   //display the calculated age
  //   // document.write("Age of the date entered: " + age + " years");
  //   console.log("Age - ", parseInt(age));
  //   if (age >= 18 && age <= 65) {
  //     return true;
  //   }
  //   return false;
  // };


  const validateAge = (inputDate) => {

    var dob = new Date(inputDate);
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    console.log("Age - ", parseInt(age));
    if (age >= 18 && age <= 65) {
      return true;
    }
    return false;
  };


  // function validateAge(date) {
  //   var today = new Date();
  //   var birthDate = new Date(date);
  //   var age_now = today.getFullYear() - birthDate.getFullYear();
  //   var m = today.getMonth() - birthDate.getMonth();
  //   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //     age_now--;
  //   }

  //   console.log("Age - ", age_now);

  //   if (age_now >= 18 && age_now <= 65) {
  //     return true;
  //   }
  //   return false;
  // }

  return (
    <div className="">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {pay && (
        <div
          style={{ position: "fixed", zIndex: 10 }}
          className="h h-full w-80"
          onClick={() => {
            setPay(false);
          }}
        ></div>
      )}
      {pay && (
        <div
          style={{ position: "fixed", right: 0, zIndex: 10 }}
          className="h h-full w-80"
          onClick={() => {
            setPay(false);
          }}
        ></div>
      )}

      <div className="grid p-3 place-items-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-[650px] w-full mx-auto my-auto bg-amber-500 p-8 px-8 rounded-lg shadow-md shadow-white"
        >
          <img alt="Yoga" className="h-40 mx-auto rounded-t-full" src={yoga} />
          <h2 className="text-2xl pt-2 dark:text-white font-bold text-center">
            Dive into the spirit of Yoga!
          </h2>
          <div className="flex flex-col-2 text-white py-2">
            <label className="pt-3 pr-3">Firstname</label>
            <input
              className="rounded-lg bg-amber-200 mt-2 p-2  focus:bg-white focus:outline-none"
              type="text"
              name="firstName"
              onChange={handleInput}
              required
            />
            <label className="ml-1 p-3">Lastname</label>
            <input
              className="rounded-lg bg-amber-200 mt-2 p-2  focus:bg-white focus:outline-none"
              type="text"
              name="lastName"
              onChange={handleInput}
              required
            />
          </div>
          <div className="text-white py-2">
            <label className="pt-2 pr-3">Email</label>
            <input
              className="w w-5/6 rounded-lg bg-amber-200 ml-8 mt-2 p-2 focus:bg-white focus:outline-none"
              type="email"
              name="email"
              onChange={handleInput}
              placeholder="example@xyz.com"
            />
          </div>
          <div className="flex flex-col-2 text-white py-2">
            <label className="pt-3 pr-3">Phone</label>
            <input
              className="rounded-lg bg-amber-200 mt-2 ml-6 p-2  focus:bg-white focus:outline-none"
              type="text"
              name="phone"
              onChange={handleInput}
              title="Enter a Valid Number"
              pattern="[1-9]{1}[0-9]{9}"
              required
            />
            <label className="ml-1 p-3">Gender</label>
            <select
              id="gender"
              name="gender"
              onChange={handleInput}
              className="dropdown-content rounded-lg bg-amber-200 text-amber-600 mt-2 pr-5 ml-4 p-2 w-1/3  focus:bg-white focus:outline-none required:"
            >
              <option value="male" className="">
                Male
              </option>
              <option value="female" className="">
                Female
              </option>
              <option value="other" className="">
                Others
              </option>
            </select>
            {/* <input className='rounded-lg bg-amber-200 mt-2 p-2  focus:bg-white focus:outline-none' type="radio" /> */}
          </div>

          <div className="text-white py-2">
            <label className="pt-2 mr-1">Birth Date</label>
            <input
              className="w-48 rounded-lg bg-amber-200 ml-2 mt-2 p-2 text-amber-600 focus:bg-white focus:outline-none"
              type="date"
              name="dateOfBirth"
              onChange={handleInput}
              value={payload["dateOfBirth"]}
              required
            />

            <label className="pt-3 ml-5">Batch</label>
            <select
              id="gender"
              name="batch"
              onChange={handleInput}
              className="dropdown-content rounded-lg bg-amber-200 text-amber-600 mt-2 ml-10 pr-5 p-2 w-48 focus:bg-white focus:outline-none"
              required
            >
              <option value={this} className="">
                6:00 AM to 7:00 AM
              </option>
              <option value={this} className="">
                7:00 AM to 8:00 AM
              </option>
              <option value={this} className="">
                8:00 AM to 9:00 AM
              </option>
              <option value={this} className="">
                5:00 PM to 6:00 PM
              </option>
            </select>
          </div>

          <div className="m-5">
            <p className="pt-3 text-white">Note : </p>
            <div className="text-left text-white">
              <p>
                Participants can enroll any day but you will have to pay for the
                entire month.
              </p>
              <p>
                Participants can shift from one batch to another in different
                month.
              </p>
              <p>Participants need to be in same batch in a same month.</p>
            </div>
          </div>
          <button className="w-3/5 mx-28 my-5 py-2 flex flex-col items-center text-white bg-amber-700 shadow-lg shadow-white/60 hover:shadow-white/70 rounded-md font-semibold">
            Proceed to Payment
          </button>
        </form>
      </div>

      {pay && <Payment payload={payload} />}
    </div>
  );
};

export default Form;
