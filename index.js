let finalPrice = 0;

let cupSize = prompt('Please Select Cup Size s , m , l');

if (cupSize == 's') {
  finalPrice = finalPrice + 45;
  console.log('Cup Size : s => 45 L.E');
} else if (cupSize == 'm') {
  finalPrice = finalPrice + 55;
  console.log('Cup Size : m => 55 L.E');
} else if (cupSize == 'l') {
  finalPrice = finalPrice + 65;
  console.log('Cup Size : l => 65 L.E');
} else {
  document.write('Invalid Size');
}

let extraMilk = confirm('Do you want milk ?');
if (extraMilk == true) {
  finalPrice = finalPrice + 5;
  console.log('Extra Milk => 5 L.E');
}

let extraSyrup = confirm('Do you want to add Syrup ?');
if (extraSyrup == true) {
  finalPrice = finalPrice + 7;
  console.log('Extra Syrup => 7 L.E');
}

let extraShoot = confirm('Do you want to add an extra Shoot ?');
if (extraShoot == true) {
  finalPrice = finalPrice + 10;
  console.log('Extra Shoot => 10 L.E');
}

let isStudent = confirm('Are you a Student?');

if (isStudent == true) {
  let discountValue = (20 / 100) * finalPrice;
  finalPrice = finalPrice - discountValue;
  console.log('Student Discount => - ' + discountValue + ' L.E');
}

let vat = (14 / 100) * finalPrice;
finalPrice = finalPrice + vat;
console.log('VAT 14% value => ' + vat + ' L.E');

console.log('Final Price is : ' + finalPrice + ' L.E');
