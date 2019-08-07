const sum = (...arg)=>{
    return arg.reduce((prev,cur)=> prev+cur);
}
const a = ()=>{
    return 666;
}


// sum(1,2,3,4,5);
// export const str ='1701B';

export {sum,a};

//抛出
export default (n,str)=>{ //repeat (3,*)
    return str.repeat(n);
}

//默认抛出一个js文件只能有一个默认抛出