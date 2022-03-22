{
    function toBoolean(something: any): boolean {
        return something as boolean;
    }
    ​//类型断言只会影响 TypeScript 编译时的类型，类型断言语句在编译结果中会被删除：
    //类型断言不是类型转，它不会真的影响到变量的类型
    console.log(toBoolean(1))//1
    console.log(typeof toBoolean(1)) //number


  //  若要进行类型转换，需要直接调用类型转换的方法：
function toBoolean2(something: any): boolean {
    return Boolean(something);
}
console.log(toBoolean2(1))//true
console.log(typeof toBoolean2(1)) //boolean
}