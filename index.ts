// "getElementById" vracia "HTMLElement" a my potrebujeme "HTMLInputElement", ktorý drží "value"
// v typescript existuje "as" – typová konverzia, ale skúsime toto ošetriť nižšie v kóde
const inputEl = document.getElementById('input');
const meterEl = document.getElementById('meters');
const literEl = document.getElementById('liters');
const kilogramEl = document.getElementById('kilograms');

// vstup "num" je číslo ale funkcia "toFixed" už vracia "string"
const meterToFeet = (num: number): string => {
  return (num * 3.281).toFixed(3);
};

const feetToMeter = (num: number): string => {
  return (num / 3.281).toFixed(3);
};

const litersToGalons = (num: number): string => {
  return (num * 0.264).toFixed(3);
};

const galonsToLiters = (num: number): string => {
  return (num / 0.264).toFixed(3);
};

const kgToPound = (num: number): string => {
  return (num * 2.204).toFixed(3);
};
const poundToKg = (num: number): string => {
  return (num / 2.204).toFixed(3);
};

// znak rovnosti "==" nikdy nepoužívaj – vždy používaj "==="
const isMoreThanOne = (num: number): string => {
  return num === 1 ? '' : 's';
};

// "input event" existuje pri "HTMLInputElement", takže to musíme ošetriť, aby náhodou "inputEl" nebol "div"
if (inputEl instanceof HTMLInputElement) {
  inputEl.addEventListener('input', () => {
    // to plus urobí zo "string" – "number", čo vlastne potrebuješ pre potreby všetkých tých definovaných funkcií
    // avšak kľudne použi "parseInt(inputEl.value)" – myslím, že to je úplne to isté :-)
    const inputValue = +inputEl.value;

    // "meterEl" môže byť "null" a preto pomocou podmienky skontrolujeme, či je "element" definovaný alebo nie
    // namiesto "if" som použil "ternárny operátor" – "&&" je AND a "||" je OR
    meterEl &&
      (meterEl.innerHTML = `${inputValue} meter${isMoreThanOne(inputValue)} = ${meterToFeet(inputValue)} feet | 
    ${inputValue} feet = ${feetToMeter(inputValue)} meters`);

    literEl &&
      (literEl.innerHTML = `${inputValue} liter${isMoreThanOne(inputValue)} = ${litersToGalons(inputValue)} galons | 
    ${inputValue} galon${isMoreThanOne(inputValue)} = ${galonsToLiters(inputValue)} liters`);

    kilogramEl &&
      (kilogramEl.innerHTML = `${inputValue} kilogram${isMoreThanOne(inputValue)} = ${kgToPound(inputValue)} pounds | 
    ${inputValue} pound${isMoreThanOne(inputValue)} = ${poundToKg(inputValue)} kilograms`);
  });
}
