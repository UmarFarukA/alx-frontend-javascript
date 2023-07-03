/* eslint-disable */

export default function updateStudentGradeByCity(students, city, newGrades) {

    let arr = students.filter(el => el.city === city);
    return arr.map(function (el) {
        if (el.id === newGrades.studentId) {
            el['grade'] = newGrades.grade;
        } else {
            el['grade'] = 'N/A';
        }
    });
}