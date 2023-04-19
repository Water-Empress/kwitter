
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