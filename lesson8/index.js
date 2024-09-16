//================== МАСИВИ ============================
//==============================================
//==============================================
//==============================================
//==============================================
//==============================================
//==============================================
//==============================================
// Задача. Дано вартості товарів, яку купив користувач. Знайти загальну вартість усіх товарів



















// //            0  1  2  3  4   5   6   7    8
// let prices = [2, 1, 4, 5, 12, 23, 45, 213, 12] // prices.length = 9

// let s = prices[0]
// // for (let i = 1; i <=8; i++) {
// for (let i = 1; i < prices.length; i++) {
//   //як змінюються номери
//   s = s + prices[i] // що зробити з кожним елементом prices[i]
// }
// alert(s)
//==============================================
// Задача. Дано розміри доходу магазину за кожен місяць протягом року. Знайти:
// 1) загальний дохід за рік (1-12)
// 2) загальний дохід за 1-ше півріччя (1-6)
// 3) загальний дохід за 2-ге півріччя (7-12)
// 4) загальний дохід за 2-гий квартал (4-6)
// 5) загальний дохід за 2-гий і 3-тій квартал (4-9)

//--- ФУНКЦІЯ ДЛЯ ВВЕДЕННЯ МАСИВУ (ВКАЗУЄМО КІЛЬКІСТЬ ПОТІРБНИХ ЕЛЕМЕНТІВ)
//userLength - кількість потрібних елементів
//prefixMessage - повідомлення для користувача при введенні одного елемента
// function inputArray(userLength, prefixMessage) {
//   let arr = []
//   for (let i = 0; i < userLength; i++) {
//     let val = parseFloat(prompt(`${prefixMessage} ${i + 1} = `))
//     arr.push(val)
//   }
//   return arr
// }

// let income = inputArray(12, 'Введіть прибуток за місяць з номером')
// document.write(income)

// //--- Функція для знаходження суми елементів де номери змінюються від startMonthNumber  до endMonthNumber
// //---------------------------
// //Вводимо елементи масиву
// const incomesList = inputArray(12)
// //Знаходимо результат
// // 1) загальний дохід за рік (1-12)
// const sumYear = getIncomeSum(incomesList, 1, 12)
// document.write(sumYear)
// // 2) загальний дохід за 1-ше півріччя (1-6)
// const sum_1_6 = getIncomeSum(incomesList, 1, 6)
// document.write(sum_1_6)
// // 3) загальний дохід за 2-ге півріччя (7-12)
// const sum_7_12 = getIncomeSum(incomesList, 7, 12)
// document.write(sum_7_12)
// // 4) загальний дохід за 2-гий квартал (4-6)
// // 5) загальний дохід за 2-гий і 3-тій квартал (4-9)

//==============================================
//Знайти суму цін товарів, які більші за 100. Кількість та ціни вводяться з клавіатури
//------------- 1) розв"язок без функій -----------------
// //1) Вводимо кількість елементів
// let priceNum = parseInt(prompt('Введіть кількість цін'))
// //2) Вводимо елементи масиву
// let prices = []
// for (let i = 0; i < priceNum; i++) {
//   let productPrice = parseFloat(
//     prompt(`Введіть ціну товару з номером ${i + 1}`)
//   )
//   prices.push(productPrice)
// }
// //3) Знаходимо розв"язок
// let sum = 0
// for (let i = 0; i < prices.length; i++) {
//   if (prices[i] > 100) sum += prices[i]
// }
// //4)Виводимо розв"язок
// document.write(`Sum = ${sum}`)
//------------- 2)розв"язок з функіями -----------------
// function getPrices(priceNum) {
//   let prices = []
//   for (let i = 0; i < priceNum; i++) {
//     let productPrice = parseFloat(
//       prompt(`Введіть ціну товару з номером ${i + 1}`)
//     )
//     prices.push(productPrice)
//   }
//   return prices
// }
// function getSumGraterThan100(prices) {
//   let sum = 0
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] > 100) sum += prices[i]
//   }
//   return sum
// }
// function getCountGraterThan100(prices) {
//   let counter = 0
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] > 100) counter++
//   }
//   return counter
// }

// //1) Вводимо кількість елементів
// let priceNum = parseInt(prompt('Введіть кількість цін'))
// //2) Вводимо елементи масиву
// let prices = getPrices(priceNum)
// //3) Знаходимо розв"язок
// let result = getSumGraterThan100(prices)
// //4)Виводимо розв"язок
// document.write(`Sum = ${result} <br>`)
// document.write(
//   `Кількість більших за 100 = ${getCountGraterThan100(prices)}`
// )
//------------------------------------------------------
//==============================================
//Дано вартості товарів. Для тих, які більші за 1000 від ціни відняти 200.

//Функція, яка дає знижку на товари. що дорожчі за 1000 грн
// function addDiscount(prices) {
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] > 1000) prices[i] -= 200
//   }
// }
// //              0    1    2     3     4
// let prices = [2300, 129, 4500, 100, 54545] //prices.length = 5

// addDiscount(prices)r

// document.write(prices)

//Задача. Створити функцію, яка для довільної кількості цін товарів знаходить суму цін товарів, які більші за 100.

// let sum1 = getSumOfPricesGrateThan_100(2, 130, 312, 45, 2133, 3)

//==============================================
//       Задача. Створити функцію, яка приймає рік виходу на пенсію, та довільну
// кількість значень років працівників. Визначити кількість пенсіонерів.
//функція, яка підраховує кількість пенсіонерів
// function getPensionerCount(pensionAge, ...workerAges) {
//   let pensionerCount = 0
//   for (let i = 0; i < workerAges.length; i++) {
//     if (workerAges[i] >= pensionAge) pensionerCount++
//   }
//   return pensionerCount
// }

// //виклик функції для знаходження кількості пенсіонерів
// let res = getPensionerCount(65, 21, 34, 54, 23, 45, 35, 67, 71, 31)
// document.write(`Кількість пенсіонерів = ${res}`)

//========================================================
//Дано покази температур. Підрахувати кількість показників у заданому діапазоні
// function getTemperaturesNumberInRange(
//   minTemp,
//   maxTemp,
//   ...temperaturesList
// ) {
//   let tempCount = 0
//   for (let i = 0; i < temperaturesList.length; i++) {
//     if (temperaturesList[i] >= minTemp && temperaturesList[i] <= maxTemp)
//       tempCount++
//   }
//   return tempCount
// }
// //Знайдемо кількість показів між 10 і 15 градусів
// let tempCount = getTemperaturesNumberInRange(
//   10,
//   15,
//   5,
//   21,
//   11,
//   12,
//   14,
//   16,
//   21,
//   23,
//   32
// )
// document.write(`Кількість температур між 10 і 15  = ${tempCount}`)
//==============================================================
// Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.
//---- 1) Варіант з використанням arguments
// function getPositiveAverage() {
//   let positiveSum = 0
//   let positiveNumber = 0
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > 0) {
//       positiveSum += arguments[i]
//       positiveNumber++
//     }
//   }
//   return positiveSum / positiveNumber
// }
//---- 2) Варіант з використанням rest parameter
// function getPositiveAverage(...temperaturesList) {
//   let positiveSum = 0
//   let positiveNumber = 0
//   for (let i = 0; i < temperaturesList.length; i++) {
//     if (temperaturesList[i] > 0) {
//       positiveSum += temperaturesList[i]
//       positiveNumber++
//     }
//   }
//   return positiveSum / positiveNumber
// }
// //--------
// let res1 = getPositiveAverage(-2, 0, 3, 9, 10, -4, 0)
// document.write(`Середнє додатних = ${res1.toFixed(2)}`)