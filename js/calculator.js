
   
   
    function calculateIngredients(){

        let serving = document.getElementById("ingredientsValue").value;
        let errorMessage= "Bitte geben Sie eine Zahl zwischen 1 - 20 an!"

        let ingredientsAmount = {
        amountBrokkoli: 0.5,
        amountNudeln: 125,
        amountKochschinken: 25,
        amountSchmelzkaese: 100,
        amountSchmand: 100,
        amountSahne: 100,
        amountKaese: 1,
        }


        if (serving > 20 | serving < 1 ) {
            document.getElementById("errorMessage").innerHTML = errorMessage;
            errorElement.innerHTML = errorMessage;
            errorElement.style.display = "block"; 
    
            }
        else {

            document.getElementById("errorMessage").style.display = "none";

        document.getElementById("AmountBrokkoli").innerHTML = serving * ingredientsAmount.amountBrokkoli;
        document.getElementById("AmountNudeln").innerHTML = serving * ingredientsAmount.amountNudeln + " g";
        document.getElementById("AmountKochschinken").innerHTML = serving * ingredientsAmount.amountKochschinken + " g";
        document.getElementById("AmountSchmelzkaese").innerHTML = serving * ingredientsAmount.amountSchmelzkaese + " g";
        document.getElementById("AmountSchmand").innerHTML = serving * ingredientsAmount.amountSchmand + " g";
        document.getElementById("AmountSahne").innerHTML = serving * ingredientsAmount.amountSahne + " ml";
        document.getElementById("AmountKaese").innerHTML = serving * ingredientsAmount.amountKaese + " Beutel";
    }}

