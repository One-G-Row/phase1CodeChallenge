//calculate net salary
//calculate payee/tax, NHIF deductions, NSSF deductions, gross salary and net salary

//creates objects in an array to store all the information for a specific user
const user = [
  {
    firstName: "Margaret",
    secondName: "Wachiuri",
  },
  {
    basicSalary: 550000,
  },
];
const salary = user[1].basicSalary;

//calculates the gross salary inclusive of benefits/ allowances before taxation
function grossSalary() {
  const hardshipAllowance = 10000;
  const transportAllowance = 8000;
  const houseAllowance = 30000;
  let grossPay =
    salary + hardshipAllowance + transportAllowance + houseAllowance;
  return { gross: grossPay };
}
grossSalary();

//calculates the amount that is to be taxed after contribution benefit is removed from gross salary
function taxablePayment() {
  const contributionBenefit = 1080;
  const theSal = grossSalary().gross;
  const taxPay = theSal - contributionBenefit;
  return { tax: taxPay };
}
taxablePayment();

//calculates the monthly taxable paye tax
function payee() {
  const taxRate = 32.5;
  const theTax = taxablePayment().tax;
  const payTax = (taxRate * theTax) / 100;
  return payTax;
}
payee();

//enter the nhif deduction
function nhifDeduction() {
  const nhifDed = 1700;
  return nhifDed;
}
nhifDeduction();

//calculate the nssf deductions
function nssfDeduction() {
  //the minimum and the maximum pensionable pay
  const minPayTier1 = 7000;
  const maxPayTier2 = 36000;

  //use the maxPayTier1 for tier 1. However, deduct minPayTier from maxPayTier 2 to get the rate where your salary falls under
  const tier1Pay = minPayTier1;
  const tier2Pay = maxPayTier2 - minPayTier1;

  //calculate the rate of the pensionable pay paid by the employee in tier 1 and tier2
  const payRateTier1 = (6 * tier1Pay) / 100;
  const payRateTier2 = (6 * tier2Pay) / 100;

  //calculate the totalPayment for tier1 and tier2
  totalPayment = payRateTier1 + payRateTier2;
  return totalPayment;
}
nssfDeduction();

//calculate the net pay using a function expression by deducting totalDeductions from grossSalary()
const netSalary = function () {
  const totalDeductions = payee() + nhifDeduction() + nssfDeduction();
  const newGross = grossSalary().gross;
  const netPay = newGross - totalDeductions;
  return netPay;
};
netSalary();

//links our html page with our js page
const firstName = document.getElementById("firstName");
const secondName = document.getElementById("secondName");
const grossSal = document.getElementById("grossSal");
const paye = document.getElementById("paye");
const nhifdeduc = document.getElementById("nhifdeduc");
const nssfdeduc = document.getElementById("nssfdeduc");
const netpay = document.getElementById("netpay");

//displays our findings on our html for our user to view.
function display() {
  firstName.textContent = user[0].firstName;
  secondName.textContent = user[0].secondName;
  grossSal.textContent = grossSalary().gross;
  paye.textContent = payee();
  nhifdeduc.textContent = nhifDeduction();
  nssfdeduc.textContent = nssfDeduction();
  netpay.textContent = netSalary();
}
display();
