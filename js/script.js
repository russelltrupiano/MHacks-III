$(document).ready(function(){

  var num_ingredients = 0;
  var num_actions = 0;
  var ingredient_fired = false;
  var logged_in = false;

  var ingredients = [];
  var actions = [];

  $("#mybook-body").hide();
  $("#preview").hide();

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

  $("#img-upload-pretty").click(function(e){
    e.preventDefault();
    $("#img-upload").click();
    $("#remove-upload").removeClass("hide");
  });

  $("#new-card-data").submit(function(e) {
    e.preventDefault();
    var $submitted_item = $(document.activeElement);
    // console.log($submitted_item.attr('class'));
    if ($submitted_item.hasClass("ingredient-item")){
      
      console.log("Got ingredient to fire");

      var $name_ingredient = $submitted_item.attr('name');
      var $value_ingredient = $submitted_item.val();

      if ($value_ingredient == "") return false;

      var $new_li = $("<li class='list-group-item' meta="+$name_ingredient+" id='li-"+$name_ingredient+"'>"+$value_ingredient+"</li>)");      

      $("#ingredient-ul").append($new_li);

      $submitted_item.hide();

      num_ingredients++;

      var $new_input = $("<input type='text' class='form-control ingredient-item' name='ingredient-"+num_ingredients+"' placeholder='New Ingredient'>");

      $("#dynamic-ingredient").append($new_input);

      $("input[name=ingredient-"+num_ingredients+"]").focus();
    }
    else if ($submitted_item.hasClass("action-item")){
      
      console.log("Got action to fire");

      var $name_action = $submitted_item.attr('name');
      var $value_action = $submitted_item.val();

      if ($value_action == "") return false;

      var $new_li = $("<li class='list-group-item' meta="+$name_action+" id='li-"+$name_action+"'>"+$value_action+"</li>)");      

      $("#action-ul").append($new_li);

      $submitted_item.hide();

      num_actions++;

      var $new_input = $("<input type='text' class='form-control action-item' name='action-"+num_actions+"' placeholder='New Step'>");

      $("#dynamic-action").append($new_input);

      $("input[name=action-"+num_actions+"]").focus();

    }
    else {
      if ($("#recipe-name").val() == ""){
        $("#recipe-name").val("Untitled");
        if ($("input[name=ingredient-"+num_ingredients+"]").val() == ""){
          // $("input[name=ingredient-"+num_ingredients+"]").remove();
        }
        if ($("input[name=action-"+num_actions+"]").val() == ""){
          // $("input[name=action-"+num_actions+"]").remove();
        }
      }
      // var data = frm.serializeArray();
      // var data = $.toJSON(frm.serializeArray());
      // console.log(data);
      console.log("About to push");
      pushRecipe();
    }
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

  // var img_shown = false;

  $("#img-upload").change(function() {
    // if (img_shown == false){
      readURL(this);
      $("#preview").show();
      // img_shown = true;
      $("#img-upload-pretty").text("Change Photo");
    // }
    // else {
    //   $("#preview").hide();
    //   img_shown = false;
    //   $("#img-upload-pretty").text("Add a Photo");
    // }
    
  });

  $("#remove-upload").click(function(e) {
    e.preventDefault();
    $("#preview").hide();
    $("#img-upload-pretty").text("Add A Photo");
    $("#remove-upload").hide();
  });

  
});