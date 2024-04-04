class Key {
 private signature: number;

 constructor() {
	this.signature = Math.random();
 }

 getSignature(): number {
	return this.signature;
 }
}

class Person {
	private key: Key;

	constructor( key: Key) {
		this.key = key;
	}

	getKey(): Key {
		return this.key;
	}
}

abstract class House  {
	public door: boolean = false;
	public key: Key;
	public tenants: Person[] = [];

	constructor(key: Key) {
		this.key = key;
	}

	public comeIn(person: Person): void {
		if(this.door) {
			this.tenants.push(person)
			console.log('Added resident to house.');
		} else {
			console.log('The door is closed. Unable to log in.');
		}
	}

	public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
	constructor(key: Key){
		super(key)
	}

	public openDoor(key: Key): void {
		if(this.key.getSignature() === key.getSignature()) {
			this.door = true;
			console.log('Door opened successfully.')
		} else {
      console.log("Cannot open the door. Invalid key.");
    }
	}
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export { };
