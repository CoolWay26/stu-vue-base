let name = 'zhangsan';
let age = 20;

function sout() {
    console.log(name + ':' + age);
}

// 导出方式1
export {
    name, age, sout
}

// 导出方式2
export let name2 = 'lisi';
export function print() {
    console.log(name2);
}
export class Person {
    run() {
        console.log('我在跑步');
    }
}

// 导出方式3
export default name;
