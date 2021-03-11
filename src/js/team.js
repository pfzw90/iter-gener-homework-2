export default class Team {
  constructor(characters) {
    this.characters = characters;
  }

  * [Symbol.iterator]() {
    let current = 0;
    const { length } = this.characters;
    while (current < length) {
      yield this.characters[current];
      current += 1;
    }
  }
}
