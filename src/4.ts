class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  public getSignature(): number {
    return this.signature;
  }
}

const key = new Key();

class Person {
  constructor(private key: Key) {
    this.key = key;
  }
  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  private tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  public comeIn(tenant: Person) {
    if (this.door) {
      this.tenants.push(tenant);
      console.log("Come in, please");
    } else {
      console.log("Doors are closed. Your key doesn't fit.");
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("You open the door.");
    } else {
      this.door = false;
      console.log("Your key doesn't fit.");
    }
  }
}

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
