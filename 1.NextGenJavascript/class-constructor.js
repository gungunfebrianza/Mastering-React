// Remember use this using babel!

class Developer {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }

  getName() {
    return this.fname + ' ' + this.lname;
  }
}

const gun = new Developer('Gun Gun', 'Febrianza');
console.log(gun);
