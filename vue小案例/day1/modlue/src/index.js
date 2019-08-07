//引入
import repeat,{sum,a} from './js/a';
// import repeat,* as info from './js/a';
import {reverse} from './js/b';

//默认抛出的，在接受的时候，放在第一个接受
//as 重命名   *接受的是所有
console.log(info);
console.log(info.sum(1,2,3,4,5));

console.log(repeat(5,"*"));