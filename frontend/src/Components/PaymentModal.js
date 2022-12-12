import React from "react";
import { useState } from "react";
import pay2 from "../assets/img/pay.png";

// Axios
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentModal = (props) => {
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

  console.log(props.payload); //submit this on successful payment
  const [number, setNumber] = useState("");

  const handleInput = ({ target }) => {
    setNumber(target.value);
    console.log("value is:", target.value);
  };

  const submitData = async (e) => {
    e.preventDefault();
    var isValidCardNumber = validateCardNumber(number);
    if (!isValidCardNumber) alert("Enter valid credit card number!");
    //send data to server
    await axios
      .post(`https://yoga-form-backend-z7vi.onrender.com/user`, props.payload)
      .then((res) => {
        console.log("Submitted");
        notify("User Registered!", "success");
        setTimeout(() => {
          notify("Redirecting you to home page", "info");
        }, 1000);
        setTimeout(() => {
          window.location.href = "/";
        }, 5000);
      })
      .catch((err) => {
        notify(err.response.data.errorMessage, "error");
        console.log(err.response.data.errorMessage);
      });
  };

  function validateCardNumber(number) {
    const regex = new RegExp("^[0-9]{13,19}$");
    if (!regex.test(number)) {
      return false;
    }
    return true;
  }

  return (
    <div className="grid p-3 place-items-center">
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
      <form
        onSubmit={submitData}
        className="form-modal max-w-[515px] w-full mx-auto my-auto bg-amber-400 p-8 px-8 rounded-lg shadow-md shadow-white"
      >
        <div className="grid grid-rows-1 grid-cols-7 ml-40 text-white py-2">
          <img alt="pay logo" className="h-17 mx-auto mt-2" src={pay2} />
          <h2 className="text-2xl pt-2 dark:text-white font-bold text-center">
            Payment
          </h2>
        </div>

        <div className="text-white py-2">
          <label className="pt-2 pr-3">Name on Card</label>
          <input
            className="w w-4/6 rounded-lg bg-amber-200 ml-8 mt-2 p-2 focus:bg-white focus:outline-none"
            type="text"
            required
          />
        </div>

        <div className="text-white py-2">
          <label className="pt-2 pr-3">Card Number</label>
          <input
            className="w w-4/6 rounded-lg bg-amber-200 ml-10 mt-2 p-2 focus:bg-white focus:outline-none"
            type="text"
            required
            onChange={handleInput}
            value={number}
          />
        </div>

        <div className="text-white py-2">
          <label className="pt-2 pr-3">Expiration date</label>
          <select
            className="dropdown-content rounded-lg bg-amber-200 text-amber-600 mt-2 pr-5 ml-7 p-2 w-40  focus:bg-white focus:outline-none"
            required
          >
            <option value="01">01 - January</option>
            <option value="02">02 - February</option>
            <option value="03">03 - March</option>
            <option value="04">04 - April</option>
            <option value="05">05 - May</option>
            <option value="06">06 - June</option>
            <option value="07">07 - July</option>
            <option value="08">08 - August</option>
            <option value="09">09 - September</option>
            <option value="10">10 - October</option>
            <option value="11">11 - November</option>
            <option value="12">12 - December</option>
          </select>
          <select
            className="dropdown-content rounded-lg bg-amber-200 text-amber-600 mt-2 pr-5 ml-4 p-2 w-32  focus:bg-white focus:outline-none"
            required
          >
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
          </select>
        </div>

        <div className="text-white py-2">
          <label className="pt-2 pr-3">Security Code</label>
          <input
            className="w w-46 rounded-lg bg-amber-200 ml-9 mt-2 p-2 focus:bg-white focus:outline-none"
            type="text"
            required
            maxLength="4"
            pattern="\d{4}"
          />
        </div>

        <button className="w-3/5 mx-28 my-5 py-2 flex flex-col items-center text-white bg-amber-700 shadow-lg shadow-white/60 hover:shadow-white/70 rounded-md font-semibold">
          Confirm Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentModal;
