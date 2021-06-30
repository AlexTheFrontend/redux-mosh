import { compose, pipe } from "lodash/fp"
import {produce} from 'immer'

//compose is a HOC, to combine all the simple functions

let input = '     Java Script     '

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
// the below code is almost the same as above
// const wrapInSpan = str => `<span>${str}</span>`;
const wrap = type => str => `<${type}>${str}</${type}`
const toLowerCase = str => str.toLowerCase();

//this is too messy, use compose
// const result = wrapInDiv(toLowerCase(trim(input)))

const transform = pipe(trim, toLowerCase, wrap('span'));
// pipe is executing from left to right
console.log(transform(input));

// -----------------------------------------------------------------------------

const numbers = [1,2,3]

//Adding
const index = numbers.indexOf(2);
// Adding 7 to position on 2 (index of 1)
const added = [...numbers.slice(0, index), 7, ...numbers.slice(index)]

//Removing
const remove = numbers.filter(n => n !== 2)
// console.log(remove)

//Updating
//For an Array of Objects, we fist have to copy them, then do an update
const updated = numbers.map(n => n === 2 ? 20 : n);
console.log(updated)

// -----------------------------------------------------------------------------

let book = { title: "Captain Blood" };

function publish(book) {
  return produce(book, draftBook => {
    draftBook.isPublished = true;
  })
}
//Produce will take a copy of book and update whatever needed

let updatedBook = publish(book);

console.log(book)
console.log(updatedBook)

// -----------------------------------------------------------------------------

