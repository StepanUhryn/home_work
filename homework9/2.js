class Vehigle {
    constructor(name, condition, speed) {
        this.name = name;
        this.condition = condition;
        this.speed = speed;
    }
}
// створюю підклас Car

    class Car extends Vehigle {
        constructor(name, condition, speed, numOfWheels) {
            super(name, condition, speed);
            this.numOfWheels = numOfWheels;
        }
        printInfo() {
            return `Назва: ${this.name}, Стан: ${this.condition}, Макс.швидкість ${this.speed}, Кількість коліс ${this.numOfWheels}`;
         }
     }
// створюю новий екземпляр класу Car

    let tesla = new Car('Tesla', 'новий', 280, 4);
console.log(tesla.printInfo());
VM7052:22 Назва: Tesla, Стан: новий, Макс.швидкість 280, Кількість коліс 4
undefined