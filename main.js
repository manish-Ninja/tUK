
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDNEP3oR4Pq64ByqcGAj82lFQkYAdHs0SA",
    authDomain: "mainone-7dbad.firebaseapp.com",
    databaseURL: "https://mainone-7dbad-default-rtdb.firebaseio.com",
    projectId: "mainone-7dbad",
    storageBucket: "mainone-7dbad.appspot.com",
    messagingSenderId: "883323135106",
    appId: "1:883323135106:web:ea25771ca510b6a549c09b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function logOut()
  {
    window.location = "index.html";
  }
  function addRoom()
  {
    user_name_VAR = document.getElementById("room_name").value;
    firebase.database().ref("/").child(user_name_VAR).update({
        purpose:"Adding user"
    });
  }