// Loading fs module
const fs = require("fs");
// Importing the DB
const courses = require("../model/courses.json");
const registrations = require("../model/registration.json");

// Helper Function for persistence
const saveToDB = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

// ==================== COURSES ====================

const createCourse = async (req, res) => {
  const { course, instructor } = req.body;

  const keyId = courses.map((e) => e.id);
  const actualId = keyId.map((e) => Number(e.slice(2)));
  const id = Math.max(...actualId) + 1;

  const newCourse = {
    id: `CS${id}`,
    course,
    instructor,
  };

  courses.push(newCourse);

  await saveToDB("./model/courses.json", JSON.stringify(courses, null, 2));

  res.status(201).json({
    message: `Course with ID ${newCourse.id} has been created successfully`,
    data: newCourse,
  });
};

const getAllCourses = (req, res) => {
  res.status(200).json({
    message: "All courses retrieved successfully",
    data: courses,
  });
};

const getCourseById = (req, res) => {
  const { id } = req.params;
  const foundCourse = courses.find((e) => e.id === id);

  res.status(200).json({
    message: `Course with ID ${id} retrieved successfully`,
    data: foundCourse,
  });
};

const replaceCourse = async (req, res) => {
  const { course, instructor } = req.body;
  const id = req.params.id;

  const foundCourse = courses.find((e) => e.id === id);

  foundCourse.course = course;
  foundCourse.instructor = instructor;

  await saveToDB("./model/courses.json", JSON.stringify(courses, null, 2));

  res.status(200).json({
    message: `Course with ID ${id} has been replaced`,
    data: foundCourse,
  });
};

const updateCourse = async (req, res) => {
  const id = req.params.id;
  const { course, instructor } = req.body;

  const patchedCourse = courses.find((e) => e.id === id);

  patchedCourse.course = course || patchedCourse.course;
  patchedCourse.instructor = instructor || patchedCourse.instructor;

  await saveToDB("./model/courses.json", JSON.stringify(courses, null, 2));

  res.status(200).json({
    message: `Course with ID ${id} has been patched successfully`,
    data: patchedCourse,
  });
};

const deleteCourse = async (req, res) => {
  const id = req.params.id;
  const courseIndex = courses.findIndex((e) => e.id === id);

  courses.splice(courseIndex, 1);

  await saveToDB("./model/courses.json", JSON.stringify(courses, null, 2));

  res.status(200).json({
    message: `Course with ID ${id} has been deleted successfully`,
  });
};

// ==================== REGISTRATIONS ====================

const createRegistration = async (req, res) => {
  const { studentName, gender, enrolledCourse } = req.body;

  const keyId = registrations.map((e) => e.id);
  const actualId = keyId.map((e) => Number(e.slice(3)));
  const id = Math.max(...actualId) + 1;

  const student = {
    id: `REG${String(id).padStart(3, "0")}`,
    studentName,
    gender,
    enrolledCourse,
  };

  registrations.push(student);

  await saveToDB(
    "./model/registration.json",
    JSON.stringify(registrations, null, 2),
  );

  res.status(201).json({
    message: `Student with ID ${student.id} has been registered successfully`,
    data: student,
  });
};

const getAllRegistrations = (req, res) => {
  res.status(200).json({
    message: "All registrations retrieved successfully",
    data: registrations,
  });
};

const getRegistrationById = (req, res) => {
  const { id } = req.params;
  const student = registrations.find((e) => e.id === id);

  res.status(200).json({
    message: `Registration with ID ${id} retrieved successfully`,
    data: student,
  });
};

const replaceRegistration = async (req, res) => {
  const { enrolledCourse, studentName, gender } = req.body;
  const id = req.params.id;

  const student = registrations.find((e) => e.id === id);

  student.enrolledCourse = enrolledCourse;
  student.studentName = studentName;
  student.gender = gender;

  await saveToDB(
    "./model/registration.json",
    JSON.stringify(registrations, null, 2),
  );

  res.status(200).json({
    message: `Registration with ID ${id} has been replaced`,
    data: student,
  });
};

const updateRegistration = async (req, res) => {
  const id = req.params.id;
  const { enrolledCourse, studentName, gender } = req.body;

  const patchedReg = registrations.find((e) => e.id === id);

  patchedReg.enrolledCourse = enrolledCourse || patchedReg.enrolledCourse;
  patchedReg.studentName = studentName || patchedReg.studentName;
  patchedReg.gender = gender || patchedReg.gender;

  await saveToDB(
    "./model/registration.json",
    JSON.stringify(registrations, null, 2),
  );

  res.status(200).json({
    message: `Registration with ID ${id} has been patched successfully`,
    data: patchedReg,
  });
};

const deleteRegistration = async (req, res) => {
  const id = req.params.id;
  const regIndex = registrations.findIndex((e) => e.id === id);

  registrations.splice(regIndex, 1);

  await saveToDB(
    "./model/registration.json",
    JSON.stringify(registrations, null, 2),
  );

  res.status(200).json({
    message: `Registration with ID ${id} has been deleted successfully`,
  });
};

// ==================== EXPORTS ====================

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  replaceCourse,
  updateCourse,
  deleteCourse,
  createRegistration,
  getAllRegistrations,
  getRegistrationById,
  replaceRegistration,
  updateRegistration,
  deleteRegistration,
};
