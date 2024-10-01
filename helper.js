const students = require('./students.json');

//Írj függvényt annak kiszűrésére, hogy a tanulók melyik emeleten laknak.
function f1(floor) {
   return students.filter(
    (st) => {
        return st.dormitoryFloor === floor
    }
   )
  }

  console.log(f1(2))


  const getFloorNum = (floorNumber) => {
    let studentsOnXFloor = 0;
    students.forEach(student => {
        console.log(student.dormitoryFloor);
        if (floorNumber !== "undefined" && student["dormitoryFloor"] === floorNumber) {
            studentsOnXFloor++;
        }
    })
    if(floorNumber !== "undefined") console.log("Number of students on floor " + floorNumber + ": " + studentsOnXFloor);
}

getFloorNum(2);

const clubs = {};
const uploadClub = () => {
    students.forEach(student => {
        !clubs[student.club] ? (clubs[student.club] = 1) : (clubs[student.club]++);
    });
}

uploadClub();
console.log(clubs);

const validateFreeDormotory = () => {
    students.forEach(student => {
        if (student["freeDormitory"] && student["dormitoryPrice"] !== null) {
            console.log(student);
        }
    })
}
validateFreeDormotory();