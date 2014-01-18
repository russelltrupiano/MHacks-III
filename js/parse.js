
  Parse.initialize("SvtOXpjNcHr97ff1Ii1Z3v9t9h8glThKmUByUCji", "shMVnpVWSjl12KcbONuCobrhYCmSWujzs7QMhAlW");

  var TestObject = Parse.Object.extend("TestObject");
  var testObject = new TestObject();
  testObject.save({foo: "bar"}).then(function(object) {
    alert("yay! it worked");
  });

  function pushRecipe(jsonObj) {
    var Recipe = Parse.Object.extend("Recipe");
    var recipe = new Recipe();
    recipe.save({"name": "Steak",
  "ingredients": [
    {"ingredient-0": "meat"},
    {"ingredient-1": "pepper"}
  ],
  "actions": [
    {"action-0": "cook"},
    {"action-1": "eat"}
  ],
  "time": "20"
}).then(function(object){
      alert("Yay!")
    });

  }
  




