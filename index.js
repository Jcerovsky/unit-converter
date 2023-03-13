const convertBtn = document.getElementById('convert');
const inputEl = document.getElementById('input');
const meterEl = document.getElementById('meters');
const literEl = document.getElementById('liters');
const kilogramEl = document.getElementById('kilograms');

const meterToFeet = (num) => {
    return (num*3.281).toFixed(3);
}

const feetToMeter = (num) => {
    return (num/3.281).toFixed(3);
}

const litersToGalons = (num) => {
    return (num*0.264).toFixed(3);
}

const galonsToLiters = (num) => {
    return (num/0.264).toFixed(3);
}

const kgToPound = (num) => {
    return (num*2.204).toFixed(3);
}
const poundToKg = (num) => {
    return (num/2.204).toFixed(3);
}

const isMoreThanOne = (num) => {
    return (num == 1)? '' : 's'
}

// use coverBtn.addEventListener if you want to convert after press of the button
inputEl.addEventListener('input', () => {
    const inputValue = inputEl.value
    meterEl.innerHTML = `${inputValue} meter${isMoreThanOne(inputValue)} = ${meterToFeet(inputValue)} feet | 
    ${inputValue} feet = ${feetToMeter(inputValue)} meters`;
    
    literEl.innerHTML = `${inputValue} liter${isMoreThanOne(inputValue)} = ${litersToGalons(inputValue)} galons | 
    ${inputValue} galon${isMoreThanOne(inputValue)} = ${galonsToLiters(inputValue)} liters`;
    
    kilogramEl.innerHTML = `${inputValue} kilogram${isMoreThanOne(inputValue)} = ${kgToPound(inputValue)} pounds | 
    ${inputValue} pound${isMoreThanOne(inputValue)} = ${poundToKg(inputValue)} kilograms`;
    
})



