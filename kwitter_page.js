//YOUR FIREBASE LINKS
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
     user_name=localStorage.getItem("user_name");
     room_name=localStorage.getItem("room_name");
     

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
 
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
         name: user_name,
         message:msg,
         like:0   
      });

      document.getElementById("msg").value="";
}

