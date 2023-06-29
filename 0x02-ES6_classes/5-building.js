/* eslint-disable */

export default class Building {
    constructor(sqft = Number) {
        this._sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }

    evacuationWarningMessage() {
        throw new Error(`Class extending Building must 
        override evacuationWarningMessage`);
    }
}