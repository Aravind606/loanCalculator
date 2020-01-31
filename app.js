var loanForm = document.getElementById('loan-form');

loanForm.addEventListener('submit', calculateResults);

function calculateResults(e) {
  console.log('calculating');
  var loanAmount = document.getElementById('loan-amount');
  var interest = document.getElementById('interest');
  var years = document.getElementById('years');
  var monthlyPayment = document.getElementById('monthly-payment');
  var totalPayment = document.getElementById('total-payment');
  var totalInterest = document.getElementById('total-interest');

  var principal = parseFloat(loanAmount.value);
  var calculateInterest = parseFloat(interest.value) / (12 * 100);
  var calculatePayments = parseFloat(years.value) * 12;

  var x = Math.pow(1 + calculateInterest, calculatePayments);

  var monthly = (principal * calculateInterest * x) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatePayments).toFixed(2);
    totalInterest.value = ((monthly * calculatePayments) - principal).toFixed(3);
  }
  e.preventDefault();

}