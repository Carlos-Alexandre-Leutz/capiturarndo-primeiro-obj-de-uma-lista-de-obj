var obj = { first: 'someVal' };
obj[Object.keys(obj)[0]]; //returns 'someVal'

//Object.entries separa os atibutos do array em um arra

let ObjDaTraducao = {
    teste: "qwe",
    coiso: "coiso",
    asd:"Asd",
    index:""
}
let array = Object.entries(ObjDaTraducao);
array.forEach(index =>{
    console.log("a", index)

})
