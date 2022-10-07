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
}

