
// Your web app's Firebase configuration

// If you migrate this program to a new Firebase, you will need to 
// copy the new credentials from the account you are using. 
var firebaseConfig = {
apiKey: "AIzaSyCc-C3sHPt_yDu8lrzI9Ffh1SmifJotpzg",
authDomain: "send-receive-5c5ea.firebaseapp.com",
databaseURL: "https://send-receive-5c5ea.firebaseio.com",
projectId: "send-receive-5c5ea",
storageBucket: "send-receive-5c5ea.appspot.com",
messagingSenderId: "923974746016",
appId: "1:923974746016:web:06c466dedb1b16fb2deec5",
measurementId: "G-ZFQZ0ZMQES"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function send() {
    // returns file object with info (name, size, type)
    var file = document.getElementById("upload").files[0]; 

    // sets the location where the image is to be stored    
    var storageRef = firebase.storage().ref('images/' + file.name);
    
    // stores the image file to the firebase storage
    storageRef.put(file); 

    //gs://send-receive-5c5ea.appspot.com/images/APCS.PNG
    // saves url reference to database to use to retreive image later
    var databaseRef = firebase.database().ref('imageURLs/2'); 
    databaseRef.set({imageName : file.name});

    // at the moment, the reference is just overwriting itself in the DB
    // this would likley have to be improved on or changed
}


