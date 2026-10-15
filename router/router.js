const express = require("express")
const router = express.Router()

const {
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
    deleteRegistration
} = require("../controller/user")

// Courses
router.post("/courses", createCourse)
router.get("/courses", getAllCourses)
router.get("/courses/:id", getCourseById)
router.put("/courses/:id", replaceCourse)
router.patch("/courses/:id", updateCourse)
router.delete("/courses/:id", deleteCourse)

// Registrations
router.post("/registrations", createRegistration)
router.get("/registrations", getAllRegistrations)
router.get("/registrations/:id", getRegistrationById)
router.put("/registrations/:id", replaceRegistration)
router.patch("/registrations/:id", updateRegistration)
router.delete("/registrations/:id", deleteRegistration)

module.exports = router