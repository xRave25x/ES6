'use strict'

class First {
    constructor(){
    }
    hello () {
        console.log('Привет я метод родителя!');
    }
}

class Second extends First {
    constructor() {
        super();
    }
    
    sayHello () {
        super.hello()
        this.hello2()
    }

    hello2 () {
        console.log('А я наследуемый метод!');
    }
}

const helloOutput = new Second();

helloOutput.sayHello();



console.log(helloOutput);
