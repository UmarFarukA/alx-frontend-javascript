/* eslint-disable */
export default function getStudentIdsSum(arr) {
    return arr.reduce((result, item) => {
        result + item.id, 0
    });
}