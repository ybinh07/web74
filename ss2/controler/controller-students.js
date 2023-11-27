
const { createStudent, getStudent, getStudentById, updateStudentById, deleteStudentById, filteredStudent, pagination } = require("../util/students");

  
  const createStudentController = (req, res) => {
    const student = req.body;
    const result = createStudent(student);
    res.json({
      message: "Create student successfully",
      result,
    });
  };
  
  const getStudentController = (req, res) => {
    const result = getStudent();
    res.json({
      message: "Get students successfully",
      result,
    });
  };
  
  const getStudentByIdController = (req, res) => {
    const { id } = req.params.id;
    const result = getStudentById(id);
    return res.json({
      message: "Get students successfully",
      result,
    });
  };
  
  const updateStudentByIdController = (req, res) => {
    const { id } = req.params.id;
    const result = updateStudentById(id, req.body);
    return res.json({
      message: `Update students with ${id} successfully`,
      result,
    });
  };
  
  const deleteStudentByIdController = (req, res) => {
    const { id } = req.params.id;
    deleteStudentById(id);
    return res.json({
      message: `Delete student with ${id} successfully`,
    });
  };
  const filteredStudentController = (req,res) => {
    const {name} = req.query.name
    const result=filteredStudent(name);
    return res.json({
      result
    })
   
  }
  const paginationController = (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 5;
    const result = pagination(page,limit)
    res.json({
      result
    })
  }
  module.exports = {
    createStudentController,
    deleteStudentByIdController,
    getStudentByIdController,
    getStudentController,
    updateStudentByIdController,
    filteredStudentController,
    paginationController
  };