//Задача 11. Знайти суму 5 непарних випадкових чисел, що знаходяться між заданими користувачем числами.
//Крок 0.















//
// const  minRangeNumber = parseInt(prompt("minRangeNumber"))
// const  maxRangeNumber = parseInt (prompt("maxRangeNumber"));
// let  sum = 0;
//
// for (let i = 0; i <= 5; ) {
//     const randomNum = minRangeNumber + Math.floor(Math.random() * ( maxRangeNumber - minRangeNumber ));
//
//     if (randomNum%2 !==0){
//         sum += randomNum;
//         i++
//
//     }
// }
//
//
// document.write(sum)


//=====================================================

//Задача 1.Поступово генеруються N чисел (-100 - 100). Знайти максимальне, мінімальне та середнє значення











// const NumberCount =parseInt(prompt("кількість чисел"))
// let maxNumber = -Infinity;
// let minNumber = Infinity;
// let sum = 0;
//
// for (let i = 0; i < NumberCount; i++) {
//
//     const randomNum = Math.floor(Math.random() * 101);
//     console.log(randomNum)
//     if (maxNumber<randomNum){
//         maxNumber = randomNum;
//     }
//     if (minNumber>randomNum){
//         minNumber = randomNum;
//     }
//     sum += randomNum;
//
//
// }
// const average = sum / NumberCount;
//
// document.write(`Avarage = ${average}\n max = ${maxNumber} , min = ${minNumber}`);


//=====================================================
//Поступово генерувати 100 випадкових чисел від 1 до 1000.Підрахувати яких чисел більше: парних чи непарних.


//evenNumber -кількість парних
// oddNumber - кількість не парних















// const minNUmber = 1;
// const maxNUmber = 1000;
//
// let evenNumber = 0;
// let oddNumber = 0;
// for (let i = 0; i < 100; i++) {
//     const randomNumber = minNUmber+ Math.floor(Math.random() * (maxNUmber + minNUmber +1));
//     if (randomNumber %2 == 0) {
//         evenNumber++;
//     }else {
//         oddNumber++;
//     }
//
//
// }
//
//
// document.write(evenNumber, ' \t' ,oddNumber)


//=====================================================


// Задача 3. Вивести високосні роки у вказаному діапазоні (між початковим і кінцевим  роками).
//високосний   він кратний 4, але не кратний 100, а також якщо він кратний 400.





















// const startYear = parseInt(prompt("start year"));
// const endYear = parseInt(prompt("end year"));
//
// for (let year = startYear; year <= endYear; year++) {
//     if (year%4 === 0 && year%100 !== 0 || year%400 === 0) {
//     document.write(`${year} <br>`)
//     }
//
// }


//=====================================================


//Задача 4. Вивести усі трицифрові числа, де друга цифра завжди є меншою або рівню за першу, а третя є меншою або рівною за другу.    100 - 999










// for (let c1 = 1; c1 <= 9; c1++) {
//     for (let c2 = 0; c2 <= 9; c2++) {
//         for (let c3 = 0; c3 <= 9; c3++) {
//           if (c2<=c1 && c3<=c2){
//               document.write(`${c1}${c2}${c3} <br> `)
//           }
//         }
//     }
// }

//=====================================================
//Вивести з кожного десятка (1-10, 11-20, 21-30, ... , 91-100) по 3 випадкових парних числа













//rangeStart
//rangeEnd
// for (let rangeStart = 1,rangeEnd=10 ; rangeEnd <= 100; rangeStart+=10,rangeEnd+=10) {
//     for (let i = 0 ; i < 3; ) {
//         const randomNumber = rangeStart+ Math.floor(Math.random() * (rangeEnd + rangeStart +1));
//         if (randomNumber%2===0){
//             document.write(`${randomNumber} <br>`)
//             i++
//         }
//     }
// }
//


//=====================================================
// Вивести 5 маркованих списків по 3 випадкових числа
//


// for (let lists = 0; lists < 5; lists++) {
//     document.write(`<ul>`)
//
//     for (let item = 1; item <=3 ; item++) {
//         const randomNum =  1+ Math.floor(Math.random() * (1000 + 1));
//         document.write(`<li>${randomNum}</li>`)
//     }
// document.write(`</ul>`)
//
// }




// for (let i = 0; i < 5; i++) {
//     document.write('<ul>')
//
//     for (let j = 0; j < 3; j++) {
//         const randomNumber = 1+ Math.floor(Math.random() * (100 + 1  +1));
//         document.write(`<li> ${randomNumber} </li>`)
//     }
//     document.write('</ul>')
//
// }


//=====================================================
// Вивести 4 двовимірні таблиці 5*6
















//=====================================================
// Горизонтальну діаграму з 8 рандомними значеннями (0-100)


// for (let i = 0; i < 8; i++) {
//     const randomNumber = 1+ Math.floor(Math.random() * (1 + 100));
//     console.log(randomNumber)
// document.write(`<div style="background: red;  margin-top: 10px; width: ${randomNumber}px ;height: 20px" ></div>`)
// }
//









