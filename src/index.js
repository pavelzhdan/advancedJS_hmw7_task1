/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
  }
}

class Bowman extends Character {
  constructor(name) {
    super(name);
    this.class = 'Bowman';
    this.attack = 25;
    this.defence = 25;
  }
}

class Swordsman extends Character {
  constructor(name) {
    super(name);
    this.class = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}

class Magician extends Character {
  constructor(name) {
    super(name);
    this.class = 'Swordsman';
    this.attack = 10;
    this.defence = 40;
  }
}

class Undead extends Character {
  constructor(name) {
    super(name);
    this.class = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}

class Zombie extends Character {
  constructor(name) {
    super(name);
    this.class = 'Undead';
    this.attack = 40;
    this.defence = 10;
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name);
    this.class = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}
