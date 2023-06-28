export default function appendToEachArrayValue(array, appendString) {

    for (let idx of array) {
        const value = idx;
        array = appendString + value;
    }

    return array;
}