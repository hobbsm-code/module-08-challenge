// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle {
  // Declare properties of the Motorbike class
  private vin: string;
  private color: string;
  private make: string;
  private model: string;
  private year: number;
  private weight: number;
  private topSpeed: number;
  private wheels: Wheel[];
  
  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[]) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
    if(this.wheels.length < 2){
      this.wheels.push(new Wheel());
      this.wheels.push(new Wheel());
    }
  }

  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  override getVin(): string {
    return this.vin;
  }

  override getMake(): string {
    return this.make;
  }

  override getModel(): string {
    return this.model;
  }

  override printDetails(): void {
    super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    console.log(`Wheels:`);
    for(let wheel of this.wheels){
      console.log(`Diameter: ${wheel.getDiameter} inches, Tire Brand: ${wheel.getTireBrand}`);
    }
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
