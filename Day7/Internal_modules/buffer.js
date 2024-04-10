// it is global object available in node js 

const b = new Buffer.from('abcdefgh');

console.log(b.toString());
b.write('other');
console.log(b.toString());
