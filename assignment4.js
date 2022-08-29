////////////////////// Problem 1 

/*

function radianToDegree(radian) {
  const converter = radian * (180/3.1416);
  return converter;
}

const result = radianToDegree(10);
const result2 = radianToDegree(25);
const result3 = radianToDegree(199);
console.log(result.toFixed(2));
console.log(result2.toFixed(2));
console.log(result3.toFixed(2));

*/

////////////////////// Problem 2 

/*

const inputs = ['app.js', 'js.png', 'image.js.png', 'image.jpg.js']

function isJavaScriptFile(String) {
 for(const input of String) {

  if(input.endsWith('.js')) {
    console.log('true');
    // console.log(input);
  }
  else {
    console.log('false');
  }
 }
}

isJavaScriptFile(inputs);

*/

////////////////////// Problem 3 

/*

const dieselPricePerLiter = 114;
const petrolPricePerLiter = 130;
const octenPricePerLiter = 135;

function oilPrice(diesel, petrol, octen) {
  let dieselPrice = diesel * dieselPricePerLiter; 
  let petrolPrice = petrol * petrolPricePerLiter; 
  let octenPrice = octen * octenPricePerLiter; 

  let total = dieselPrice + petrolPrice + octenPrice;
  return total;
}

let result = oilPrice(1, 1, 1);
let result2 = oilPrice(30, 20, 10);
let result3 = oilPrice(1, 0, 2);
let result4 = oilPrice(0, 2, 3);
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);

*/

///////////////////////Problem 4 

/*

const busCapacity = 50;
const microCapacity = 11;
const publicBusTicketPrice = 250;

function publicBusFare(people) {
  if (people >= 0 && people <= 50) {
    return 0;
  }
  else if (people > 50 && people <= 100) {
    let restPeople = people - busCapacity;
    let totalTicketPrice = restPeople * publicBusTicketPrice;

    return totalTicketPrice;
  }
  else if (people > 100 && people <= 200) {
    let restPeople = people - ((busCapacity*2) + microCapacity);
    let totalTicketPrice = restPeople * publicBusTicketPrice;

    return totalTicketPrice;
  }
  else if (people > 200 && people <= 300) {
    let restPeople = people - ((busCapacity*4) + (microCapacity*3));
    let totalTicketPrice = restPeople * publicBusTicketPrice;

    return totalTicketPrice;
  }
  else if (people > 300 && people <= 400) {
    let restPeople = people - ((busCapacity*7) + (microCapacity*1));
    let totalTicketPrice = restPeople * publicBusTicketPrice;

    return totalTicketPrice;
  }
}

const Price = publicBusFare(365);
console.log(Price);

*/


////////////////////Problem 5 


const firstFriend = {
  name:"abul" , 
  friend:"babul"
}

const secondFriend = {
  name:"babul" ,
  friend:"abul"
}

const thirdFriend = {
  name:"abul",
  friend: "kabul"
}
const fourthFriend = {
  name:"kabul",
  friend: "sabul"
}
const fifthFriend = {
  name:"doe",
  friend: "alex"
}
const sixthFriend = {
  name:"john",
  friend: "doe"
}


function isBestFriend(first, second) {
  if(JSON.stringify(first.name) === JSON.stringify(second.friend) && JSON.stringify(second.name) === JSON.stringify(first.friend)) {
    return true;
  }
  else {
    return false;
  }
}

const result = isBestFriend(secondFriend, firstFriend);
console.log(result);