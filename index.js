// Write your solution in this file!
const employee = {name:"Justus", streetAddress:"Ongata"};

function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployee={...employee,name:"Sam",streetAddress:"11 Broadway"};
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
   employee.name="Sam";
   employee.streetAddress="12 Broadway"
   return employee;

}
function deleteFromEmployeeByKey(employee,key){
    const Employee={...employee};
    delete Employee.name;
    return Employee;
    
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee.name;
    return employee;
}