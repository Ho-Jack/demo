//泛型（广泛的类型）
// 泛型就是解决  类、 接口 、方法的复用性、以及对不特定数据类型的支持
{
  //只能返回string类型的数据
//   function getData(value: string): string {
//     return value;
//   }

  //同时返回 string类型 和number类型  （代码冗余）
//   function getData1(value: string): string {
//     return value;
//   }
//   function getData2(value: number): number {
//     return value;
//   }

  // T表示泛型，具体什么类型是调用这个方法的时候决定的
  // 表示参数是什么类型就返回什么类型~~~
  function getData<T>(value: T): T {
    return value;
  }
  getData<number>(123);
  getData<string>("1214231");


  // 定义接口
interface ConfigFn{
    <T>(value:T):T;
}
var getData2:ConfigFn=function<T>(value:T):T{
  return value;
}
getData2<string>('张三');
// getData2<string>(1243);  //错误
getData2<number>(1243);  //正确

}
