# Stable sort case study

Node.js 11(V8 7.0) use stable sort.

- [Node v11.0.0 (Current) | Node.js](https://nodejs.org/en/blog/release/v11.0.0/)
- [Getting things sorted in V8 · V8](https://v8.dev/blog/array-sort)

It means that `Array#sort` cause different result in some cause.

## Example

If you want to tests, do following commands. 

- Get Node.js 10 result: `npm run node10`
- Get Node.js 11 result: `npm run node11`

```js
const array = [
    {
        id: "a",
        index: 0
    },
    {
        id: "b",
        index: 1
    },
    {
        id: "c",
        index: 1
    },
    {
        id: "d",
        index: 3
    },
    {
        id: "e",
        index: 2
    }
];

const sortedArray = array.sort((a, b) => {
    if (a.index <= b.index) {
        return 1
    } else {
        return -1;
    }
});
// Node.js@10: [ 'd', 'e', 'c', 'b', 'a' ]
// Node.js@11: [ 'd', 'e', 'b', 'c', 'a' ]
console.log(sortedArray.map(item => item.id));
```
