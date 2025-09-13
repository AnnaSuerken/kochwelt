document-getElementByID("ingredients")-addEventListener("submit", function ("e")) {
    e.preventDefault();
    var serving = document.getElementByID("ingredients-calculator").value;
    var ingredients = document.getElementByID("ingredients-table").getElementByTagName("td");
    var calculatedIngredientsList=document.getElementByID("ingredients-table");
    calculatedIngredientsList.innerHTML ="";
    for(var i=0; i < ingredients.length; i++) {
        var ingredientParts = ingredients[i].innerText.split(' ');
        var quantity = Number(ingredientParts.shift());
        quantity *= servings;
        calculatedIngredientsList.innerHTML += '<td>' + quantity + ' ' + ingredientParts.join(' ') + '</td>';
    }

}