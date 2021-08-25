/*
 * @Author: Dylight CHen
 * @Date: 2021-06-04 18:31:16
 * @LastEditTime: 2021-08-04 18:36:13
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
    console.log(firstStr);
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


var url = "http:www.xxx.net/x/x.html?id=898602B8261890349226&aa=123&bb=456"
var params = url.split("?")[1].split("&")
var obj = {}
// for (i = 0; i < params.length; i++) {
// var param = params[i].split("=");
// obj[param[0]] = param[1]
// }
params.map(v => obj[v.split("=")[0]] = v.split("=")[1])
console.log(obj)

let map = new Map()
map.set('1', 'str1');   // 字符串键
map.set(1, 'num1');     // 数字键
map.set(true, 'bool1');
console.log(map);
console.log(Object.fromEntries(map));

// let api = {
//     getdate:$post('api/geturl')
// }
// $post = url => (params, config) => {
//     return axios.$post(url, params, config).then((res) => {
//         return Promise.resolve(res)
//     })
// }
// console.log(api);

function Find(target, array){
    // write code here
    let map =new Map(array)
    array.map((v, index) => {
        console.log(v,index);
        map.set(index,v)
    })
        console.log(map);

    for (let item of map.values()) {
        console.log(item);
        if (item.includes(target)) {
            return true
            // break
        }
        // return true
    }
    return false
}
console.log(Find(7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]));


// function bibao() {
//     for (var i = 0; i < 10; i++){
//         (function () {
//             setTimeout((i) => {
//                 console.log(i);
//             },100)
//          })(i)

//     }
// }
// console.log(bibao());
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(0, 0, 'Feb');
// console.log(months.toString());
// // months.toString()