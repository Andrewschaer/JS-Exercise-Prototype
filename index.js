/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
 function Person(name, age) {
   this.name = name;
   this.age = age;
   this.stomach = [];
  }  

  Person.prototype.eat = function(edible){
    if(this.stomach.length < 10){
      this.stomach.push(edible);
    }
  }

  Person.prototype.poop = function(){
    this.stomach = [];
  }

  Person.prototype.toString = function(){
    return `${this.name}, ${this.age}`;
  }

  const andrew = new Person('Andrew', 31);
  const amanda = new Person('Amanda', 30);
  const matthew = new Person('Matthew', 13);

  console.log(andrew);
  console.log(amanda);
  console.log(matthew);

  andrew.eat('pizza');
  andrew.eat('bagels');
  andrew.eat('hashbrowns');
  andrew.eat('egg sandwich');
  andrew.eat('tuna avocado rolls');

  console.log(andrew.stomach);
  andrew.poop();
  console.log(andrew.stomach);
  console.log(andrew.toString());
  
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
 function Car(model, milesPerGallon){
   this.model = model;
   this.milesPerGallon = milesPerGallon;
   this.tank = 0;
   this.odometer = 0;
  }
  
  Car.prototype.fill = function(gallons){
    this.tank = this.tank + gallons;
  }
  
  const santaFe = new Car ('Santa Fe', 28);
  santaFe.fill(15);
  santaFe.fill(4);
  console.log('task 2', santaFe.tank);


  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
 function Baby(name, age, favoriteToy) {
   Person.call(this, name, age);
   this.favoriteToy = favoriteToy;
  };
 
  Baby.prototype = Object.create(Person.prototype);

  Baby.prototype.play = function(){
    return `Playing with ${this.favoriteToy}`;
  }

  const ellie = new Baby ('Ellie', -4, 'Egg');
  console.log('Task 3a', ellie);
  console.log('Task3b', ellie.play());

  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. Window Binding:

      #Window binding occurs when using the "this" keyword when there is no additionally given context for what the "this" is referring to, therefore binding "this" at the highest scope level (global scope) to the window, which is an object containing all JS built-in functions, arrays and variable key-value pairs)
    
    2. Implicit Binding:

      #Implicit binding occurs when using the "this" keyword in a function that is within an object.  Here we are implying that the "this" is referring to the object and we can therefore use object methods using the "dot" notation. The "this" must be used after the object being referred to is already referenced.

    3. Explicit Binding

      #Explicit binding occurs when using the ".call", ".apply" or ".bind" methods on existing functions that contain "this", in order to override what the "this" keyword points to.

    4. New Binding

      #New binding occurs when using constructor functions, where the "this" keyword is referencing the new object that is created by the constructor function.
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}