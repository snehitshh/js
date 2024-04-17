const employee={
    calcTax(){
        console.log("tax rate is 10%");
    },
};

const firstEmployee={
    salary:50000,
    calcTax(){
        console.log("tax rate is 20%");       //if the same function is in the object and prototype then the object's func is executed
    },               //here output will be tax rate is 20%
};

const firstEmployee1={
    salary:50000 
};

const firstEmployee2={
    salary:50000 
};
                              //prototype is a reference to the main object
firstEmployee.__proto__=employee;       //creating a prototype so that we can use the funcitons we have made in employee object
                                       //and we wont have to make new functions for employee1                                      
firstEmployee1.__proto__=employee; 

firstEmployee2.__proto__=employee; 

