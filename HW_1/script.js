
// Подсчет количества вхождений символа в строку (рекурсивно и итеративно)
// Напишите рекурсивную функцию, которая принимает строку и символ, а затем возвращает количество вхождений этого символа в строку.
// Например: “hello world”, “l” -> 3

// Рекурсивный подход:
// ---------------------------------------------------------------

// function countOccurrencesRecursive(str, char) {
//     // Базовый случай: если строка пуста, вернем 0
//     if (str.length === 0) {
//         return 0;
//     }
    
//     // Проверяем, совпадает ли первый символ строки с искомым символом
//     const firstChar = str[0];
//     const restOfString = str.slice(1);
    
//     // Если символ совпадает, увеличиваем счетчик и вызываем функцию для остатка строки
//     if (firstChar === char) {
//         return 1 + countOccurrencesRecursive(restOfString, char);
//     } else {
//         // Если символы не совпадают, вызываем функцию для остатка строки без увеличения счетчика
//         return countOccurrencesRecursive(restOfString, char);
//     }
// }

// const str = "hello world";
// const char = "l";
// const result = countOccurrencesRecursive(str, char);
// console.log(result); // Выведет 3

//  Итеративный подход:
// ---------------------------------------------------------------

// function countOccurrencesIterative(str, char) {
//     let count = 0;
    
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             count++;
//         }
//     }
    
//     return count;
// }

// const str = "hello world";
// const char = "l";
// const result = countOccurrencesIterative(str, char);
// console.log(result); // Выведет 3