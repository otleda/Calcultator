class CalcController {
    //ATRIBUTOS
    constructor(){
        this._locale = 'pt-BR';
        this._$display = document.querySelector('#display');
        this._$date =  document.querySelector('#data');
        this._$time = document.querySelector('#time');
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }
    
    //METODOS
    initialize(){

        this.setDisplayDateTime();
        
        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);
    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }
    
    addEventListenerAll(element, events, fn){

        events.split(' ').forEach( event => {
            element.addEventListener(event, fn, false);
        });

    }

    initButtonsEvents(){
        let buttons = document.querySelectorAll('.col');
        buttons.forEach( btn => {
            this.addEventListenerAll(btn, 'click drag', () => {
                this.displayCalc = btn.className.replace("col","").replace("btn-","");
                console.log(this.displayCalc)
            });
        });
    }

    //GETTERS E SETTERS
   
    //Display
    get displayCalc(){
        return this._$display.innerHTML;
    }
    set displayCalc(value){
        this._$display.innerHTML = value;
    }

    //Data
    get displayDate(){
        return this._$date.innerHTML;
    }
    set displayDate(value){
        this._$date.innerHTML = value;
    }

    //Hora
    get displayTime(){  
       return this._$time.innerHTML;
    }
    set displayTime(value){
        this._$time.innerHTML = value;
    }
    
    //Date classe nativa do javaScript
    get currentDate(){
        return new Date();
    }
    set currentDate(value){
        this._currentDate = value;
    }
}
