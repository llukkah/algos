// The school dance is coming up! Everyone is excited but sadly, 
// not everyone will be able to go. Only students who are passing 
// at least half of their classes are allowed to attend the dance. 
// Write a function whoCanAttend that determines which students 
// are allowed to go to the dance, depending on their grades. 

// This function will accept two arguments:
// an object studentsGrades where the keys are student names and the values are arrays of grades
// a callback gradeChecker that checks if a grade is passing. 

// At our school, grades of 65 and over are considered passing, and below 65 are failing.
// The callback will return true for passing grades and false for failing grades. 

// Your function should return an array containing the names of the 
// students who are allowed to go to the dance. 




const whoCanAttend = (obj) => {
    let attendingDance = [];
    const map = new Map(Object.entries(obj));
    for (let [key, value] of map) {
        for (let i = 0; i < value.length; i++){
            const result = value.filter((n) => n >= 65).length;
            if (result >= value.length/2) {
                attendingDance.push(key);
            }
        }
    }
    return [...new Set(attendingDance)];
};

  const studentsGrades = {
    'Jaime': [50, 42, 44, 62, 100, 100],
    'Parker': [88, 91, 94, 78, 79, 85],
    'Victoria': [66, 57, 52, 68, 79, 85],
    'Rachel': [68, 63, 51, 68, 79, 85],
    'Max': [66, 57, 52, 52, 52, 85]
  }
  // const gradeChecker = grade => {
  //   if (grade >= 65) return true;
  //   else return false;
  // }
  console.log(whoCanAttend(studentsGrades)); // --> ['Parker', 'Victoria', 'Rachel']