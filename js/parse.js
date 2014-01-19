
  Parse.initialize("SvtOXpjNcHr97ff1Ii1Z3v9t9h8glThKmUByUCji", "shMVnpVWSjl12KcbONuCobrhYCmSWujzs7QMhAlW");

  // var TestObject = Parse.Object.extend("TestObject");
  // var testObject = new TestObject();
  // testObject.save({foo: "bar"}).then(function(object) {
  //   alert("yay! it worked");
  // });

  function assemble_ingredients() {
    var ingredient_data = [];

    $(".ingredient-item").each(function(index, element){
      
      var keyname = $(element).attr('id');
      var value_str = $(this).val();
      var key_str = new String(keyname);

      console.log(typeof keyname);
      console.log(typeof value_str);

      ingredient_data.push({
        key: key_str,
        value: value_str
      });
      // var value_str = $(this).val();
      // var key = $(element).attr('id');

      // var appendage = {};
      // appendage[key] = value_str;
      // ingredient_data.push(appendage);
      // console.log(index);
    });

    return ingredient_data;
  }


  function pushRecipe() {
    var Recipe = Parse.Object.extend("Recipe");
    var recipe = new Recipe();

    var name_p = $("#recipe-name").val();
    // var ingredients_p = $(".ingredient-item").val();
    // console.log(ingredients_p);
    var actions_p = $(".action-item").val();
    var time_p = $("#recipe-time").val();

    var ingredients_p = assemble_ingredients();



    recipe.save({name: name_p, ingredients: ingredients_p, actions: [actions_p], time: time_p, date: new Date()}).then(function(object) {
      alert("Your data was finally pushed");
    });

  }

  



    // var $frm = $("#new-card-data");
    // var data = $frm.serialize();
    // console.log("HEYERYTEYRTE:          " + data);


    

    // var Recipe = Parse.Object.extend("Recipe");
    // var recipe = new Recipe();

    // recipe.set("name", name_p);
    // recipe.set("ingredients", ingredients_p);
    // recipe.set("actions", actions_p);
    // recipe.set("time", time_p);
    // recipe.set("date", new Date());

    // recipe.save().then(function(object) {
    //   alert("FINALLY");
    // });


    // recipe.save().then(function(object){
      // alert("Yay!");
    // });


    // $("input").val("");

    // $("li").remove();


    // console.log($("#new-card-data #recipe-name").val());
    // console.log(frm);

    // recipe.set("name", frm.);
    // recipe.set("")


    // console.log(jsonObj);
    // recipe.save(jsonObj).then(function(object){
    //   alert("Yay!")
    // });
    // $("#new-card-data")[0].reset();
    
  
  




// {"name": "Steak",
//   "ingredients": [
//     {"ingredient-0": "meat"},
//     {"ingredient-1": "pepper"}
//   ],
//   "actions": [
//     {"action-0": "cook"},
//     {"action-1": "eat"}
//   ],
//   "time": "20"
// }