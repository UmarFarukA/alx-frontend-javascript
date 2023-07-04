/* eslint-disable */

export default function getStudentsByLocation(students, loc) {
    const arr = students.filter(el => el.location === loc);
    return arr;
}