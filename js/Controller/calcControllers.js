class CalcControllers {
    constructor() {
        this._locale;
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#time');
        this._currentDate;
        this.initialize();
    }

    initialize() {
        setInterval(()=>{
          this.dipslayDate = this.currentDate.toLocaleDateString(this._locale);
          this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
        }, 1000);
    }

    get displayCalc() { return this._displayCalcEl.innerHTML; }
    set displayCalc(value) { this._displayCalcEl.innerHTML = value; }

    get currentDate() { return new Date(); }
    set currentDate(value) { this._currentDate = value; }
 
    get dipslayDate() { return this._dateEl.innerHTML; }
    set dipslayDate(value) { this._dateEl.innerHTML = value; }

    get displayTime() { return this._timeEl.innerHTML; }
    set displayTime(value) { this._timeEl.innerHTML = value; }
}