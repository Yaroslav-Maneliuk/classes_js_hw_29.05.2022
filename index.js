"use strict";

// Создать класс RangeValidator, со следующими свойствами:
// ■ from (number);
// ■ to (number);
// Реализовать getter'ы и setter'ы для обоих свойств
// Реализовать getter range, который будет возвращать массив с двумя числами диапазона
// Реализовать метод validate, который будет принимать число и проверять входит ли число в указанный диапазон. Метод возвращает значение, если значение валидно. И кинет ошибку, если нет.

class RangeValidator {
  constructor(from, to) {
    this._from = from;
    rhis._to = to;
  }
  get from() {
    return this._from;
  }
  set from(from) {
    this._from = from;
  }
  get to() {
    return this._to;
  }
  set to(to) {
    this._to = to;
  }
  get range(){
    return [this._from, this._to]
  }
  validate(number) {
    if (this._from < this._to && number < this._to && number > this._from) {
      return number;
    } else {
      throw RangeError("Number is out of range");
    }
  }
}

// Создать класс Figure3D
// Создать классы-потомки для Шара, Цилиндра и Куба.
// У всех классов должен быть метод для рассчета объема.

class Figure3D {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  calcVolume() {
    throw Error("It is not possible to use this method");
  }
}

class Sphere extends Figure3D() {
  constructor(name, radius, height) {
    super(name);
    this._radius = radius;
    this._height = height;
  }
  get radius() {
    return this._radius;
  }
  get height() {
    return this._height;
  }
  set radius(radius) {
    this._radius = radius;
  }
  set height(height) {
    this._height = height;
  }
  calcVolume() {
    return Math.PI * this._radius ** 2 * this._height;
  }
}

class Cylinder extends Figure3D() {
  constructor(name, radius) {
    super(name);
    this._radius = radius;
  }
  get radius() {
    return this._radius;
  }
  set radius(radius) {
    this._radius = radius;
  }
  calcVolume() {
    return (4 / 3) * Math.PI * this._radius ** 3;
  }
}

class Cube extends Figure3D() {
  constructor(name, height) {
    super(name);
    this._height = height;
  }
  get height() {
    return this._height;
  }
  set height(height) {
    this._height = height;
  }
  calcVolume() {
    return this._height ** 3;
  }
}
