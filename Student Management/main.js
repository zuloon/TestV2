const {Studentmanager} = require('./studentmanagement')
const sm = Studentmanager()

for (let i = 0; i < 10; i++) {
  sm.addStudent(i, `${i}`);
}
console.log(sm.getAllStudentInfo());
sm.enrollStudent(9, 'INT202');
sm.enrollStudent(9, 'INT201');
console.log(sm.getAllStudentInfo(9));
