interface Animal {
  name: string;
  group: string;
  setGroup(group: string): void;
}

class Cat implements Animal {
  name: string;
  group: string = "";
  constructor(name: string) {
    this.name = name;
  }
  setGroup(group: string) {
    this.group = group;
  }
}

class Dog implements Animal {
  name: string;
  group: string = "";
  constructor(name: string) {
    this.name = name;
  }
  setGroup(group: string) {
    this.group = group;
  }
  bark() {}
}

interface AnimalConstructor<T> {
  new (name: string): T;
}

function initialAnimal<T extends Animal>(Animal: AnimalConstructor<T>, name: string) {
  const animal = new Animal(name);
  animal.setGroup("mammals");
  return animal;
}
