import "./App.css";
import "./assets/style/style.css";
import Form from "./Components/Form";
// import Pay from "./Components/PaymentModal";

function App() {
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
  return (
    <div className="h-screen overflow-y-scroll bg bg-gradient-to-br from-amber-500 to-amber-200">
      {/* <Pay payload={payload} /> */}
      {/* <Pay /> */}
      <Form />
    </div>
  );
}

export default App;
