const btnSub = document.getElementById('buttonSub');
const mail = document.getElementById('exampleInputEmail1');
const pass = document.getElementById('exampleInputPassword1');
const exText = document.getElementById('exampleFormControlTextarea1');
const text = document.querySelector('.TuCosPokaz');
const circle1 = document.getElementById('uno');
const circle2 = document.getElementById('dos');
const circle3 = document.getElementById('tres');
const circle4 = document.getElementById('guatro');
const amount = document.querySelector('[name="kwota"]');
const el = document.querySelector(".element");
const result = document.querySelector('#wynik');
const resVal = document.querySelector(".resultValue");
const newScore = document.querySelector('#NewScore');
const table = document.getElementById('myTab');
let scoreArr = [];

let maxValue = 0;
let currentValue = 0;
const NValue = 50;


var submitFunc = (e) => {

    if (mail.value != "" || pass.value != "") {
        mail.value = '';
        pass.value = '';
        text.textContent = "Wysłano";
    }
    else {
        text.textContent = " O czymś zapomniałeś";
    }
    e.preventDefault();
}


var CircleMath = function (maxValue, currentValue) {
    let resultCirle = Math.floor((currentValue * 100) / maxValue);

    return resultCirle;
}

const jsonFile = {

    "maxValue1": 3900,
    "currentValue1": 2000,


    "maxValue2": 2000,
    "currentValue2": 1500,


    "maxValue3": 700,
    "currentValue3": 200,


    "maxValue4": 3000,
    "currentValue4": 1500,



}
circle1.textContent = CircleMath(jsonFile.maxValue1, jsonFile.currentValue1) + "%";
circle2.textContent = CircleMath(jsonFile.maxValue2, jsonFile.currentValue2) + "%";
circle3.textContent = CircleMath(jsonFile.maxValue3, jsonFile.currentValue3) + "%";
circle4.textContent = CircleMath(jsonFile.maxValue4, jsonFile.currentValue4) + "%";


console.log(Math.floor(circle1.textContent * 3.6));
console.log(Math.floor(circle2.textContent * 3.6));

//  START OF VALUE CALCULATOR
function createMoney(amount, currency) {
    return Object.freeze({
        amount, currency
    });
}

function exchange(money, toCurrency) {
    const exchangeRate = exchangeRates[money.currency][toCurrency];
    const exchangedAmount = money.amount * exchangeRate;

    return createMoney(exchangedAmount, toCurrency);
}

const exchangeRates = {
    PLN: {
        USD: 0.3203,
        EUR: 0.2703
    },
    USD: {
        PLN: 3.8314,
        EUR: 0.26
    },
    EUR: {
        USD: 1.1857,
        PLN: 4.5428
    }
};

const form = document.querySelector('[name="przelicz"]');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const amount = e.target.querySelector('[name="kwota"]').value;
    const fromCurrency = e.target.querySelector('[name="zczego"]').value;
    const toCurrency = e.target.querySelector('[name="na"]').value;

    const moneyToExchange = createMoney(amount, fromCurrency);
    const exchangedAmount = exchange(moneyToExchange, toCurrency);
    const resVal = e.target.querySelector(".resultValue");
    const result = e.target.querySelector('#wynik');


    result.value = exchangedAmount.amount;
    document.getElementById('wartosc').innerHTML = exchangedAmount.amount;

    saveDate();



});
// END OF VALUE CALCULATOR


//date start
function saveDate() {
    const now = new Date();

    const html = `
    Time: ${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}
    Day: ${now.getDate()} . ${now.getMonth() + 1} . ${now.getFullYear()}
    `

    el.innerHTML = html

    document.getElementById('data').innerHTML = ` Time: ${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()} ${now.getDate()} . ${now.getMonth() + 1} . ${now.getFullYear()}`
    const newSc = document.createElement('td');
    scoreArr.push(el.textContent);


    /*const addRow = (myTab) => {

        e.preventDefault();
        scoreArr.forEach(html => {
            const newSc = document.createElement('td');
            newSc.innerHTML = `${html}`;
            timeList.appendChild(newSc);
        })
    
    }*/

}

const clearDate = () => {

    amount.value = "";
    result.value = "";

}


addRow = function (myTab) {
    $('#' + id + ' tr:last').after('<tr><td>3</td></tr>');
}

//transform: rotate(`${circle1.textContent*3,6}deg);
let rot1 = Math.floor(circle1.textContent * 3.6);
let rot2 = Math.floor(circle2.textContent * 3.6);
let rot3 = Math.floor(circle3.textContent * 3.6);
let rot4 = Math.floor(circle4.textContent * 3.6);
document.getElementById("ls1").style.transform = `rotate(${rot1}deg)`;
document.getElementById("ls2").style.transform = `rotate(${rot2}deg)`;
document.getElementById("ls3").style.transform = `rotate(${rot3}deg)`;
document.getElementById("ls4").style.transform = `rotate(${rot4}deg)`;



btnSub.addEventListener('click', submitFunc);
amount.addEventListener('click', clearDate);
newScore.addEventListener('click', addRow)







