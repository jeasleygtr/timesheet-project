var config = {
  apiKey: "AIzaSyClWx8hoUMLOOtXef8BdA9Obt7opKnKxx0",
  authDomain: "most-recent-user-f1731.firebaseapp.com",
  databaseURL: "https://most-recent-user-f1731.firebaseio.com",
  projectId: "most-recent-user-f1731",
  storageBucket: "most-recent-user-f1731.appspot.com",
  messagingSenderId: "832592444801"
};
console.log("linked!")
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

var name = "";
var role = "";
var date = "";
var rate = "";

// Capture Button Click
$("#add-user").on("click", function() {
  // Don't refresh the page!
  event.preventDefault();
  console.log("button worked");

  // YOUR TASK!!!

  // Code in the logic for storing and retrieving the most recent user.
  name = $("#name-input").val().trim();
  role = $("#role-input").val().trim();
  date = $("#date-input").val().trim();
  rate = $("#rate-input").val().trim();
  // Don't forget to provide initial data to your Firebase database.
  database.ref().set({
    name: name,
    role: role,
    date: date,
    rate: rate
  });
});