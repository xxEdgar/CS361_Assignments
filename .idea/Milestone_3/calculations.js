

function calculate() {
    var interestRate = parseFloat(document.getElementById('interest-rate').value);
    var interestRateType = parseFloat(document.getElementById('interest-rate-type').value);
    var time = parseInt(document.getElementById('time').value);
    var initialValue = parseFloat(document.getElementById('initial-value').value);
    var futureValue = initialValue * Math.pow(1 + interestRate, time);

    document.getElementById('future-value').innerText = futureValue.toFixed(2);
    document.getElementById('result').style.display = 'block';
}