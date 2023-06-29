/* eslint-disable */

export default class HolbertonCourse {

    constructor(name, length, students) {
        this._name = name;
        this._length = length;
        this._students = students;
    }

    getName() {
        return this._name;
    }

    setName(newName) {
        if (typeof (newName) === 'string') {
            this._name = newName;
        }
    }

    getLength() {
        return this._length;
    }

    setLength(newLength) {
        if (typeof (newLength) === 'number') {
            this._length = newLength;
        }
    }

    getStudents() {
        return this._students
    }

    setStudents(newStudents) {
        if (typeof (newStudents) === 'object') {

            this._students = newStudents;
        }
    }

}