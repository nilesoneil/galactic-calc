export class PersonAge {
  constructor (yourAge) {
    this.age = yourAge;
    this.planet = {
      mercury: 0.24,
      venus: .62,
      mars: 1.88,
      jupiter: 11.86
    };
  }

convertToMercury() {
  return this.age * this.planet["mercury"];
}
convertToVenus() {
  return this.age * this.planet["venus"];
}
convertToMars() {
  return this.age * this.planet["mars"];
}
convertToJupiter() {
  return this.age * this.planet["jupiter"];
}
}

