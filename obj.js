function Person (first, last, age, eye){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyecolor = eye;
}
const myFather = new Person("John", "Doe", 50, "Blue");
console.log(myFather);