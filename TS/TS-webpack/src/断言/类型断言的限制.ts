interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}
// ​TS2451: Cannot redeclare block-scoped variable 'tom'.
const  tomm :Cat = {
    name: 'Tom',
    run: () => { console.log('run') }
};
let animal1: Animal = tomm;
