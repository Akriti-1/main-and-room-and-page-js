const firebaseConfig = {
    apiKey: "AIzaSyCB5E1hNS5nrq9meuDEW29YgIjDtVj2MTM",
    authDomain: "kwitter-c17f7.firebaseapp.com",
    databaseURL: "https://kwitter-c17f7-default-rtdb.firebaseio.com",
    projectId: "kwitter-c17f7",
    storageBucket: "kwitter-c17f7.appspot.com",
    messagingSenderId: "206968242115",
    appId: "1:206968242115:web:94308ee2668905690fc776",
    measurementId: "G-BR4NWB1ELC"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
 });

document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
       console.log(firebase_message_id);
         console.log(message_data);
         na = message_data['name'];
         message = message_data['message'];
       like = message_data['like'];
       name_with_tag = "<h4> "+ na +"</h4>";
       message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
       span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr><hr>";
       span_with_tag1 = "<span class='glyphicon glyphicon-thumbs-down'>Dislike: "+ Dislike +"</span></button><hr>";

      row = name_with_tag + message_with_tag +like_button + span_with_tag + span_with_tag1;       
      document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();

function updateLike(message_id)
{
console.log("clicked on like button - " + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes  
   });

}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}

function back(){
  localStorage.removeItem("room_name");
      window.location.replace("select_room.html");
}
