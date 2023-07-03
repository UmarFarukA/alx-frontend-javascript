/* eslint-disable */

export default function getStudentsByLocation(arr, loc) {
    return arr.filter(el => el.location === loc);
}