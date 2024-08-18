import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from './store/store'
const root = ReactDOM.createRoot(document.getElementById("root"));
const initialUsers = [
  {
    name: "Aditya Sharma",
    email: "john@example.com",
    password: "password123",
    phone: "123-456-7890",
    address: "123 Main St",
    state: "23BCSG66",
    zipcode: "90210"
  },
  {
    name: "User Two",
    email: "user2@example.com",
    password: "password2",
    phone: "0987654321",
    address: "456 Another St",
    state: "45DFGH78",
    zipcode: "12345"
  }
];

if (!localStorage.getItem('users')) {
  localStorage.setItem('users', JSON.stringify(initialUsers));
}
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
