/* eslint-disable */

export default class HolbertonCourse {

    constructor(name = String, length = Number, students = Array) {
        this._name = name;
        this._length = length;
        this._students = students;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof (newName) === 'string') {
            this._name = newName;
        }
    }

    get length() {
        return this._length;
    }

    set length(newLength) {
        if (typeof (newLength) === 'number') {
            this._length = newLength;
        }
    }

    get students() {
        return this._students
    }

    set students(newStudents) {
        if (typeof (newStudents) === 'object') {

            this._students = newStudents;
        }
    }

}