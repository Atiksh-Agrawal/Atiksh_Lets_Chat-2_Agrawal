
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC0HWT4agxXoIIp-W6fgIFgC_TGTxnC48o",
      authDomain: "kwitter-d5926.firebaseapp.com",
      databaseURL: "https://kwitter-d5926-default-rtdb.firebaseio.com",
      projectId: "kwitter-d5926",
      storageBucket: "kwitter-d5926.appspot.com",
      messagingSenderId: "617807387216",
      appId: "1:617807387216:web:54afb4b97d1157b42dcf55"
    };

    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
