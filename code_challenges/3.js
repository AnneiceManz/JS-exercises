

// 1. Create an array of numbers, (ex: [1, 2, 3])
let arr1= [1,2,3]

// 2. Without using any math operators, write 5 statements:
//   - Return the first item in the array (ex: 1)
console.log(arr1[0])

//   - Return the last item in the array (ex: 3)
console.log(arr1[arr1.length-1])

//   - Add a new item to the end of the array (ex: [1,2,3,4])
arr1.push(4);
console.log(arr1)

//   - Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
arr1.unshift(['a','b','c'])
console.log(arr1)

//   - Return the first item from the first item in the array. (ex: "a")
console.log(arr1[0][0])



