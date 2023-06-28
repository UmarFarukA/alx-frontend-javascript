export default function returnHowManyArguments(...x) {
    let count = 0;
    for (let index = 0; index < x.length; index++) {
        count += index;
    }

    return count;
}