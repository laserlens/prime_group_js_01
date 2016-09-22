var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

for (var i = 0; i < employees.length; i++) {
  var report = empReport(employees[i]);
  console.log(report);
}

function empReport(emp) {
  var employeeName = emp [0];
  var empId = emp [1];
  var salary = parseInt(emp [2]);
  var rating = emp [3];
  var bonus = 0;
  var output = [];
  output[0] = emp[0];
  output[1] = calcBonus(rating, empId, salary)
  output [2] = salary + (bonus * salary);
  output [3] = Math.round(bonus * salary);

  return output;
}

function calcBonus(rating, empId, salary) {
  var bonus = 0;
  switch (rating) {
    case 5:
      bonus = 0.1
      break;
    case 4:
      bonus = .06
      break;
    case 3:
      bonus = .04
      break;
    default:
      bonus = 0.0
  }
  if (empId.length == 4) {
    bonus =+ .05;
  }
  if (salary > 65000) {
    bonus -= .01;
  }
  if (bonus > .13) {
    bonus = .13;
  }
  return bonus;
}
