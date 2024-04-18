class car{
    constructor(brand,mileage){
        console.log("creating new object");
        this.brand=brand;
        this.mileage=mileage;
    }
   start(){
    console.log("start");
   }
   stop(){
    console.log("stop");
   }
  /* setBrand(brand){              //this can be done inside constructor
    this.brandName=brand;
   }&*/
}

let hexa=new car("hexa",15);         // all the properties from the class are stored in hexa
hexa.setBrand("tata");
let lexus=new car();

//inheritance
class person{
    constructor(name){
        this.species="homo sapiens";
        this.name=name;
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }
}
class engineer extends person{         //engineer inherits the properties of person
  constructor(name){
    super(name);  // to invoke parent class constructor
    this.branch=branch;
  }
    work(){
        super.eat();
    console.log("solves problem");      //if there is a same function then child class function overrides the parents 
  }
}
class doctor extends person{         //engineer inherits the properties of person
    work(){
      console.log("treats patients");
    }
  }
let snehitObj=new engineer("electronics engineer");
let pravitObj=new doctor();