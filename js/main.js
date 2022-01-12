var  elMoneygramForm = document.querySelector (".moneygram__form");
var elMoneygramInput = document.querySelector (".moneygram__budget-input");
var elMoneygramSelect = document.querySelector (".moneygram__select");
var elMoneygramResult = document.querySelector (".moneygram__result");


var USD_TO_UZS = 10000;
var RUB_TO_UZS = 150;
var EURO_TO_UZS = 12000; 

elMoneygramForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    
    var moneygrammInput = elMoneygramInput.value.trim();
    var moneygrammSelect = elMoneygramSelect.value.trim();
    
    if (isNaN(moneygrammInput) || moneygrammInput <= 0) {
        elMoneygramResult.textContent = "To'g'ri ma'lumot kiriting!";
        return;
    }

    var convertedMoney = 0;
    
    if (moneygrammSelect === "usd") {
        convertedMoney = moneygrammInput * USD_TO_UZS;
    } else if (moneygrammSelect === "rub") {
        convertedMoney = moneygrammInput * RUB_TO_UZS;
    } else if (moneygrammSelect === "euro") {
        convertedMoney = moneygrammInput * EURO_TO_UZS;
    } else {
        convertedMoney = "Error";
    } 

    elMoneygramResult.textContent = convertedMoney;
    

})



