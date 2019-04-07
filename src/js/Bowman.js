import Character from './Character';

export default class Bowman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Bowman';
    this.attack = 40;
    this.defence = 10;
  }
}
