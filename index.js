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
    if (a.index <= b.index) {
        return 1
    } else {
        return -1;
    }
});
// Node.js@10: [ 'd', 'e', 'c', 'b', 'a' ]
// Node.js@11: [ 'd', 'e', 'b', 'c', 'a' ]
console.log(sortedArray.map(item => item.id));
