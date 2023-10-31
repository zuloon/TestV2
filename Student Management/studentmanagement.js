const {Student} = require('../Student')
function Studentmanager() {

    const stdcollection = []

function addStudent(id,name) {
    const std = new Student(id,name)
    stdcollection.push(std)
}

function enrollStudent(id,course) {
    const stdindex = stdcollection.findIndex((student) => student.id === id)
    stdcollection[stdindex].enroll(course)
}

function getStudentInfo(id) {
    return stdcollection.find((di) => di === id)
}

function getAllStudentInfo() {
    return stdcollection.map((student) => getStudentInfo(student));
}

return {Studentmanager,addStudent,enrollStudent,getAllStudentInfo,getStudentInfo}
}

module.exports = {Studentmanager}