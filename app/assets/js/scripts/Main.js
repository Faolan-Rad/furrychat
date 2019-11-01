firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...

    var loginscreen = document.getElementById('login-screen')
    var mainscreen = document.getElementById('main-screen')
    loginscreen.style.display = 'none' ;
    mainscreen.style.display = 'block';

    document.getElementById("emaillogin").innerHTML = email;
    } else {
        var loginscreen = document.getElementById('login-screen')
        var mainscreen = document.getElementById('main-screen')
        loginscreen.style.display = 'flex' ;
        mainscreen.style.display = 'none';
    }
  });
var signoutbut = document.getElementById("signoutbut")

signoutbut.addEventListener('click',function(){
    console.log('signed out but press')
    firebase.auth().signOut().then(function() {
        console.log('signed out')
        var loginscreen = document.getElementById('login-screen')
        var mainscreen = document.getElementById('main-screen')
        loginscreen.style.display = 'none' ;
        mainscreen.style.display = 'block';
      }).catch(function(error) {
        console.log(error)
      });
      
})




