export class PersonAge {
  constructor (age) {
    this.age = age;
  }
convertToMercury() {
  return this.age * .24;
}
convertToVenus() {
  return this.age * .62;
}
convertToMars() {
  return this.age * 1.88;
}
convertToJupiter() {
  return this.age * 11.86;
}
}

