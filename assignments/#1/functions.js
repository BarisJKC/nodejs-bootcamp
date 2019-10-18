function introducer(name, age, job, livingLocation) {
  // Use function parameters to produce the following output
  // Example output: 'My name is Deniz. I am 26 years old. I am a full stack developer and I live in Istanbul.'
  console.log(
    `My name is ${name}. I am ${age} years old. I am a ${job} and I live in ${livingLocation}.`
  );
}

function calculateDogAge(age) {
  // 1 human year is 7 dog years
  // return the dog year for the given age parameter
  return age * 7;
}

function convertTurkishLira(amount, curreny) {
  // currency can take 'dollar', 'euro' or 'pounds's
  // convert given amount in Turkish lira to given currency
  // Example usage:
  // convertTurkishLira(6000, 'dollar') this will return 1019.30
  
  if (curreny === "dollar") {
    return amount / 6;
  }

  if (curreny === "euro") {
    return amount / 7;
  }

  if (curreny === "pounds") {
    return amount / 8;
  }

  return "You are poor! Try again when you are rich...";
}

const introducer=(name, age, job, livingLocation) => {console.log(`My name is ${name}. I am ${age} years old. I am ${job} and I live in ${livingLocation}.`)}

introducer("Deniz",26,"full stack developer","İstanbul");

const calculateDogAge = (age) => {return age*7}

console.log(`The dog year for this age is ${calculateDogAge(5)}`)
  
const convertTurkishLira = (amount, currency) => {
    const currencyNameArray = ["dollar","euro","pounds"]
    const currencyValueArray = [1/5,1/6,1/7]
    for (var i=0;i<currencyNameArray.length;i++) {
        if(currencyNameArray[i]===currency) {
            return amount*currencyValueArray[i]
        }
    }
    // currencyNameArray.forEach(element => {if(element===currency) {return amount*currencyValueArray[currencyNameArray.indexOf(element)]}});
}
console.log(convertTurkishLira(6000,"dollar"))