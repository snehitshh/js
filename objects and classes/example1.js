/*creating a website for your college.create a class user with 2 properties,name & email.It also has a method 
called viewData() that allows user to view website data*/

/*after doing above create a new class admin which inherits from user.Add a new method called editData to Admin 
that allows it to edit website data*/ 

let DATA="sensitive information";

class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("data=",DATA)
    }
}
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA="new value";
    }
}

let student1=new User("snehit","snehit@gmail.com");
let student2=new User("p1","abc@gmail.com");

let teacher1=new User("t1","t1@gmail.com");

let admin1=new Admin("admin","admin@gmail.com");

