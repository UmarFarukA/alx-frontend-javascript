/* eslint-disable */

export default function updateStudentGradeByCity(students, city, newGrades) {

    if (Array.isArray(students) || Array.isArray(newGrades)) {
        let arr = students.filter(el => el.city === city);
        const updateObj = arr.map(function (el) {
            if (el.id === newGrades.studentId) {
                el['grade'] = newGrades.grade;
            } else {
                el['grade'] = 'N/A';
            }
        });

        return updateObj;
    }

    return [];


}