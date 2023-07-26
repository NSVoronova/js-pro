const subjects = {
  mathematics: {
      students: 200,
      teachers: 6
  },
  biology: {
      students: 120,
      teachers: 6
  },
  geography: {
      students: 60,
      teachers: 2
  },
  chemistry: {
      students: 100,
      teachers: 3
  }
}
// 1 task
let subjectString = ``;
for (let key in subjects){
  subjectString = subjectString + key + ", ";
}
subjectString = subjectString.slice(0, -2);
console.log(subjectString);

// 2 task

let sumStudentsAndTeachers = 0;
for (let key in subjects){
  sumStudentsAndTeachers = sumStudentsAndTeachers + subjects[key].students+subjects[key].teachers;
}
console.log(sumStudentsAndTeachers);

// 3 task

let allStudents = 0;
let i = Object.keys(subjects).length;
for (const key in subjects) {
  allStudents += subjects[key].students;
}
let averageStudent = allStudents/i;
console.log(averageStudent);

// 4 task

let subjectsValuesArray = Object.values(subjects);
console.log(subjectsValuesArray);

// 5 task

let arr = Object.entries(subjects);

arr.sort(function sortedFunction(a, b){
  if (a[1].teachers>b[1].teachers) {
    return -1;
  }
  if (a[1].teachers<b[1].teachers) {
    return 1;
  }
  if (a[1].teachers===b[1].teachers) {
    return 0;
  }
})

let newArr = [];
for (let item of arr) {
  item.pop();
  let newItem = item.toString();
  newArr.push(newItem)
}

console.log(newArr);