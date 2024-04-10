function  sum(a,b){
    console.log(a+b);
}
function mul(a,b){
    console.log(a*b);
}
const name = 'Ajay';

module.exports = {
    fn1 : sum,
    fn2 : mul,
    'name' : name
};
// module.exports = {
//     sum,
//     mul,
// };