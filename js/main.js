"use strict";
//  Export, Import
import _ from 'lodash';
import getRandom from './getRandom'
//import {getType, user as chan} from './getType'
import * as C from './getType'
import * as User from './constructorFunction'
import myData from '../myData.json'

console.log(_.camelCase('the hellow World'));
console.log(getRandom(), getRandom());
//console.log(getType([1, 2, 3]));
console.log(C);
console.log(C.getType(123));
console.log(C.user);
console.log(C.default);

console.log(User);
const chan = new User.User('changeon', 'Park');
console.log(chan.getFullName());
console.log('------export / import end------')
//  Export, Import END

// JSON Start

console.log(myData);
console.log(typeof(myData));