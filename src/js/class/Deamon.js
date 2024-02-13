import Character from './character'

export class Deamon extends Character {
  constructor(name, type = 'Deamon') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
