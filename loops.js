let number =0;
while(number<10){
          number++
          console.log(number);
}

let about ={
          name:'sajib',
          adderss:'kasba',
          age:23,
          id:5343,
          phone:4433,
}




let name =about.age;
console.log(about.age);

//  for in loops
for(const item in about){
 console.log(about);
}

// keys and values

let keys1 = Object.keys(about);
console.log(keys1);

let keys = Object.keys(about);
for(const key of keys){
 console.log(key);
}



let values1 =Object.values(about);
console.log(values1);


let values =Object.values(about);
for(const value of values){
console.log(value);
}

let keyValues =Object.entries(about)
console.log(keyValues);

          // seal

Object.seal(about);
about.newWork='leran';
about.age=34;
console.log(about);

          // freeze

Object.freeze(about);
about.newWork='leran';
about.age=37;
console.log(about);

delete about.id;
console.log(about);

          // Create a Set

const letters1 = new Set (["a","b","c",87]);
console.log(letters);

const letters = new Set (["a","b","c",87]);
console.log(letters.size);

          // Object map
          
let food = new Map([
        ['barger',432],
        ['pigja',532],
        ['kachi',765],
        ['birani',321],
])
console.log(food.size);

let food1 = new Map([
        ['barger',432],
        ['pigja',532],
        ['kachi',765],
        ['birani',321],
])
console.log(food1.size);

