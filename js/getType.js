"use strict";

export function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

export const user = {
  name: 'changeon',
  age: 24 
}

export default 123;