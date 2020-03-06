import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
import * as firebaseui from "firebaseui";
import {
  createUserWithEmailAndPassword,
  createUserWithEmailAndPasswordPromise
} from "./firebase";
import "../node_modules/firebaseui/dist/firebaseui.css";

const firebaseConfig = {
  apiKey: "AIzaSyD6ubnGeEqssrFUKzdffJBTkNzxvV2p2mU",
  authDomain: "nadezhdivka-water.firebaseapp.com",
  databaseURL: "https://nadezhdivka-water.firebaseio.com",
  projectId: "nadezhdivka-water",
  storageBucket: "nadezhdivka-water.appspot.com",
  messagingSenderId: "37254300312",
  appId: "1:37254300312:web:a05870df81715be73f46ed",
  measurementId: "G-2F7BJ5KDSN"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const uiConfig = {
      signInSuccessUrl: "/success",
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID]
    };
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }, []);

  // const onRegisterButtonClick = () => {
  //   console.log(email + " " + password);
  //   createUserWithEmailAndPassword(email, password);
  // };

  const onRegisterButtonClick = () => {
    console.log(email + " " + password);
    createUserWithEmailAndPasswordPromise(email, password)
      .then(data => {
        console.log("Successfully registered user with id " + data.userId);
      })
      .catch(error => {
        console.log("Error occurred: " + error.errorMessage);
      });
  };

  const onEmptyButtonClick = () => {
    console.log(111);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input
          onChange={inputEmail => setEmail(inputEmail.target.value)}
        ></input>
        <input
          onChange={inputPassword => setPassword(inputPassword.target.value)}
        ></input>
        <button onClick={onRegisterButtonClick}>Register</button>
        <button onClick={onEmptyButtonClick}>HHH</button>
        <div id="firebaseui-auth-container"></div>
      </header>
    </div>
  );
}

export default App;
