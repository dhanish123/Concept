//normal fn

// const person ={
// name:"Dhanish",
// sayName:function(){
//     console.log(this.name);

// }
// }
// person.sayName()

//aarow fn

// const person={
//     name:"Inzaam",
//     sayName:()=>{
// console.log(this.name);

//     }
// }
// person.sayName()

// how arrow fn accesbile obj 

const person = {
  name: "Inzaam",
  sayName: function(){
    const arrow =()=>{
        console.log(this.name);
    }
    arrow()
  }
};
person.sayName();
