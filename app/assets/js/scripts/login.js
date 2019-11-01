
var firebaseConfig = {
  apiKey: "AIzaSyDLbuqWkFzuvqfpGbhcqJxJpzq7NWPdOYo",
  authDomain: "furriopolis-3b6fc.firebaseapp.com",
  databaseURL: "https://furriopolis-3b6fc.firebaseio.com",
  projectId: "furriopolis-3b6fc",
  storageBucket: "furriopolis-3b6fc.appspot.com",
  messagingSenderId: "622877029972",
  appId: "1:622877029972:web:2117e6242b6a9f0318dfc1",
  measurementId: "G-EYGBHL706T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



  var loginswich = document.getElementById('loginto')
  var sighnupswichbut = document.getElementById('signup')
  var Login = document.getElementById('loginContainer')
  var Signup = document.getElementById('SignupContainer')
  var loginbut = document.getElementById('loginButton')
  var sighnupbut = document.getElementById('SignupButton')



sighnupswichbut.addEventListener('click',function(){
    Login.style.display = 'none'
    Signup.style.display = 'flex'
    
})

loginswich.addEventListener('click',function(){
  Login.style.display = 'flex'
  Signup.style.display = 'none'

})

loginbut.addEventListener('click',function(){
  var error = false
var passwordfield = document.getElementById('loginPassword').value
var emailfield = document.getElementById('loginUsername').value
if(passwordfield == ''){
  document.getElementById('loginPasswordError').style('display: flex');
  error == true
}

if(!error == true){
firebase.auth().signInWithEmailAndPassword(emailfield, passwordfield).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  console.log(errorMessage+errorCode)
});
}
})

sighnupbut.addEventListener('click',function(){
 console.log('button press')
  var emailfield = document.getElementById('SignupEmail').value
  
  var passwordfield = document.getElementById('SignupPassword').value
  var passwordconffield = document.getElementById('SignupPasswordConfirm').value
  var error = false;
  if(emailfield == ''){ document.getElementById('SignupEmailError').style.opacity= '85'; var error = true}
  if(!passwordfield == passwordconffield){ document.getElementById('SignupPasswordError').style.opacity= '85'; var error = true } 
  if(passwordfield == ''){ document.getElementById('SignupPassword2Error').style.opacity= '85'; var error = true} 
 


  if(!error == true){
    
    firebase.auth().createUserWithEmailAndPassword(emailfield, passwordfield).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorMessage+errorCode)
    });
    Login.style.display = 'flex'
    Signup.style.display = 'none'
  
  }})
