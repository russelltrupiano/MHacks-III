Parse.initialize("SvtOXpjNcHr97ff1Ii1Z3v9t9h8glThKmUByUCji", "shMVnpVWSjl12KcbONuCobrhYCmSWujzs7QMhAlW");
var Recipe = Parse.Object.extend("Recipe");


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
  // var Recipe = Parse.Object.extend("Recipe");
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
  var query = new Parse.Query(Recipe);
  FB.api(
    "/me", function(response){
      query.equalTo("user", response.id);
      query.find({
        success: function(results) {
          console.log(results.length);
          console.log(results);
          for (var i = 0; i < results.length; i++) { 
            var obj = results[i];
            console.log(obj.id + ' - ' + obj.get('name') + ":  " + obj.get("time"));
          }
        },
        error: function(error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });
    }
  );
}

// function populateRecipeView(parent) {
  
//   var query = Parse.Query("Recipe");
//   query = fetchUserData();

//   console.log(query);

//   for (var i = 0; i < query.length; i++) { 
//     var obj = query[i];

//     var recipe_view = "<a href='#' id='recipe-click-view-"+i+"'>
//         <div class='recipe-view container' id='recipe-"+i+"'>
//           <div class='recipe-view-text'>
//             <p class='recipe-view-title'><a id='recipe-"+i+"' href='#'><span class='lead'>"+obj.get("name")+"</span></a><span class='recipe-view-time'>         ("+obj.get("time")+")</span></p>
//             <div class='social-share'>
//               <div class='pinterest-share-button share-button'>
//                 <a href='http://www.pinterest.com/pin/create/button/
//                     ?url=http%3A%2F%2Fwww.flickr.com%2Fphotos%2Fkentbrew%2F6851755809%2F
//                     &media=http%3A%2F%2Ffarm8.staticflickr.com%2F7027%2F6851755809_df5b2051c9_z.jpg
//                     &description=Next%20stop%3A%20Pinterest'
//                     data-pin-do='buttonPin'
//                     data-pin-config='above'>
//                     <img src='//assets.pinterest.com/images/pidgets/pin_it_button.png' />
//                 </a>
//               </div>
//               <div class='fb-share-button share-button' data-href='http://developers.facebook.com/docs/plugins/' data-type='button_count'></div>
//               <script>(function(d, s, id) {
//                 var js, fjs = d.getElementsByTagName(s)[0];
//                 if (d.getElementById(id)) return;
//                 js = d.createElement(s); js.id = id;
//                 js.src = 'http://connect.facebook.net/en_US/all.js#xfbml=1&appId=397989610346916';
//                 fjs.parentNode.insertBefore(js, fjs);
//               }(document, 'script', 'facebook-jssdk'));</script>
//             </div>
//           </div>
//           <div class='recipe-view-pic'>
//             <img src='assets/mhacks.png'>
//           </div>
//         </div>
//       </a>";
//   }

  
// }