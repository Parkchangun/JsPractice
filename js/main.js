"use strict";

import _ from 'lodash';
import getRandom from './getRandom'
//import {getType, user as chan} from './getType'
import * as C from './getType'
import * as User from './constructorFunction'

console.log(_.camelCase('the hellow World'));
console.log(getRandom(), getRandom());
//console.log(getType([1, 2, 3]));
console.log(C);
console.log(C.getType(123));
console.log(C.user);
console.log(C.default);

// const chan = new User('changeon', 'Park');
// console.log(chan.getFullName());

console.log(User);
const chan = new User.User('changeon', 'Park');
console.log(chan.getFullName());

