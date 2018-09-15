class Human {
  gender = "male";
  printGender = () => {
    console.log(this.gender);
  }
}

class Person extends Human {
  name = "Gun";
  gender = "male";

  printMyName = () => {
    console.log(this.name);
  }
}

const person = new Person();
person.printGender();
person.printMyName();
