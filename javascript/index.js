firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    $(".login-cover").hide();

    var dialog = document.querySelector("#logindialog");
    if(!dialog.showModal){
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.close();
  } else {
    // No user is signed in.
    var dialog = document.querySelector("#logindialog");
    if(!dialog.showModal){
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();
  }
});
/*Defining a click action on the button to be used*/
$("#loginbutton").click(
  function(){
    var email = $("#loginemail").val();
    var password = $("#loginpassword").val();

    /*Checking if the email and the passwords are empty*/
    if(email !="" && password !=""){

    /*Signing in a user with email and püassword*/

      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    $("loginError").show().text(error.message);

    /*  alert("email " + email + "password " + password); */
      $("#loginprogress").show();
      $("#loginbutton").hide();
      });
    }
  }
);
