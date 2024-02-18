// -------------------------------------1-------------------------------------

// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// let student = {
//   name: 'Markus',
//   proffesion: 'електрик',
//   averageMark: 3.6,
//   numberOfClassesMissed: 31,
//   studentsSuccess: function () {
//     console.log(
//       'Ім`я студента :' +
//         this.name +
//         '. Cпеціальнісь :' +
//         this.proffesion +
//         '. Cередній бал :' +
//         this.averageMark +
//         '. Kількість пропущених занять :' +
//         this.numberOfClassesMissed,
//     );
//   },
// };
// student.studentsSuccess();

// let student2 = {
//   name: 'Tom',
//   proffesion: 'ветеренар',
//   averageMark: 4.2,
//   numberOfClassesMissed: 9,
// };

// let student3 = {
//   name: 'Jerry',
//   proffesion: 'стоматолог',
//   averageMark: 4.8,
//   numberOfClassesMissed: 2,
// };
// student.studentsSuccess.bind(student2)();
// student.studentsSuccess.bind(student3)();

// student.studentsSuccess.call(student2);
// student.studentsSuccess.call(student3);

// student.studentsSuccess.apply(student2);
// student.studentsSuccess.apply(student3);

// -------------------------------------2-------------------------------------

// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const buttonForHtml = document.getElementById('btn-html');
// const imageHtml = document.querySelector('.img-html');
// const buttonForCss = document.getElementById('btn-css');
// const imageCss = document.querySelector('.img-css');

// const testBtn = {
//   designations() {
//     console.log(this.item);
//   },
// };
// const html = {
//   item: [
//     'HTML - стандартизована мова розмітки документів для перегляду вебсторінок  браузері.',
//   ],
// };
// const css = {
//   item: [
//     'CSS - це спеціальна мова стилю сторінок, що використовується для опису зовнішнього вигляду.',
//   ],
// };

// buttonForHtml.addEventListener('click', testBtn.designations.bind(html));

// buttonForHtml.addEventListener('click', function () {
//   buttonForHtml.disabled = true;
//   imageHtml.style.display = 'inline';
//   buttonForCss.disabled = false;
//   imageCss.style.display = 'none';
// });

// buttonForCss.addEventListener('click', testBtn.designations.bind(css));

// buttonForCss.addEventListener('click', function () {
//   buttonForCss.disabled = true;
//   imageCss.style.display = 'inline';
//   buttonForHtml.disabled = false;
//   imageHtml.style.display = 'none';
// });

// -------------------------------------3-------------------------------------

// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// function magazine(product, price, howMany) {
//   alert(product + ' it will cost ' + price * howMany + '$');
// }
// magazine(
//   prompt('What do you want to buy?'),
//   prompt('Price per kilogram?'),
//   prompt('How many kilograms do you want to buy?'),
// );
