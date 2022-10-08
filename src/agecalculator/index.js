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

convertAgeTopPlanet(age, planet) {
  return age * this.planet[planet];
}


}


