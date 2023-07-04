/* eslint-disable */
export default function getStudentIdsSum(students) {
    const arr = students.reduce((result, item) => {
        result + item.id, 0
    });

    return arr;
}