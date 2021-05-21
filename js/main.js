"use strict";
//  Export, Import
import _ from 'lodash';
import getRandom from './getRandom'
//import {getType, user as chan} from './getType'
import * as C from './getType'
import * as User from './constructorFunction'
import myData from '../myData.json'
import axios from 'axios'

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

const setData = { 
  name: 'changeon',
  age: 25,
  emails: [
    'qkrcksrjs@gmail.com',
    'qkrcksrjs@naver.com'
  ]
}
//Vanilla JS
localStorage.setItem('locData', JSON.stringify(setData));
sessionStorage.setItem('sessionData', JSON.stringify(setData));

console.log(JSON.parse(localStorage.getItem('locData')));
// localStorage.removeItem('locData');
//덮어쓰기
const str = JSON.parse(localStorage.getItem('locData'));
str.age = 27;
console.log(str);
localStorage.setItem('locData', JSON.stringify(str));

// axios
function fetchMovies() {
  axios
  .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
  .then(res => {
    console.log(res);
    const h1El = document.querySelector(`h1`);
    const imgEl = document.querySelector(`img`);
    h1El.textContent = res.data.Search[0].Title;
    imgEl.src = res.data.Search[0].Poster;
  });
}
fetchMovies();




