/* eslint-disable */

export default class Building {
    constructor(sqft) {
        this.sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }

    // set sqft(val) {
    //     this._sqft = val;
    // }

    evacuationWarningMessage() {
        return new Error(`Class extending Building must 
        override evacuationWarningMessage`);
    }
}