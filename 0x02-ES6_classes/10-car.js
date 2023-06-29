/* eslint-disable */
export default class Car {

    constructor(brand = String, motor = String, color = String) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    cloneCar() {
        return new Car();
    }
}