// for (let i = 0; i < 8; i++)  {
//         const randomNumber = 1 + Math.floor(Math.random() * (100 + 1  +1));
//         document.write(`<div style="height: 20px; width: ${randomNumber}% ; margin-top: 10px;  background-color: red "></div>`)
// }
//
//
//


//=====================================================
// Випадковим  чином вивести у рандомних позиціях 10 зображень-смайликів


for (let i = 0; i < 10; i++) {
    const leftPos = 1 + Math.floor(Math.random() * (100 + 1  +1));
    const rightPos = 1 + Math.floor(Math.random() * (100 + 1  +1));
    const topPos = 1 + Math.floor(Math.random() * (100 + 1  +1));
    const bottomPos = 1 + Math.floor(Math.random() * (100 + 1  +1));

    document.write(`<img src="./img/01.png" style="position: absolute; width: 20px; top: ${topPos}px; left: ${leftPos}; bottom: ${bottomPos}px ; right: ${rightPos}; "></img>`)
}















// for (let i = 0; i < 10; i++)  {
//     const leftPos = 1 + Math.floor(Math.random() * (100 + 1  +1));
//     const rightPos = 1 + Math.floor(Math.random() * (100 + 1  +1));
//     const topPos = 1 + Math.floor(Math.random() * (100 + 1  +1));
//     const bottomPos = 1 + Math.floor(Math.random() * (100 + 1  +1));
//
//
//     document.write(`<img src="./img/01.jpg"  style="  position: fixed; left: ${leftPos}%; right: ${rightPos}%; top: ${topPos}%; bottom: ${bottomPos}%;  width: 20px;" ></img>`)
// }

//=====================================================
//Вивести радіо-кнопки для визначення того, скільки років людині у діапазоні (1-10, 11-20, 21-30, ... , 91-100)


// for ( let startNum  = 1, endNum = 10;  startNum <=91 ;startNum+=10 , endNum+=10) {
//     document.write(`<label>
// ${startNum}-${endNum}
//
// <input type="radio">
//
// </label>`)
// }
//=====================================================
//Сформували select з парними числами від 2 до 20
// document.write('<select>')
// for (let i = 2; i <= 20; i += 2) {
//   document.write(`<option value="${i}">${i}</option>`)
// }
// document.write('</select>')

//=====================================================
//Користувач вводить два символи у верхньому регістрі. Сформували два select з кодами символів у заданому діапазоні та символами у заданому діапазоні
// const firstLetter = prompt('Перша літера')
// const lastLetter = prompt('Друга літера')
// // A - C
// const firstLetterCode = firstLetter.charCodeAt(0)
// const lastLetterCode = lastLetter.charCodeAt(0)
// // 65
// // 66
// // 67
// document.write('<select>')
// for (let i = firstLetterCode; i <= lastLetterCode; i++) {
//   document.write(`<option value="${i}">${i}</option>`)
// }
// document.write('</select>')
// // A
// // B
// // C
// document.write('<select>')
// for (let code = firstLetterCode; code <= lastLetterCode; code++) {
//   document.write(
//     `<option value="${code}">${String.fromCharCode(code)}</option>`
//   )
// }
// document.write('</select>')

//=====================================================
// Задача 2.  Тільки позитивні емоції. З клавіатури вводиться М - максимальна кількість смайликів, які можна
// вивести. Комп’ютер випадково вибирає якесь із 4 наперед заданих. Серед них є сумний смайл.
// const smileNumber = parseInt(prompt('Максимальна кількість смайликів'))
// const rangeStart = 1,
//   rangeEnd = 4

//   1)Якщо знаходимо сумний смайл – зупитини
// for (let i = 0; i < smileNumber; i++) {
//   const imgNumber =
//     rangeStart + Math.floor(Math.random() * (rangeEnd - rangeStart + 1))
//   if (imgNumber === 4) break //Якщо номер - номер сумного смайла, то припинити

//   const imgPath = `./img/img${imgNumber}.jpg`
//   document.write(`<img src="${imgPath}" style="width:30px"/> `)
// }
//*******************
//   2)Якщо знаходимо сумний смайл – пропустити
// for (let i = 0; i < smileNumber; i++) {
//   const imgNumber =
//     rangeStart + Math.floor(Math.random() * (rangeEnd - rangeStart + 1))
//   if (imgNumber === 4) continue //Якщо номер - номер сумного смайла, то пропустити

//   const imgPath = `./img/img${imgNumber}.jpg`
//   document.write(`<img src="${imgPath}" style="width:30px"/> `)
// }
//**************
//   3)Якщо знаходимо сумний смайл – вибрати наступний позитивний
// const sadPosition = 4
// for (let i = 0; i < smileNumber; i++) {
//   let imgNumber =
//     rangeStart + Math.floor(Math.random() * (rangeEnd - rangeStart + 1))
//   if (imgNumber === sadPosition) imgNumber = ((imgNumber - 1 + 1) % 4) + 1

//   const imgPath = `./img/img${imgNumber}.jpg`
//   document.write(`<img src="${imgPath}" style="width:30px"/> `)
// }
//

