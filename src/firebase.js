import firebase from "firebase";

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

export function createUserWithEmailAndPassword(email, password) {
  try {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        console.log("Registered user " + userCredentials.user.email);
      })
      .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + " " + errorMessage);
      });
  } catch (e) {
    console.log(e);
    console.log("We could not register you");
  }
}

export function createUserWithEmailAndPasswordPromise(email, password) {
  const createUserPromise = new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        resolve({ userId: userCredentials.user.uid });
      })
      .catch(error => {
        reject({ errorMessage: error.message });
      });
  });
  return createUserPromise;
}

export function loginUserWithEmailAndPasswordPromise(email, password) {
  const loginUserPromise = new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        resolve({ userId: userCredentials.user.uid });
      })
      .catch(error => {
        reject({ errorMessage: error.message });
      });
  });
  return loginUserPromise;
}

export function getCurrentUser() {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) {
    console.log("Current user is " + currentUser.email);
  } else {
    console.log("No one is logged in");
  }
}
