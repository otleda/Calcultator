class CalcController {
    //ATRIBUTOS
    constructor(){
        this._displayCalc = 0;
        this._currentDate;
        this.initialize();
    }

    //GETTERS E SETTERS
    get displayCalc(){
        return this._displayCalc;
    }
    set displayCalc(value){
        this._displayCalc = value;
    }
    
    get currentDate(){
        return this._currentDate;
    }
    set currentDate(value){
        this._currentDate = value;
    }
    
    //METODOS
    initialize(){
        let $displayCalc = document.querySelector('#display');
        let $date =  document.querySelector('#data');
        let $time = document.querySelector('#time');

        $displayCalc.innerHTML = "1010";
        $date.innerHTML = "10/10/2019";
        $time.innerHTML = "22:59";
    }
}