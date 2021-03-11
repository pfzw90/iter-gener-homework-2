import Person from '../person';
import Team from '../team';


test('should be iterable and return Persons', () => {
  const characters = [new Person('Лучник', 'Bowman', 50, 1, 40, 10), new Person('Рыцарь', 'Paladin', 50, 1, 40, 10)];

  const result = [...new Team(characters)];
  expect(result[0]).toBe(characters[0]);
  expect(result[1]).toBe(characters[1]);
});
