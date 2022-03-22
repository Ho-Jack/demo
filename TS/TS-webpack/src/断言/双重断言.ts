// 双重断言   as any as  xx
// 既然：
// 任何类型都可以被断言为 any
// any 可以被断言为任何类型
{
    interface Cat {
        run(): void;
    }
    interface Fish {
        swim(): void;
    }
    ​
    function testCat2(cat: Cat) {
        return (cat as any as Fish);
    }
    let tom ={
        run:()=>{
            console.log('跑');   
        }
    }
    // TS2339: Property 'run' does not exist on type 'Fish'
    // testCat2(tom).run()
    testCat2(tom).swim()
}