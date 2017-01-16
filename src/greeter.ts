/**
 * Student
 */
class Student {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeter() {
    return `Hello，您好${this.firstName} ${this.lastName} `;
  }
}

var user = new Student("Soft", "Sun");
console.log(user.greeter());


function demo() {
  let j = 8;
  return j;
  function d() {
    let j = 88;
  }
}

function dd() {
  var s = "3";
}

console.log(`j2=${j},and result = ${demo(j)}`);

[1,2,3].map(n => n + 1);