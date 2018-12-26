// MIT © 2018 azu
"use strict";
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
    return b.index - a.index
});
// Node.js@10: [ 'd', 'e', 'b', 'c', 'a' ]
// Node.js@11: [ 'd', 'e', 'b', 'c', 'a' ]
console.log(sortedArray.map(item => item.id));
