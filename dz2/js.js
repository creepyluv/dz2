let name = prompt("какое ваше имя?")
let age = prompt("сколько вам лет?")

if(name.length % 2 === 0 && age >= 18 ){
    console.log("le go");
}else{
    console.log("not today");
}