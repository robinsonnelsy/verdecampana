var  todolodeusernfire;
var nodetodoadmin;
var todolodeadminfire;
var vinpnombre;
var  vpass;
function inicia(){

  var config = {
    apiKey: "AIzaSyCAurJpGFpim_P2s1JMK3mU-hL1GoN76fA",
    authDomain: "hermanorobin-9767e.firebaseapp.com",
    databaseURL: "https://hermanorobin-9767e.firebaseio.com",
    projectId: "hermanorobin-9767e",
    storageBucket: "hermanorobin-9767e.appspot.com",
    messagingSenderId: "25162325991"
  };
  firebase.initializeApp(config);

}















  // Initialize Firebase
  inicia();

  funatraefireadmi();
function funatraefireadmi(){
    firebase.database().ref().child("admin").once("value", function(snapshot) {
  
        todolodeadminfire=snapshot.val();
    


        firebase.database().ref().child("user").once("value", function(snapshot) {
  
          todolodeusernfire=snapshot.val();
      
      //    console.log("todolodeadminfire");
      //    console.log(todolodeadminfire);
          
  
      }, function (errorObject) {
      //  console.log("The read failed: " + errorObject.code);
      });

        
        

    }, function (errorObject) {
    //  console.log("The read failed: " + errorObject.code);
    });
  }

  funatraefireadmion();

  function funatraefireadmion(){
    firebase.database().ref().child("admin").on("value", function(snapshot) {
  
        todolodeadminfire=snapshot.val();
      
      }, function (errorObject) {
//console.log("The read failed: " + errorObject.code);
    });
  }


  firebase.database().ref().child("user").on("child_added", function(snapshot) {
  
    firebase.database().ref().child("admin").once("value", function(snapshot) {
  
      todolodeadminfire=snapshot.val();
  


      firebase.database().ref().child("user").once("value", function(snapshot) {

        todolodeusernfire=snapshot.val();
    
     //   console.log("todolodeadminfire");
      //  console.log(todolodeadminfire);
        

    }, function (errorObject) {
    //  console.log("The read failed: " + errorObject.code);
    });

      
      

  }, function (errorObject) {
  //  console.log("The read failed: " + errorObject.code);
  });


firebase.database().ref().child("user").child(snapshot.key).child("idfire").set(snapshot.key);
    

}, function (errorObject) {
 // console.log("The read failed: " + errorObject.code);
});





  var  soyadminabjto={objfire:0,estoylogeado:false};
  var  soyuserobj={objfire:0,estoylogeado:false};;

function fbtlogin(){

 vinpnombre=getv("idinpnombre");
 vpass=getv("inppass");
//console.log(vpass+"  aca");
//console.log(todolodeadminfire);
    for(var i in todolodeadminfire){
if(todolodeadminfire.nombre==vinpnombre&&todolodeadminfire.clave==vpass){
window.location="index2.html";

soyadminabjto.estoylogeado=true;
}

    }


          
    for(var i in todolodeusernfire){
      if(todolodeusernfire[i].user==vinpnombre&&todolodeusernfire[i].pass==vpass){
      window.location="index2.html";
   
      soyuserobj.estoylogeado=true;
      }
      
          }
      
      


   
}

function getv(st){
   return document.getElementById(st).value;
}