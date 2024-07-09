function converter() {
    var currencies = ["UZS", "USD", "RUB", "INR"]
    var exchange = [
        [1,12000, 77.60, 74.25],
        [0.000083, 1, 0.00647, 0.00621],
        [0.0129, 154.53, 1, 0.96],
        [0.0135, 161.22, 1.04, 1]
    ]
    var amountUZS = prompt("Enter the amount UZS to convert:");
    
    if (isNaN(amountUZS || amountUZS <= 0)) {
        alert("Invalid value");
        return;
    }

    amountUZS = Number(amountUZS);

    var amountUSD = amountUZS * exchange[1][0];
    var amountRUB = amountUZS * exchange[1][2];
    var amountINR = amountUZS * exchange[1][3];

    function formatCurrency(amount) {
        var formattedAmount = amount.toFixed(2);
    }
}