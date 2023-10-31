const students = [
    {
      name: 'Sophia',
      attendance: [true, true, false, true, true],
      testScores: [88, 92, 85, 78, 90]
    },
    {
      name: 'Mason',
      attendance: [true, true, true, true, false],
      testScores: [70, 82, 88, 75, 62]
    },
    {
      name: 'Isabella',
      attendance: [true, false, false, true, true],
      testScores: [68, 71, 70, 60, 78]
    },
    {
      name: 'Liam',
      attendance: [true, true, true, true, true],
      testScores: [90, 87, 92, 88, 95]
    },
    {
      name: 'Olivia',
      attendance: [true, true, true, true, false],
      testScores: [72, 78, 75, 80, 62]
    }
  ]

function getAttendanceRate(student) {
    const allcome = student.filter((cm) => cm === true)
    return (allcome.length / student.length) * 100
}

function getAvgScore(student){
    return student.reduce((res, curr) => (res + curr) / student.length)
}

function underperformStudents(students) {
    return students.filter((cm) => {
        return getAttendanceRate(cm.attendance) < 80 && getAvgScore(cm.testScores) < 70
    }).map(obj => {
        return {name: obj.name,
                attendanceRate: getAttendanceRate(obj.attendance),
                avgScore: getAvgScore(obj.testScores)}
    })        
}

console.log(underperformStudents(students));