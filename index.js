const fahrenheitInput = Number(prompt(`Please input a number so we can convert it to celsius`))

const convertToCelcius = (americaTemp) => {
  const celsiusTemp = (americaTemp - 32) * (5 / 9);
  return celsiusTemp
}

const temperatureFeel = (aTemp) => {
if (aTemp < 32) {
  return `very cold`;
} 
else if (aTemp < 64) {
  return `cold`;
}
else if (aTemp < 86) {
  return `warm`;
}
else if (aTemp < 100) {
  return `hot`;
}
else if (aTemp >- 100) {
  return `very hot`
}
} 

const celsius = convertToCelcius(fahrenheitInput);
const feeling = temperatureFeel(fahrenheitInput)
alert (`The number you chose was ${fahrenheitInput} It is ${celsius} and is feeling ${feeling} `)