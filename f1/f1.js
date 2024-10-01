const students = require('../students.json');

//Írj függvényt annak kiszűrésére, hogy a tanulók melyik emeleten laknak.
function f1(floor) {
   return students.filter(
    (st) => {
        return st.dormitoryFloor === floor
    }
   )
  }
module.exports = f1;