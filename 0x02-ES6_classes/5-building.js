/* eslint-disable */

export default class Building {
    constructor(sqft = Number) {

        this.sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }

    set sqft(val) {
        this._sqft = val;
    }

    evacuationWarningMessage() {
        throw new Error(`Class extending Building must 
        override evacuationWarningMessage`);
    }
}