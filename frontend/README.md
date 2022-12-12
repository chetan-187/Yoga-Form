# Yoga Form

An admission form for the Yoga Classes which happen every month.
## Installation

Make sure you have [npm](https://www.npmjs.com/package/npx) installed.

Run the following command in the frontend folder

```sh
npm install
npm start
```

Run the following command in the backend folder

```sh
npm install
node server.js
```

# Tech Stack Used

- MongoDB
- Express.js
- React.js
- Node.js
- Tailwind CSS


## Demo

Visit this site at : https://yoga-class-form.netlify.app/

- Visit the site
  ![Homepage](./src/assets/img/emptyform.png)

- Fill the information
  ![Homepage](./src/assets/img/validinputs.png)

- Click on *Proceed to Payment* button.
  If user is successfully registered it will show a sucess message and user will be redirected to homepage.
  ![Homepage](./src/assets/img/paymentsuccessandregistered.png)

- If user's age is less than 18 or greater than 65 the website will show a warning.
  And user won't be allowed to proceed for payment.
  ![Homepage](./src/assets/img/agelessthan18.png)

- If user is trying to register with same email second time website will show error message.
  ![Homepage](./src/assets/img/duplicateuser.png)

# ER Diagram
<p align="center">
  <img width="700" align="center" src="https://raw.githubusercontent.com/chetan-187/Yoga-Form-Frontend/master/src/assets/img/erd.png" alt="ER Diagram"/>
</p>

    