Parse.initialize("SvtOXpjNcHr97ff1Ii1Z3v9t9h8glThKmUByUCji", "shMVnpVWSjl12KcbONuCobrhYCmSWujzs7QMhAlW");

// Here 'null' is replaced witht he permissions the app needs
// ex) Parse.FacebookUtils.logIn("user_likes, email", {//body});
function FBLogin(){
  Parse.FacebookUtils.logIn(null, {
    success: function(user) {
      if (!user.existed()){
        console.log("User is signed up and logged in through Facebook");
        $("#login-prompt").addClass("hide");
      }
      else {
        $("#login-prompt").addClass("hide");
        $(".new-card").removeClass("hide");
        console.log("User logged in through Facebook");
      }
    },
    error: function(user, error) {
      console.log("Login was cancelled or user did not fully authorize");
    }
  });
}

function auth_check(){
  if(Parse.User.current()){
    if (Parse.FacebookUtils.isLinked(Parse.User.current())) {
      $("#login-prompt").addClass("hide");
      $(".new-card").removeClass("hide");
      console.log("Welcome Facebook User");
    }
    else {
      $("#login-prompt").removeClass("hide");
      $(".new-card").addClass("hide");
      console.log("User needs to log in 1");
      FBLogin();
    }
  }
  else {
    $("#login-prompt").removeClass("hide");
    $(".new-card").addClass("hide");
    console.log("User needs to log in 2");
    FBLogin();
  }
}

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "http://connect.facebook.net/en_US/all.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

function assemble_ingredients() {
  var ingredient_data = [];

  $(".ingredient-item").each(function(index, value){
    
    var keyname = $(value).attr('name');
    console.log(keyname);

    var value_str = $(value).val();

    console.log(typeof keyname);
    console.log(typeof value_str);

    ingredient_data.push({
      key: keyname,
      value: value_str
    });
  });

  var result = [];

  for (var i = 0; i < ingredient_data.length; i++) {

    var mini = {};
    
    mini[ingredient_data[i].key] = ingredient_data[i].value;

    result.push(mini);
  };
  console.log(result);
  return result;
}

function assemble_actions() {
  var action_data = [];

  $(".action-item").each(function(index, value){
    
    var keyname = $(value).attr('name');
    console.log(keyname);

    var value_str = $(value).val();

    console.log(typeof keyname);
    console.log(typeof value_str);

    action_data.push({
      key: keyname,
      value: value_str
    });
  });

  var result = [];

  for (var i = 0; i < action_data.length; i++) {

    var mini = {};
    
    mini[action_data[i].key] = action_data[i].value;

    result.push(mini);
  };
  console.log(result);
  return result;
}

function pushRecipe() {
  var Recipe = Parse.Object.extend("Recipe");
  var recipe = new Recipe();

  var name_p = $("#recipe-name").val();
  var time_p = $("#recipe-time").val();

  var ingredients_p = assemble_ingredients();
  var actions_p = assemble_actions();

  console.log($("#preview").attr('src'));

  FB.api(
    "/me", function(response){
      console.log(response.id);

      recipe.save({user: response.id, name: name_p, ingredients: ingredients_p, actions: [actions_p], time: time_p, date: new Date()}).then(function(object) {
        alert("Your data was finally pushed");
        $("input").each(function(index){
          $(this).val("");
        });
        $("#new-card-data li").remove();
        var old_button = $("#img-upload");
        $("#remove-upload").click();
      });
    }
  );
}

function fetchUserData() {
  var Recipe = Parse.Object.extend("Recipe");
  var query = new Parse.Query(Recipe);
  FB.api(
    "/me", function(response){
      query.equalTo("user", response.id);
      query.find({
        success: function(results) {
          console.log(results.length);
          console.log(results);
          for (var i = 0; i < results.length; i++) { 
            var object = results[i];
            console.log(object.id + ' - ' + object.get('name'));
          }
        },
        error: function(error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });
    }
  );
}