// Parent
class Robot {
  //   name: string;
  // or
  //   protected name: string;

  //   constructor(name: string) {
  //     this.name = name;
  //   }
  _color: string;

  private static availableColors = ["green", "yellow"];
  static isColorAvailable(color: string) {
    return Robot.availableColors.includes(color);
  }

  constructor(protected _name: string, color: string) {
    this._color = color;
  }

  set name(value: string) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set color(color: string) {
    if (!Robot.isColorAvailable(color)) {
      throw new Error(`Color ${color} is not available`);
    }
    this._color = color;
  }

  askName() {
    console.log(`My name is ${this.name}`);
  }

  move(distance: number) {
    console.log(`${this.name} moved ${distance} meters`);
  }
}

// Child
class FlyingRobot extends Robot {
  //   private jetPackSize: number;
  private readonly jetPackSize: number;

  constructor(name: string, jetPackSize: number) {
    super(name);
    this.jetPackSize = jetPackSize;
  }

  move(distance: number) {
    console.log(`${this._name} is flying`);
    super.move(distance);
  }
}

const robot = new Robot("Ticky");
