const characters = [
  {
      name: 'Luke Skywalker',
      height: 172,
      mass: 77,
      eye_color: 'blue',
      gender: 'male',
  },
  {
      name: 'Darth Vader',
      height: 202,
      mass: 136,
      eye_color: 'yellow',
      gender: 'male',
  },
  {
      name: 'Leia Organa',
      height: 150,
      mass: 49,
      eye_color: 'brown',
      gender: 'female',
  },
  {
      name: 'Anakin Skywalker',
      height: 188,
      mass: 84,
      eye_color: 'blue',
      gender: 'male',
  },
];


console.log('****************************MAP********************************************');
//***MAP***
//1. Get array of all names
const names = characters.map(item => item.name);
console.log('names', names);

//2. Get array of all heights
const heights = characters.map(item => item.height);
console.log('heights', heights);

//3. Get array of objects with just name and height properties
const details = characters.map(item => ({name: item.name, height: item.height}));
console.log('details', details);

//4. Get array of all first names
const firstNames = characters.map(item => {
  let nameArray =  (item.name).split(' ');
  return nameArray[0];
});
console.log('firstNames', firstNames);


console.log('****************************REDUCE********************************************');
//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((total, char) => (total+(char.mass)), 0);
console.log('total mass', totalMass);

//2. Get total height of all characters
const totalHeights = characters.reduce((total, char) => (total+char.height),0);
console.log('total heights', totalHeights);

//3. Get total number of characters by eye color
const getCharByEyeColor = (color) => {
  return characters.reduce((total, char) => {
    if(char.eye_color === color) {
      total++
    }
    return total;
  },0);
};
console.log('chars by blue', getCharByEyeColor('blue'));
console.log('chars by yellow', getCharByEyeColor('yellow'));
console.log('chars by brown', getCharByEyeColor('brown'));

// //4. Get total number of characters in all the character names
const totalCharsCharacterNames = characters.reduce((total, char, i) => {
  total.push((char.name).length);
  return total;
}, []);
console.log('totalCharsCharacterNames', totalCharsCharacterNames);


console.log('****************************FILTER********************************************');
//***FILTER***
//1. Get characters with mass greater than 100
const heavyChars = characters.filter(character => character.mass > 100);
console.log('greater chars ', heavyChars);

//2. Get characters with height less than 200
const lessHeights = characters.filter(character => character.height < 200);
console.log('heights less than 200', lessHeights);

//3. Get all male characters
const maleChars = characters.filter(character => character.gender === 'male');
console.log('male chars', maleChars);

//4. Get all female characters
const femaleChars = characters.filter(character => character.gender === 'female');
console.log('male chars', femaleChars);



console.log('****************************SORT********************************************');
//***SORT***
//1. Sort by mass
const sortByMass = characters.sort((char1,char2) => char1.mass - char2.mass); // ascending order
console.log('sortByMass', sortByMass);

//2. Sort by height
const sortByHeight = characters.sort((char1, char2) => char2.height - char1.height); // descending order
console.log('sortByHeight', sortByHeight);

//3. Sort by name
const sortByName = characters.sort((name1, name2) => {
  let char1 = name1.name.toLowerCase();
  let char2 = name2.name.toLowerCase();

  if(char1 > char2) return 1;
  else if(char1 < char2) return -1;
  return 0;
});
console.log('sortByName', sortByName);

//4. Sort by gender
const sortByGender = characters.sort((a,b) => {
  let gender1 = a.gender.toLowerCase();
  let gender2 = b.gender.toLowerCase();

  if(gender1 > gender2) return 1;
  return 0;
});
console.log('sortByGender', sortByGender);


console.log('****************************EVERY********************************************');
//***EVERY***
//1. Does every character have blue eyes?
const haveBlueEyes = characters.every(char => char.eye_color === 'blue');
console.log('does every characters have eyes --', haveBlueEyes);

//2. Does every character have mass more than 40?
const greaterThan40 = characters.every(char => char.mass > 40);
console.log('every character have mass greater than 40', greaterThan40);

//3. Is every character shorter than 200?
const charsLessThan200 = characters.every(char => char.height < 200);
console.log('every character shorter than 200', charsLessThan200);

//4. Is every character male?
const everyCharMale = characters.every(char => char.gender === 'male');
console.log('every character male', everyCharMale);


console.log('****************************SOME********************************************');
//***SOME***
//1. Is there at least one male character?
const atleast1maleChar = characters.some(char => char.gender === 'male');
console.log('atleast1maleChar', atleast1maleChar);

//2. Is there at least one character with blue eyes?
const atleast1blueEyeChar = characters.some(char => char.eye_color === 'blue');
console.log('atleast1blueEyeChar', atleast1blueEyeChar);

//3. Is there at least one character taller than 210?
const atleast1CharTallerThan210 = characters.some(char => char.height > 210);
console.log('atleast1CharTallerThan210', atleast1CharTallerThan210);

//4. Is there at least one character that has mass less than 50?
const atleast1CharMassLessThan50 = characters.some(char => char.mass < 50);
console.log('atleast1CharMassLessThan50', atleast1CharMassLessThan50);
