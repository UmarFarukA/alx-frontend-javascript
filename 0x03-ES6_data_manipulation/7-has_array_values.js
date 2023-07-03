/* eslint-disable */
export default function hasValuesFromArray(set, array) {
    let count = 0;
    let flag = true;
    for (const item of array) {
        if (set.has(item)) {
            count++;
        }
    }

    if (count < array.length) {
        flag = false;
    }

    return flag;
}