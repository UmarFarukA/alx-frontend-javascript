/* eslint-disable */

import Currency from "./3-currency";

export default class Pricing {

    constructor(amount, currency = Currency) {
        this._amount = amount;
        this._currency = currency;
    }

    get amount() {
        return this._amount;
    }

    get currency() {
        return this._currency;
    }

    set amount(value) {
        this._amount = value;
    }

    set currency(cur) {
        this._currency = cur;
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    static convertPrice(amount = Number, conversionRate = Number) {
        return amount * conversionRate;
    }
}