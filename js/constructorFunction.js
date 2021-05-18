class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// function User(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// }



const chan = new User(`changeon`, `Park`);
const yeol = new User('yeol', 'Yang');
const yong = new User('yong', 'Park');

console.log(chan.getFullName());
console.log(yeol.getFullName());
console.log(yong.getFullName());