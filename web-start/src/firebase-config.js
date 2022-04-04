/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  // Import the functions you need from the SDKs you need

  // Your web app's Firebase configuration
    apiKey: "AIzaSyAeSvlpQI-Gbc27cwUjTrJa1EhWPZk8XO8",
    authDomain: "friendlychat-1c3b1.firebaseapp.com",
    projectId: "friendlychat-1c3b1",
    storageBucket: "friendlychat-1c3b1.appspot.com",
    messagingSenderId: "346819131620",
    appId: "1:346819131620:web:ab62bf063a8995f0c754f1"

};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}