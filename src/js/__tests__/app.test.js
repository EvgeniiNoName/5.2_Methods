import Character from '../app';

// Создание персонажа с корректными данными
test.each([
  [1, "Bowman", 25, 25],
  [2, "Swordsman", 40, 10],
  [3, "Magician", 10, 40],
  [4,"Undead", 25, 25],
  [5, "Zombie", 40, 10],
  [6, "Daemon", 10, 40],
])("Тест№%i: Тип %s attack: %i, defence: %i",
(numver, type, attack, defence) => {
  let input = ["ivan", type];
  let pers = new Character(...input);
  expect(pers.name).toBe("ivan");
  expect(pers.type).toBe(type);
  expect(pers.attack).toBe(attack);
  expect(pers.defence).toBe(defence);
})

test("Тест№7: Некорректное имя персонажа (менее 2 символов)", () =>{
  expect(() => new Character("A", "Bowman")).toThrow()
})

test("Тест№8: Некорректное имя персонажа (более 10 символов)", () =>{
  expect(() => new Character("Асклипиодот", "Bowman")).toThrow()
})

test("Тест№9: Некорректный тир персонажа", () =>{
  expect(() => new Character("Bro", "Child")).toThrow()
})

test('Тест№10: levelUp увеличивает уровень и изменяет характеристики', () => {
  let character = new Character('Ivan', 'Bowman');
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.attack).toBe(30);
  expect(character.defence).toBe(30);
  expect(character.health).toBe(100);
});

test('Тест№11: Нельзя повысить уровень при здоровье = 0', () => {
  let character = new Character('Ivan', 'Bowman');
  character.health = 0;
  expect(() => character.levelUp()).toThrow('Нельзя повысить уровень при здоровье = 0');
});

test('Тест№12: Нельзя повысить уровень при здоровье = 0', () => {
  let character = new Character('Ivan', 'Bowman');
  character.health = 0;
  expect(() => character.levelUp()).toThrow('Нельзя повысить уровень при здоровье = 0');
});

test('Тест№12: Урон уменьшает здоровье в зависимости от защиты', () => {
  let character = new Character('Ivan', 'Bowman');
  character.damage(10);
  expect(character.health).toBeCloseTo(92.5);
});

test('Тест№13: Урон не уменьшает здоровье ниже нуля', () => {
  let character = new Character('Ivan', 'Bowman');
  character.health = 5;
  character.damage(10);
  expect(character.health).toBe(0);
});


test('Тест№14: Урон не влияет на здоровье, при здоровье < 0', () => {
  let character = new Character('Ivan', 'Bowman');
  character.health = 0;
  character.damage(10);
  expect(character.health).toBe(0);
});

test('Тест№15: Урон больше текущего здоровья устанавливает здоровье в ноль', () => {
  let character = new Character('Ivan', 'Bowman');
  character.damage(200);
  expect(character.health).toBe(0);
});


