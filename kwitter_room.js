
var firebaseConfig = {
      apiKey: "AIzaSyAylcYQCK2-5tvZtZSDJYzvDIZioM4laLo",
      authDomain: "kwitter-6ffe4.firebaseapp.com",
      databaseURL: "https://kwitter-6ffe4-default-rtdb.firebaseio.com",
      projectId: "kwitter-6ffe4",
      storageBucket: "kwitter-6ffe4.appspot.com",
      messagingSenderId: "782945116172",
      appId: "1:782945116172:web:6b625261ce8153fe134e29"
    };
    
    
     firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
