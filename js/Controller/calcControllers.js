class CalcControllers {
    constructor() {
        this._operation = [];
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

    initialize() { // 1 METODO PRINCIPAL
        this.setIntervalDisplay();
        setInterval(()=> {
            this.setIntervalDisplay();
        }, 1000);
        this.setLastNumberToDisplay();
    }

    addEventListenerAll(element, events, fn) {
        events.split(' ').forEach((event)=> {
            element.addEventListener(event, fn);
        });
    }

    clearAll() {
        this.operation = [];
        this.setLastNumberToDisplay();
    }

    clearEntry() {
        this.operation.pop();
        this.setLastNumberToDisplay();
    }

    setError() {
        this.displayCalc = "ERROR";
    }

    getLastOperation() {
       return this.operation[this.operation.length -1];
    }
    setLastOperation(value) {
        this.operation[this.operation.length -1] = value;
    }

    isOperation(value) {
        return (['%', '*', '/', '-', '+'].indexOf(value) > -1) // => O typeof vai busca na array se existe os sinais, se ele achar vai trazer o index.
    }

    calc() {
        let last = this.operation.pop();
        let result = eval(this.operation.join(' ')); // join() => junta toda a array eval() => calcula toda a expressao, mesmo o dado estiver como string.
        
        if (last == '%') {
            result /= 100;
            this.operation = [result];
        } else {        
            this.operation = [result, last];
        }
    }

    pushOperation(value) {
        this.operation.push(value);
        if(this.operation.length > 3) {
            this.calc();
        }
    }

    setLastNumberToDisplay() {
        let lastNumber;
        for (let i = this.operation.length - 1; i >= 0; i--) {
            if (!this.isOperation(this.operation[i])) {
                lastNumber = this.operation[i];
                break;
            }
        }
        if (!lastNumber) lastNumber = 0;
        this.displayCalc = lastNumber;
        console.log(this.displayCalc)
    }

    addOperation(value) {
        if (isNaN(this.getLastOperation())) {  // String "true", aqui vai ser tratado os operadores.
            if(this.isOperation(value)) {  
                this.setLastOperation(value); // troca o operador
            } else {  
                this.pushOperation(value);
                this.setLastNumberToDisplay();
            }    
        } else { // Number "false", aqui vai ser tratado os numeros.
            if (this.isOperation(value)) {
                this.pushOperation(value);
            } else {
                let newValue = this.getLastOperation().toString() + value.toString();
                this.setLastOperation(parseInt(newValue));
            }
            this.setLastNumberToDisplay();
        }
    }

    execBtn(value) {
        switch (value) {
            case 'c':
                this.clearAll();
                break;
            case 'e':
                this.clearEntry();
                break;
            case 'porcento':
                this.addOperation('%');
                break;
            case 'multi':
                this.addOperation('*');
                break;
            case 'divisao':
                this.addOperation('/');
                break;
            case 'subtr':
                this.addOperation('-');
                break;
            case 'soma':
                this.addOperation('+');
                break;
            case 'igual':
                
                break;
            case 'ponto':
                this.addOperation();
                break;
            case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '0':
                this.addOperation(parseInt(value));
                break;
            default:
                this.setError();
                break;
        }
    }

    initButtonsEvents() { // 2 METODO PRINCIPAL
        let buttons =  document.querySelectorAll('#buttons .col');
        buttons.forEach(button => {
            this.addEventListenerAll(button, 'click drag', () =>{
                let textBtn = button.className.replace('col btn-','');
                this.execBtn(textBtn);
            });
        });
    }   

    // METODOS ACESSORES GETERS E SETERS
    get displayCalc() {return this._displayCalcEl.innerHTML;}
    set displayCalc(value) {this._displayCalcEl.innerHTML = value;}

    get currentDate() {return new Date();}
    set currentDate(value) {this._currentDate = value;}
 
    get dipslayDate() {return this._dateEl.innerHTML;}
    set dipslayDate(value) {this._dateEl.innerHTML = value;}

    get displayTime() {return this._timeEl.innerHTML;}
    set displayTime(value) {this._timeEl.innerHTML = value;}

    get operation() {return this._operation;}
    set operation(value) {this._operation = value;}
}