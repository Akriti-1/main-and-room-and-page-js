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

function logout(){
    localStorage.removeItem("user");
    window.location.replace("index.html");
}
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "page.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log(Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+= row;
localStorage.setItem("room_name", room_name);
//End code
});});}
getData();

function redirect(){
  window.location.replace("page.html")
  localStorage.setItem("room_name", room_name);
}
