// window.fbAsyncInit = function() {
//   // init the FB JS SDK
//   FB.init({
//     appId      : '397989610346916', // App ID from the App Dashboard
//     status     : true, // check the login status upon init?
//     cookie     : true, // set sessions cookies to allow your server to access the session?
//     xfbml      : true  // parse XFBML tags on this page?
//   });

//   $("#login").click(function() {
//     fbLogin(FB);
//   });

  

// FB.getLoginStatus(function(response) {
//   if (response.status === 'connected') {
//     console.log('connected');
//     // user is good to go
//     setUserInfo(FB, response);
//     $(".new-card").show();
//     $("#login-prompt").hide();

//   } else if (response.status === 'not_authorized') {
//     // the user is logged in to Facebook, 
//     // but has not authenticated your app
//     console.log('no auth');

//     // $(".new-card").hide();
//     $("#login-prompt").show();
//   } else {
//     // the user isn't logged in to Facebook.
//     console.log('no logged in');

//     // $("#index-body").hide();
//     $("#login-prompt").show();
//   }
//  });

// }

// function fbLogin(FB) {
//     FB.login(function(response) {
//      if (response.authResponse) {
//         // logged in
//         setUserInfo(FB, response);
//         $(".new-card").show();
//         $("#login-prompt").hide();

//      } else {
//         $(".new-card").hide();
//         $("#login-prompt").show();
//      }
//    });
//   };


// function setUserInfo(FB, response) {

//   window.fb = {
//       id: response.authResponse.userID,
//       token: response.authResponse.accessToken
//   };

//   FB.api('/me', function(response) {
//     fb.name = response.name;
//     fb.user = response.username;

//     $(".fbName").html(response.name);
   
//    console.log('Good to see you, ' + response.name + '.');
//   });
// }

//  (function(d){
//    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
//    if (d.getElementById(id)) {return;}
//    js = d.createElement('script'); js.id = id; js.async = true;
//    js.src = "http://connect.facebook.net/en_US/all.js";
//    ref.parentNode.insertBefore(js, ref);
//   }(document));

//   function testAPI() {
//     console.log('Welcome!  Fetching your information.... ');
//     FB.api('/me', function(response) {
//       console.log('Good to see you, ' + response.name + '.');
//     });
//   }