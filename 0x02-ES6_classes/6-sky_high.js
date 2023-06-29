/* eslint-disable */

import Building from "./5-building";

export default class SkyHighBuilding extends Building {
    constructor(floors) {
        super();
        this._floors = floors;
    }

    get floors() {
        return this._floors;
    }

    set floors(val) {
        this._floors = val;
    }

    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors`
    }
}