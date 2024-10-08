// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

class Truck extends Vehicle implements AbleToTow {
  
  private vin: string;
  private color: string;
  private make: string;
  private model: string;
  private year: number;
  private weight: number;
  private topSpeed: number;
  private wheels: Wheel[];
  towingCapacity: number;

  constructor(vin: string, color: string, make: string, model: string, year: number, 
    weight: number, topSpeed: number, wheels: Wheel[], towingCapacity: number) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
    this.towingCapacity = towingCapacity;
    if(this.wheels.length < 4){
      this.wheels.push(new Wheel());
      this.wheels.push(new Wheel());
      this.wheels.push(new Wheel());
      this.wheels.push(new Wheel());
    }
  }

  // Method to tow a vehicle
  tow(vehicle: Truck | Motorbike | Car): void {
    // Get the make and model of the vehicle
    const vehicleMake: string = vehicle.getMake() ? vehicle.getMake() : 'Unknown';
    const vehicleModel: string = vehicle.getModel() ? vehicle.getModel() : 'Unknown';

    if(this.weight <= this.towingCapacity){
      console.log(`Vehicle ${vehicleMake} ${vehicleModel} is being towed`);
    } else {
      console.log(`Vehicle ${vehicleMake} ${vehicleModel} is too heavy to be towed`);
    }

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
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    console.log(`Wheels:`);
    this.wheels.forEach((wheel, index) => {
      console.log(`Wheel ${index + 1}: Diameter: ${wheel.getDiameter}, Tire Brand: ${wheel.getTireBrand}`);
    });
  }
}

// Export the Truck class as the default export
export default Truck;
