
	console.log("hello");

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD-FP2d3aGdjfAOrjpy6Oeyy8YXnYxtOEc",
    authDomain: "sports-data-app.firebaseapp.com",
    databaseURL: "https://sports-data-app.firebaseio.com",
    projectId: "sports-data-app",
    storageBucket: "sports-data-app.appspot.com",
    messagingSenderId: "815890458610"
  };
  firebase.initializeApp(config);

  var database = firebase.database();  

  database.ref().on("child_added", function(snapshot, preChildKey) {
	console.log(snapshot);
	console.log(snapshot.val());

	var newPost = snapshot.val();

	console.log("newPost: " + newPost);
});

  $("#submitBtn").on("click", function() {

  	event.preventDefault();

  	 var firstName = $("#first_name").val().trim();
     var lastName = $("#last_name").val().trim();
     var email = $("#email").val().trim(); 	

	console.log(firstName, lastName, email);

	if (firstName !="" && lastName != "" && email != "") {


	database.ref().push({
		firstName: firstName,
		lastName: lastName,
		email: email
		
	});	
}

	$("#first_name").val("");
	$("#last_name").val("");
	$("#email").val("");
} )