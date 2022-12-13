let list = ["putin", "biden", "obama", "zelenskiy"]

let checklist = prompt("Whats your name?").toLowerCase().trim()


if(list.includes(checklist)){
    console.log('welcome');
}else{
    console.log('sorry, but you havent in list');
}