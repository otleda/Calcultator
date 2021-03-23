class CalcControllers {
    constructor() {
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
    }

    get displayCalc() { 
    return this._displayCalc;
    }
    set displayCalc(value) {
    this._displayCalc = value;
    }

    get currentDate() {
    return this._currentDate
    }
    set currentDate(value) {
    this._currentDate = value;
    }

    initialize() {
        let displayCalcEl = document.querySelector('#display');
        let dataEl = document.querySelector('#data');
        let timeEl = document.querySelector('#time');

        displayCalcEl.innerHTML = '1234567890';
        dataEl.innerHTML = '02/07/1985';
        timeEl.innerHTML = '00:00';
    }
     
}