// const student = {
//     name: "Muhammedali", // key - name, value - 'Arlen'
//     age: "18",
//     gender: "Boys",
//     marks: [10, 10, 10, 8, 5],
//     isJsDev: true,
// };

// console.log(student.gender);
// console.log(student["gender"]);
// console.log(student.marks[3]);
// console.log(Object.keys(student));
// console.log(Object.values(student));
// const newAge = (student.age = "16");
// console.log(newAge);
// console.log(student.marks[4]);

const students = [
    {
        name: "Sumaya", // key - name, value - 'Arlen'
        age: "16",
        gender: "female",
        marks: [10, 10, 10, 8, 5],
        isJsDev: true,
    },
    {
        name: "Nurjigit", // key - name, value - 'Arlen'
        age: "17",
        gender: "Boys",
        marks: [10, 10, 10, 8, 5],
        isJsDev: true,
    },
    {
        name: "Dauren", // key - name, value - 'Arlen'
        age: "13",
        gender: "Boys",
        marks: [10, 10, 10, 8, 5],
        isJsDev: true,
    },
    {
        name: "Muhammedali", // key - name, value - 'Arlen'
        age: "18",
        gender: "Boys",
        marks: [10, 10, 10, 8, 5],
        isJsDev: true,
    },
];
console.log(students);

// console.log(students);

// for(let i = 0; i< students.length; i++ ){
//     console.log('valus:' + students[i].name);
// }

// for(const item in students ){ //bul metotto biz index menen znachenie chygara alabyz
//     console.log(students[item]);
// }

// for (const item of students) {
//bul metotto biz index menen znachenie chygara alabyz
// console.log(item);
// }

let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}
