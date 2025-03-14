//Joshua O. Pagcaliwagan CMSC 100 Exer6 MongoDB
import needle from 'needle';

const url = 'http://localhost:3000';//url

//sample students
const students = [
    { stdnum: "202300016", fname: "Mary Jane", lname: "Watson", age: 20 },
    { stdnum: "202201778", fname: "Ivana", lname: "Alawi", age: 21 },
    { stdnum: "202148292", fname: "Toni", lname: "Fowler", age: 22 },
    { stdnum: "202016383", fname: "Esnyr", lname: "Galvez", age: 23 },
    { stdnum: "201946289", fname: "Brent", lname: "Manalo", age: 24 }
];

//save test, loop through students, send post request, log body
const savee = () => {
  for (const student of students) {
    needle.post(`${url}/save-student`, student, (err, res) => {
      console.log(res.body);
    });
  }
};

//update test, send post request, log body
const updd = () => {  
    needle.post(`${url}/update`, { fname: "Mary Jane", lname: "Parker" }, (err, res) => {  
        console.log(res.body);  
    });  
};

//remove test, send post request, log body  
const remm = (stdnum) => {
  needle.post(`${url}/remove-user`, { stdnum }, (err, res) => {
    console.log(res.body);
  });
};

//remove all test, send post request, log body
const remAlll = () => {
  needle.post(`${url}/remove-all-user`, {}, (err, res) => {
    console.log(res.body);
  });
};

//get user test, send get request, log body 
const getUU = (stdnum) => {  
    needle.get(`${url}/user?stdnum=${stdnum}`, (err, res) => {  
        console.log(res.body);  
    });  
};

//get all test, send get request, log body
const getAlll = () => {
  needle.get(`${url}/members`, (err, res) => {
    console.log(res.body);
  });
};

//run tests, put or remove /* */ on the other functions if you want to run one function at a time
const run = () => {
    console.log("Saving, check MongoDB :)");
    savee();

    console.log("Updating, check MongoDB:)");
    updd();

    console.log("Getting :)");
    getUU("202300016");

    console.log("Getting All :)");
    getAlll();

    /*console.log("Removing, check MongoDB :)");
    remm("202300016");*/

    /*console.log("Removing All, check MongoDB :)");
    remAlll();*/
};

//run tests
run();