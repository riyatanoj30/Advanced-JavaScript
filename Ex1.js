const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function registerExployee(){
  r1.question('Enter employee name: ', (name)=>{
    r1.question('Enter Date of Birth(YYYY-MM-DD): ', (dob)=>{
      r1.question('Enter Joining Date (YYYY-MM-DD): ', (joiningDate)=>{
        r1.question('Enter Salary: ', (salary)=>{
          if(!isValidateDate(dob) || !isValidDate(joiningDate) || !isValidSalary(salary)){
            console.log('Invalid input. Please try again.');
            r1.close();
            return;
          }
          
        })
      })
    })
  })
}