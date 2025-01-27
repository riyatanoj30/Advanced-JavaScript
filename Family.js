function Person (first, last, age, designation){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.designation = designation;
}
const myFather = new Person("Tanoj", "Mhatre", 51, "Corporate Employee");
console.log(myFather);
const myMother = new Person("Vishwa", "Mhatre", 48, "Teacher");
console.log(myMother);
const myBrother = new Person("Soham", "Mhatre", 18, "Student");
console.log(myBrother);
const mySister = new Person("Swara", "Mhatre", 16, "Student");
console.log(mySister);