//=====================================================
// Продаж булочок. Є у продавця N (>0) булочок. Поки є булочки продавати їх.
// (питати у користувача кількість, якщо є така, то продавати)

//=====================================================
// Задача 2. Комп’ютер 3 рази випадковим чином вибирає початок і кінець проміжку (проміжок повинен знаходитися в межах від 1 до 100). Користувач вводить число і виграє, якщо число знаходиться у цьому проміжку, або розташоване від нього (від лівого або правого краю) не більше ніж на 10. ((min-10)   ---  (max+10))


//
// const rangeStart = 1;
// const rangeEnd = 100;
//
//
//
// for (let i = 0; i < 3; i++) {
//     let minNum = rangeStart+ Math.floor(Math.random() * (rangeEnd + rangeStart +1));
//     let maxNum = rangeStart+ Math.floor(Math.random() * (rangeEnd + rangeStart +1));
//     console.log(minNum, maxNum);
//     if (minNum > maxNum) {
//         let tmp = minNum;
//         minNum = maxNum;
//         maxNum = tmp;
//     }
//     const userNumber = parseInt(prompt("user number"));
//     const resMess = userNumber >=-10 && userNumber <=maxNum+10  ? 'win':'lose';
//     alert(resMess)
//
//
// }


//=====================================================
// Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель.



//
// const rowsNumber = 1 + Math.floor(Math.random() * (100 +1));
// const columnsNumber = 1 + Math.floor(Math.random() * (100 +1));
// console.log(columnsNumber);
// console.log(rowsNumber);
//
// let  missle = parseInt(prompt("missle"));
// let  userRows;
// let userColumns;
// do {
//     userRows=  parseInt(prompt("userRows"));
//     userColumns = parseInt(prompt("UserColumns"));
//     missle --
//
// }
//
//
//
// while ( !(userRows === rowsNumber && columnsNumber === userColumns) && missle > 0){
//     if ((userRows === rowsNumber && columnsNumber === userColumns) ){
//         alert("win")
//
//
//     }else {
//         alert("lose")
//     }
// }








    // const rowsNumber = parseInt(prompt("rows number")); // n
    // const columnsNumber = parseInt(prompt("columns number")); // m
    //
    // let missleNumber = parseInt(prompt("missleNumber"));
    //
    // const shipRowPosition = 1 + Math.floor(Math.random() * (rowsNumber));
    // const shipColumnPosition = 1 + Math.floor(Math.random() * (columnsNumber));
    // console.log(shipColumnPosition);
    // console.log(shipRowPosition);
    //
    // let userRow, userColumn;
    // do {
    //     userColumn = parseInt(prompt("userColumn "));
    //     userRow = parseInt(prompt("userRow "));
    //     missleNumber--
    // }
    // while (!(userRow === shipRowPosition && userColumn === shipColumnPosition) && missleNumber > 0)
    // if ((userRow === shipRowPosition && userColumn === shipColumnPosition)) {
    //     alert("win")
    // } else {
    //     alert("lose")
    // }


//З клавіатури вводиться кількість рядків і стовпців. Вивести таблицю заповнену
//рандомними числами від 1 до 100

//=====================================================
//Двоє користувачів поступово вводять два числа від 1 до 10. Комп"ютер випадковим чином загадує число.
//1)якщо користувач вгадав - то має 10 балів
//2)якщо число користувача співпадає стосвоно парності/непарності - 3 бали
//Гра йде до тих пір, поки не хтось із користувачів не набере 20 балів

//=====================================================
//Сформувати 5 списків з випадкових чисел (1-100). У кожному списку елементи додаються до тих пір, поки числа менші за 50

//Ігровий автомат. Випадково вибираємо зображення у 3 позиціях.
// Вибір у кожній позиції вибирається як одне з чотирьох зображень.
//   Вивести ці зображення і повідомити виграш користувача
//   (три перших зображення 100 грн, три других – 200, три третіх – 500,
//    три четвертих зображення – 1000грн).
//    Використати цикли і switch (для вибору зображення за номером).  Давайте розглянемо цю також

//  1 - 10      10^1        30
//  2 - 100     10^2        300
//  3 - 1000    10^3        3000
//  4 - 10000   10^4        30000


//-----------------------------------------------------------
//Задача 15. Користувача поступово вводить показники температури протягом року. Знайти середню температуру.
// let sum = 0
// const rangeStart = -20,
//   rangeEnd = 20
// let minTemperature = +Infinity
// let maxTemperature = -Infinity
// for (let i = 0; i < 365; i++) {
//   let temperature =
//     rangeStart + Math.floor(Math.random() * (rangeEnd - rangeStart + 1))
//
//   sum += temperature
//   if (temperature > maxTemperature) maxTemperature = temperature
//   if (temperature < minTemperature) minTemperature = temperature
// }
// const average = sum / 365
// document.write(
//   `Average = ${average.toFixed(
//     3
//   )}, max = ${maxTemperature}, min = ${minTemperature}`kmfds
// )
//
//     let maxNum = 1+ Math.floor(Math.random() * 2);
// console.log(maxNum)
//
