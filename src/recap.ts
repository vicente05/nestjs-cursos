const myName = 'Nicolas';
const myAge = 12;
const suma = (a: number, b: number) => {
    return a + b;
};
suma(12, 12);

class Persona {
    constructor(private age: number, private name: string) {}

    getSummary() {
        return `$my name is ${this.name}, ${this.age}`;
    }
}

const vicente = new Persona(28, 'vicente marti');
vicente.getSummary();
