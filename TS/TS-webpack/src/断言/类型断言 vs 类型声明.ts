{
  (window as any)["cache"] = {
    tom: {
      name: "yes! I am  Tom!",
      run: () => {
        console.log("跑");
      },
    },
  };
  function getCacheData(key: string): any {
    return (window as any).cache[key];
  }
  interface Cat {
    name: string;
    run(): void;
  }
  //我们使用 as Cat 将 any 类型断言为了 Cat 类型。
//const tom = getCacheData("tom") as Cat;

// 我们通过类型声明的方式，将 tom 声明为 Cat，然后再将 any 类型的 getCacheData('tom') 赋值给 Cat 类型的 tom。
  const tom: Cat = getCacheData('tom');

  tom.run() //跑
  console.log(tom.name);  //yes! I am  Tom!
//类型声明是比类型断言更加严格的。
//所以为了增加代码的质量，我们最好优先使用类型声明，这也比类型断言的 as 语法更加优雅。
 }
