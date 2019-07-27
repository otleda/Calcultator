class CalcController{
    //ATRIBUTOS
    constructor(){
        this._operation = [];
        this._locale = 'pt-BR';
        this._displayEl = document.querySelector('#display');
        this._dateEl =  document.querySelector('#data');
        this._timeEl = document.querySelector('#time');
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }
    
    //METODOS
    setDisplayDateTime(){ 
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    // 01
    initialize(){

        this.setDisplayDateTime();
        
        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);

        this.setLastNumberToDisplay();
    }

    setError(){
        
        this.displayCalc = "error";
    }

    clearAll(){

        this._operation = [];
 
        this.setLastNumberToDisplay();
    }

    cancelEntry(){

        this._operation.pop();
    }

    //pegando o ultimo valor da array
    getLastOperation(){

        return this._operation[this._operation.length - 1];

     }

    //trocando o valor da array
     setLastOperation(value){
         
         this._operation[ this._operation.length -1 ] = value;
    
     }

    isOperator(value){
        
        return (['%', '/', '*', '-', '+'].indexOf(value) > -1);
    }

    setLastNumberToDisplay(){

        let LastNumber;

        for(let i = this._operation.length -1; i >= 0; i--){

            if(!this.isOperator(this._operation[i])){

                LastNumber = this._operation[i];

                break;
            }
        }

        if(!LastNumber) LastNumber = 0;

        this.displayCalc = LastNumber;
    }

    calc(){

        let last = '';

        if(this._operation.length > 3){

            last = this._operation.pop();

            let result = eval(this._operation.join(""));


        }

        let result = eval(this._operation.join(""));

        if(last == "%"){

            result /= 100;

            this._operation = [result];

        }else{

            this._operation = [result];

            if(last) this._operation.push(last);
        }

        this.setLastNumberToDisplay();
    }

    pushOperation(value){

        this._operation.push(value);

        if(this._operation.length > 3){

            this.calc();

        }

    }

    addOperation(value){
       
        if(isNaN(this.getLastOperation(value))){ 

            if(this.isOperator(value)){

                this.setLastOperation(value);

            }else if(isNaN(value)){

                // tratando o ponto

            }else{

                this.pushOperation(value);

                this.setLastNumberToDisplay();
            }
            
        }else{

            if(this.isOperator(value)){

                this.pushOperation(value);

            }else{

                let newValue = this.getLastOperation().toString() + value.toString();
                this.setLastOperation(parseInt(newValue));

                this.setLastNumberToDisplay();
            }
        }
        console.log('Yes', this._operation);
    }
        
    execBtn(value){     

        switch(value){
            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.cancelEntry();
                break;
        
            case 'porcento':
                this.addOperation('%');
                break;

            case 'divisao':
                this.addOperation('/');
                break;

            case 'multi':
                this.addOperation('*');
                break;

            case 'subtracao':
                    this.addOperation('-');
                break;
                
            case 'soma':
                    this.addOperation('+');
                break;

            case 'igual':
                    this.calc();
                break;

            case 'ponto':
                    this.addOperation('.');
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                    this.addOperation(parseInt(value));
                break;

            default:
                this.setError();
                break;
        }
    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach( event => {

            element.addEventListener(event, fn);

        });
    }

    // 02
    initButtonsEvents(){

        let buttons = document.querySelectorAll('.col');

        buttons.forEach( btn => {

            this.addEventListenerAll( btn, 'click drag', () => {
               
                let valueBtn = btn.className.replace("col btn-","");

                this.execBtn(valueBtn); 

            });
        });
    }

    //GETTERS E SETTERS
    get displayCalc(){
        return this._displayEl.innerHTML;
    }
    set displayCalc(value){
        this._displayEl.innerHTML = value;
    }


    get displayDate(){
        return this._dateEl.innerHTML;
    }
    set displayDate(value){
        this._dateEl.innerHTML = value;
    }


    get displayTime(){  
       return this._timeEl.innerHTML;
    }
    set displayTime(value){
        this._timeEl.innerHTML = value;
    }
    

    //Date classe nativa do javaScript
    get currentDate(){
        return new Date();
    }
    set currentDate(value){
        this._currentDate = value;
    }
}
