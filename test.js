const myObject = [
  {name :  "tanzil", date : "04 03 23", cast:50},
  {name :  "tanzil", date : "05 03 23", cast:57},
  {name :  "tanzil", date : "06 03 23", cast:80},
  {name :  "tanzil", date : "07 03 23", cast:50},
  {name :  "tanzil", date : "08 03 23", cast:50},
  {name :  "tanzil", date : "09 03 23", cast:50},
  {name :  "tanzil", date : "10 03 23", cast:90},
  {name :  "tanzil", date : "11 03 23", cast:50},
  {name :  "tanzil", date : "12 03 23", cast:500},
  {name :  "tanzil", date : "13 03 23", cast:70},
  {name :  "tanzil", date : "14 03 23", cast:470},
  {name :  "tanzil", date : "14 03 23", cast:50},
  {name :  "tanzil", date : "15 03 23", cast:140},
  {name :  "tanzil", date : "16 03 23", cast:20},
  {name :  "tanzil", date : "17 03 23", cast:40},
  {name :  "tanzil", date : "18 03 23", cast:80},
  {name :  "tanzil", date : "19 03 23", cast:70}
];

const startDate = "15 03 23";
const endDate = "20 03 23";

const filteredArray = myObject.filter(obj => {
  const dateParts = obj.date.split(' ');
  const objDate = new Date(`20${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
  const startParts = startDate.split(' ');
  const start = new Date(`20${startParts[2]}-${startParts[1]}-${startParts[0]}`);
  const endParts = endDate.split(' ');
  const end = new Date(`20${endParts[2]}-${endParts[1]}-${endParts[0]}`);
  return objDate >= start && objDate <= end;
});

console.log(filteredArray);
const castSum = filteredArray.reduce((acc, obj) => acc + obj.cast, 0);
console.log(castSum);
