import Bowman from '../src/js/Bowman';
import Team from '../src/js/Team';

test('add first Character in Team', () => {
  const team = new Team();
  const character = new Bowman('Лучник');
  team.add(character);
  const received = team.toArray();
  const expected = [{
    name: 'Лучник',
    level: 1,
    health: 50,
    type: 'Bowman',
    attack: 40,
    defence: 10,
  }];
  expect(received).toEqual(expected);
});

test('add two Characters in Team', () => {
  const team = new Team();

  const character1 = new Bowman('Лучник1');
  const character2 = new Bowman('Лучник2');
  team.add(character1);
  team.add(character2);

  const received = team.toArray();
  const expected = [
    {
      name: 'Лучник1', level: 1, health: 50, type: 'Bowman', attack: 40, defence: 10,
    },
    {
      name: 'Лучник2', level: 1, health: 50, type: 'Bowman', attack: 40, defence: 10,
    },
  ];
  expect(received).toEqual(expected);
});

test('add two equal Characters in Team', () => {
  const team = new Team();

  const character1 = new Bowman('Лучник1');
  team.add(character1);

  function repeatAdd() {
    team.add(character1);
  }
  expect(repeatAdd).toThrowError(new Error('Этот персонаж уже в команде!'));
});

test('add many Characters in Team', () => {
  const team = new Team();

  const character1 = new Bowman('Лучник1');
  const character2 = new Bowman('Лучник2');
  const character3 = new Bowman('Лучник3');
  const character4 = new Bowman('Лучник4');
  const character5 = new Bowman('Лучник5');
  const character6 = new Bowman('Лучник6');
  const character7 = new Bowman('Лучник7');
  team.addAll(character1, character2, character3, character4, character5, character6);
  team.add(character7);

  const received = team.toArray();
  const expected = [
    {
      name: 'Лучник1', level: 1, health: 50, type: 'Bowman', attack: 40, defence: 10,
    },
    {
      name: 'Лучник2', level: 1, health: 50, type: 'Bowman', attack: 40, defence: 10,
    },
    {
      name: 'Лучник3', level: 1, health: 50, type: 'Bowman', attack: 40, defence: 10,
    },
    {
      name: 'Лучник4', level: 1, health: 50, type: 'Bowman', attack: 40, defence: 10,
    },
    {
      name: 'Лучник5', level: 1, health: 50, type: 'Bowman', attack: 40, defence: 10,
    },
  ];
  expect(received).toEqual(expected);
});

test('iterate of Team', () => {
  const team = new Team();

  const character1 = new Bowman('Лучник1');
  const character2 = new Bowman('Лучник2');
  const character3 = new Bowman('Лучник3');
  const character4 = new Bowman('Лучник4');
  const character5 = new Bowman('Лучник5');
  team.addAll(character1, character2, character3, character4, character5);

  const received = [...team];
  const expected = [
    {
      name: 'Лучник1', level: 1, health: 50, type: 'Bowman', attack: 40, defence: 10,
    },
    {
      name: 'Лучник2', level: 1, health: 50, type: 'Bowman', attack: 40, defence: 10,
    },
    {
      name: 'Лучник3', level: 1, health: 50, type: 'Bowman', attack: 40, defence: 10,
    },
    {
      name: 'Лучник4', level: 1, health: 50, type: 'Bowman', attack: 40, defence: 10,
    },
    {
      name: 'Лучник5', level: 1, health: 50, type: 'Bowman', attack: 40, defence: 10,
    },
  ];
  expect(received).toEqual(expected);
});
