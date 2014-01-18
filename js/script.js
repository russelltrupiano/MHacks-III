$(document).ready(function(){

  var num_ingredients = 0;
  var num_actions = 0;
  var ingredient_fired = false;
  var logged_in = false;

  var ingredients = [];
  var actions = [];

  $("#mybook-body").hide();
  $("#preview").hide();

  // $("#site-name").click();

  // if (!logged_in && $("#login").hasClass("hide")) {
  //   $("#index-body").show();
  //   logged_in = true;
  // }

  $("#go-home-lnk, #site-name").click(function() {
    $("#index-body").show();
    $("#mybook-body").hide();
    $("#home-li").addClass("active");
    $("#mybook-li").removeClass("active");
    if (!$(".navbar-toggle").hasClass("collapsed")){
      $(".navbar-toggle").click();      
    }
  });

  $("#go-mybook-lnk").click(function() {
    $("#index-body").hide();
    $("#mybook-body").show();
    $("#mybook-li").addClass("active");
    $("#home-li").removeClass("active");
    if (!$(".navbar-toggle").hasClass("collapsed")){
      $(".navbar-toggle").click();      
    }
  });

  $(".dynamic-ingredient").submit(function(e) {
    e.preventDefault();

    var key = $(this).attr('id');
    var keyplushash = "#"+key;
    var valu = $(keyplushash+" input").val();

    if (valu == "") return false;

    var used_string = "ingredient-"+num_ingredients;

    // alert(used_string);

    ingredients.push({used_string: valu});
    // ingredients[used_string] = valu;

    console.log("("+used_string+", "+valu+")");

    num_ingredients++;
    console.log(num_ingredients);


    $(keyplushash+" input").val('');

    var $new_li = $("<li class='list-group-item' id='li-"+used_string+"'>"+valu+"</li>)");

    console.log($new_li);

    $("#ingredient-ul").append($new_li);

  });

  $(".dynamic-action").submit(function(e) {
    e.preventDefault();
    var key = $(this).attr('id');
    console.log(key);
    var keyplushash = "#"+key;
    var valu = $(keyplushash+" input").val();
    console.log(valu);

    if (valu == "") return false;//stop submitting blanks

    var used_string = "action-"+num_actions;
    console.log("Used_string is " + used_string);

    // alert(used_string);

    // actions.push({used_string: valu});

    // actions["ingredient-"+num_actions] = valu;

    // console.log("("+used_string+", "+valu+")");

    num_actions++;
    console.log(num_actions);


    $(keyplushash+" input").val('');//clear out the field



    var $new_li = $("<li class='list-group-item' id='li-"+used_string+"'>"+valu+"</li>)");

    console.log($new_li);

    $("#action-ul").append($new_li);

  });

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
        $('#preview').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  $("#img-upload").change(function() {
    readURL(this);
    $("#preview").show();
  });

  $("#save-card-btn").click(function(e){
    e.preventDefault();
    $(".dynamic-ingredient").submit();
    $(".dynamic-action").submit();
    // alert("Need to JSONify the data");
    var JSONdata = JSONify();
    console.log(JSONdata);
    pushRecipe(JSONify);
  });

  function JSONify(){
    var send_data = {
      "name": $(".new-card-data input").val(),
      "ingredients": [],
      "actions": [],
      "time": $("#time-submit input").val()
    };
    // send_data['name'] = $(".new-card-data input").val();
    // send_data['pic'] = $("#preview").attr('src');
    // send_data['ingredients'] = ingredients;
    // send_data['actions'] = actions;
    // send_data['time'] = $("#time-submit input").val();
    send_data.ingredients = ingredients;
    send_data.actions = actions;
    console.log(send_data);
    return send_data;
  }

  $(".new-card-data").submit(function(e){
    e.preventDefault();
  });



});