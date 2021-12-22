// belajar tipe data
// 1. Number(float, int)
const dinoAge = 200.5;
console.log(typeof(dinoAge));

// 2. BigInt
const dinoEra = 123456789n;
console.log(typeof(dinoEra));

// 3. String (menampung beberapa karakter)
const dinoName = 'brachio';
console.log(`nama dino saya ${dinoName}`);
console.log(typeof(dinoName));


// 4. Boolean (true, false)
const isDinoHungry = false;

if(isDinoHungry == false){
    console.log('Makan dong...');
} else {
    console.log('tidur aja...');
}

// 5.undefined
let dinoChild;
console.log(dinoChild);

// 6. object
const dinoProfile ={
    // key, value
    age: 200,
    name:'brachio',
    isDinoHungry: false
};
console.log(dinoProfile.age);
console.log(dinoProfile.name);
console.log(dinoProfile.isDinoHungry);


