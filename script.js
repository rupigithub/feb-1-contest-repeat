/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(e =>{
    if(e.marks > 50){
      console.log(e);
    }
  })
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(e =>{
    if(e.marks > 50){
      console.log(e);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let obj = {};
  obj.id = 4;
  obj.name = "susan";
  obj.age = "20";
  obj.marks = 35;
  arr.push(obj);
  console.log(arr);
}


function removeFailedStudent() {
  //Write your code here, just console.log
  arr.filter(e =>{
   if(e.marks >= 50){
    console.log(e);
   }
  })
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "Suhani", age: "20", marks: 55},
    { id: 6, name: "Rudra", age: "22", marks: 78},
    { id: 7, name: "Sumit", age: "27", marks: 97}
  ]
  let new_array = arr.concat(arr2);
  console.log(new_array);
}
