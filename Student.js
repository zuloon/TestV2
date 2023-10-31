class Student{
    
    courses = []

    constructor(id,name){
        this.id = id
        this.name = name
    }

    enroll(course){
        this.courses.push(course)
    }

    getinfo(){
        return `${this.name},${this.id},${this.courses}`
    }
}
module.exports = {Student}