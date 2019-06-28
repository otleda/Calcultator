class CalcController {
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
    }


    setError(){
        this.displayCalc = "error";
    }

    clearAll(){
        this._operation = [];
    }

    cancelEntry(){
        this._operation.pop();
    }
    
    getLastOperation(){

        return this._operation[this._operation.length - 1];
    }

    setLastOperation(value){

        this._operation[ this._operation.length -1 ] = value;
    }

    isOperator(value){
       
       return (['%', '/', '*', '-', '+'].indexOf(value) > -1);

    }


    setLastNumberToDisplay(){

    }

    addOperation(value){
        
	if(isNaN()){
		// true String
	}else{
		// false Number
	}

	this._operation.push(value);
	console.log(this._operation);

    }
    
    execBtn(value){ 

        switch (value){
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
                    //editar
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
            this.addEventListenerAll( btn, 'click', () => {
              
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
