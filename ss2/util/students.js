const fs = require("fs")
const path = require("path")
function createStudent({ name, age, gender }) {
  console.log(path.resolve());
  // Đọc file
  const students = JSON.parse(fs.readFileSync("students.json"));
  //   Tạo student giả
  const student = {
    id: Math.floor(Math.random() * 100),
    name: "c",
    age: 19,
    gender: "male",
  };
  const results = [...students, { ...student }];
  fs.writeFileSync("students.json", JSON.stringify(results));
  return student;
}

function getStudent() {
  // Đọc file
  const students = JSON.parse(fs.readFileSync("students.json"));
  return students;
};

function getStudentById(id) {
  // Đọc file
  const students = JSON.parse(fs.readFileSync("students.json"));
  const student = students.find((student) => student.id === +id); // dấu + trước id để chuyển id thành kiểu dữ liệu number
  console.log(student);
  return student;
}

const updateStudentById = (id, body) => {
  // Đọc file
  const students = JSON.parse(fs.readFileSync("students.json"));
  const result = students.map((student) => {
    if (student.id === +id) {
      return { ...student, ...body };
    }
    return student;
  });
  fs.writeFileSync("students.json", JSON.stringify(result));
  return result;
};

const deleteStudentById = (id) => {
  // Đọc file
  const students = JSON.parse(fs.readFileSync("students.json"));
  const result = students.filter((student) => student.id !== +id); // dấu + để chuyển id từ kiểu dữ liệu chuỗi thành số
  fs.writeFileSync("students.json", JSON.stringify(result));
};
const filteredStudent = (name)=>{
  const students = JSON.parse(fs.readFileSync("students.json"));
  if(name){
    const filterByName = students.filter((student)=> student.name.toLowerCase().includes(name.toLowerCase()))
    return filterByName
  }
}
// const student = getStudent();

const pagination = (page,limit) => {
  const students = JSON.parse(fs.readFileSync("students.json"));
  const startIndex = (+page-1)* +limit;
  const endIndex = startIndex + +limit
    const totalStudents = students.length;
    const paginatedStudents = students.slice(startIndex,endIndex );
    const toTalPage = Math.ceil(totalStudents/ +limit);
    return paginatedStudents,toTalPage
}
module.exports={deleteStudentById,updateStudentById,getStudentById,getStudent,createStudent,pagination,filteredStudent}