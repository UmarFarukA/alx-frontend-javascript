/* eslint-disable */

export default class Building {
    constructor(sqft = Number) {
        this._sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }

    set sqft(s = Number) {
        this._sqft = s;
    }

    evacuationWarningMessage() {
        throw new Error("Class extending Building must override evacuationWarningMessage");
    }
}