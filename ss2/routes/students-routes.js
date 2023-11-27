
const  express = require("express");
const studentRouter = express.Router()
const {
  createStudentController,
  deleteStudentByIdController,
  getStudentByIdController,
  getStudentController,
  updateStudentByIdController,
  filteredStudentController,
  paginationController
} = require("../controler/controller-students");

// Create student
studentRouter.post("/", createStudentController);
// Get Student - GET
studentRouter.get("/", getStudentController);
// Get student by id - Method: GET, data: {req.params}
studentRouter.get("/:id", getStudentByIdController);
// Update student by id - Method: PUT, data: {req.params, req.body}
studentRouter.put("/:id", updateStudentByIdController);
// Delete student by id - Method: DELETE, data: {req.params}
studentRouter.delete("/:id", deleteStudentByIdController);
// filter student by name
studentRouter.get("/",filteredStudentController);
// paginated Students 
studentRouter.get("/",paginationController);
module.exports = { studentRouter}