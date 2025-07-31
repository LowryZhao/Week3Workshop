$(document).ready(function () {
  $('#loginForm').submit(function (event) {
    event.preventDefault();

    $('#errormsg').addClass('hidemessage').removeClass('showmessage error');
    $('#successmsg').addClass('hidemessage').removeClass('showmessage success');

    const email = $('#email').val();
    const password = $('#password').val();

    ajaxPost(email, password);
  });

  function ajaxPost(email, password) {
    const formData = {
      email: email,
      password: password
    };

    $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: window.location + "api/loginform",
      data: JSON.stringify(formData),
      dataType: 'json',
      success: function (response) {
        if (response.valid === true) {
          console.log("good");
          $("#result").html("We got a response: " + response.data);
        } else {
          $("#result").html("We got an invalid response.");
        }
      },
      error: function (e) {
        alert("Error!")
        console.log("ERROR: ",e);
      }
    });
  }
});
