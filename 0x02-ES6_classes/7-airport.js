/* eslint-disable */

export default class Airport {
    constructor(name = String, code = String) {
        this._name = name;
        this._code = code;
    }

    toString() {
        return `Airport [${this._code}] {_name: '${this._name}', _code: '${this._code}' }`;
    }
}