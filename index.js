/*
 * @Author: Dylight CHen
 * @Date: 2021-06-04 18:31:16
 * @LastEditTime: 2021-06-24 17:55:30
 * @LastEditors: Dylight
 * @Description:
 */
// [1, 2, 3, 4].reduce((x, y) => {
//     console.log(x, y);
// });
// var b = 10;
// (function () {
//     b = 20;
//     console.log(b);
// })();

let nums = [11316229, 11326229, 1133629, 11346229, 11229];
// let nums = ['flower', 'flow', 'flight'];
function commonNmbStr(nums) {
    if (!nums) return '';
    nums = nums.map((item) => {
        item = item.toString().split('').reverse().join('');
        return item;
    });
    let lens = nums.map((item) => {
        return item.length;
    });
    console.log(lens);
    let minLen = Math.min.apply(null, lens);
    let firstStr = nums[lens.indexOf(minLen)];
    const loop = (start, end, str) => {
        if (start > end) return '';
        const middle = start + ((end - start) >> 1);
        console.log(`middle${middle}`);
        let s = str.slice(0, middle);
        for (let item of nums) {
            if (item.slice(0, middle) !== s) return loop(start, middle - 1, s) || '';
        }
        return loop(middle + 1, end, str) || s.split('').reverse().join('');
    };
    return loop(1, firstStr.length, firstStr);
}
let a = commonNmbStr(nums);
console.log(a);
// console.log(8.88 >> 1); // 8
// console.log(0+((7-0)) >> 1); // 8

function common(arr1,arr2){
    let arr =[]
    arr = arr1.concat(arr2)

    arr=  new Set(arr)
    return Array.from(arr) 
}
let arr1= [1,2,3,4]
let arr2= [2,3,5,6]
let arr =[]
function commonItem(){
    let arr =[]
    arr1.filter(item=>{
        for(let item1 of arr2){
            if(item1===item){
                arr.push(item1)
            }
        }
   })
   let arr4 = arr1.concat(arr2)
   arr4 =Array.from( new Set(arr4))
   let arr6 =[]
   arr4=arr4.map(item1=>{
       
        for(let item of arr){
            if (item1===item){
               arr6= arr4.filter(item3=>{
                    return item3!== item1
                })
            }
        }
   })
//    arr =Array.from( new Set(arr))
return arr6
//    return arr
}

 console.log(commonItem(arr1,arr2));
let b = common(arr1,arr2)
console.log(b);
let sameArr = { '0': 10, '1': 15, length: 2 };
console.log(Array.from(sameArr));
