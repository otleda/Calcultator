class CalcControllers {
    constructor() {
        this._locale = 'pt-br';
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#time');
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    setIntervalDisplay() {
        this.dipslayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    initialize() {
        this.setIntervalDisplay();
        
        setInterval(()=>{
            this.setIntervalDisplay();
        }, 1000);
    }

    addEventListenerAll(element, events, fn) {
        events.split(' ').forEach((event)=>{
            element.addEventListener(event, fn);
        });
    }

    initButtonsEvents() {
        let buttons =  document.querySelectorAll('#buttons .col');

        buttons.forEach(button => {
            this.addEventListenerAll(button, 'click drag', () =>{
                console.log(button.className.replace('col btn-',''));
            });
        });
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