import { compose, pipe } from "lodash/fp"

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