//Joshua O. Pagcaliwagan CMSC 100 Exer6 MongoDB
import mongoose from 'mongoose';

//I put these in the code because I keep getting an econnrefused error without it when connecting to MongoDB Atlas, reference below
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1"]); 

//connect to mongodb, I specifically chose to use MongoDB Atlas (online version of MongoDB) instead, that's why the link is like that
await mongoose.connect('mongodb+srv://b:b@exer6.svumr.mongodb.net/StudentDatabase?retryWrites=true&w=majority&appName=Exer6', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//student model
const Student = mongoose.model('Student', {  
    stdnum: String,  
    fname: String,  
    lname: String,  
    age: Number  
}, 'studentData');

//save student, use.save, returns true or false msg based on result
const save = async (req, res) => {  
    res.send(await new Student(req.body).save().then(() => ({ inserted: true })).catch(() => ({ inserted: false })));  
};

//update student, use updateOne, example: Mary Jane Watson to Mary Jane Parker, false if not updated
const upd = async (req, res) => {  
    res.send(await Student.updateOne(  
        { fname: req.body.fname },  
        { $set: { fname: req.body.newFname, lname: 'Parker' } }  
    ).then(result => result).catch(err => ({ error: false })));  
};

//remove user, use deleteOne, returns true or false based on result
const rem = async (req, res) => {  
    res.send(await Student.deleteOne({ stdnum: req.body.stdnum })  
        .then(() => ({ deleted: true }))  
        .catch(() => ({ deleted: false })));  
};

//remove all users, use deleteMany, returns true or false based on result
const remAll = async (req, res) => {
  res.send(await Student.deleteMany({})
    .then(result => ({ deleted: result.deletedCount > 0 }))
    .catch(err => ({ deleted: false })));
};

//get user by stud num, use find with stud num, returns empty array if none
const getU = async (req, res) => {
    const student = await Student.find({ stdnum: req.query.stdnum });
    res.send(student);
};

//get all members, use find, returns empty array if
const getAll = async (req, res) => {
    const students = await Student.find({});
    res.send(students);
};

//export functions
export { save, upd, rem, remAll, getU, getAll };

/*References:
https://www.mongodb.com/community/forums/t/error-querysrv-econnrefused-mongodb/259042/4
https://www.mongodb.com/products/platform/atlas-database
mongodb+srv://b:b@exer6.svumr.mongodb.net/StudentDatabase?retryWrites=true&w=majority&appName=Exer6 (Connection Link)
*/