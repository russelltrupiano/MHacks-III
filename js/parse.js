
  Parse.initialize("SvtOXpjNcHr97ff1Ii1Z3v9t9h8glThKmUByUCji", "shMVnpVWSjl12KcbONuCobrhYCmSWujzs7QMhAlW");

  // var TestObject = Parse.Object.extend("TestObject");
  // var testObject = new TestObject();
  // testObject.save({foo: "bar"}).then(function(object) {
  //   alert("yay! it worked");
  // });

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