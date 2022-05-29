"use strict";

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
