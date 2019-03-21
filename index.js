const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(name){
drivers.push(name)
console.log(drivers)  
}
function destructivelyPrependDriver(name){
  drivers.unshift(name)
  console.log(drivers)
}
function destructivelyRemoveLastDriver(){
  drivers.pop(2)
  console.log(drivers)
}
function destructivelyRemoveFirstDriver(){
  drivers.shift(0)
  console.log(drivers)
}
function appendDriver(name){
  drivers.push(name)
  console.log(drivers)
}