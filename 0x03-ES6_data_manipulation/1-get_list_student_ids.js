/* eslint-disable */

export default function getListStudentIds(arr) {
    if (arr instanceof Array) {
        const result = arr.map((el) => {
            el.id;
        });
        return result;
    } else {
        return [];
    }
}