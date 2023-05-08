
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
      document.getElementById("user_name").innerHTML="Welcome "+user_name + "!";
     function addRoom() {
      room_name= document.getElementById("room_name").value;
       
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"

 });
 
 localStorage.setItem("room_name", room_name);

 window.location= "kwitter_page.html";
 
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " +Room_names);
      row="<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_name + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.htmls";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location= "index.html";
        }