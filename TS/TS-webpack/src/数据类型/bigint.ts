/*
 * @Author: HoJack 965389230@qq.com
 * @Date: 2025-02-14 10:59:05
 * @LastEditors: HoJack 965389230@qq.com
 * @LastEditTime: 2025-02-14 11:41:34
 * @Description: 
 */
// const max = Number.MAX_SAFE_INTEGER;
// const max1 = max + 1
// const max2 = max + 2
// max1 === max2     // true


const max = BigInt(Number.MAX_SAFE_INTEGER);
const max1 = max + 1n
const max2 = max + 2n
max1 === max2    // false
console.log(max1 === max2) // false