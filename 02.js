// 1. Дан код:
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 // Сперва происходит инкремент а, затем значение присваивается с (a=2, c=2)
// d = b++; alert(d);           // 1 // Сперва присваивается значение b, затем происходит его инкремент (b=2)
// c = (2+ ++a); alert(c);      // 5 // Инкремент а, затем +2 (c=5, a=3)
// d = (2+ b++); alert(d);      // 4 // Сперва 2 + b, затем инкремент b (d=4, b=3)
// alert(a);                    // 3
// alert(b);                    // 3
// Почему код даёт именно такие результаты?

// 2. Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2);

// Ответ: 5

// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму;
// ноль можно считать положительным числом.

let a = Math.floor(Math.random() * 21) - 10;
let b = Math.floor(Math.random() * 21) - 10;
console.log(`a = ${a}`);
console.log(`b = ${b}`);

if (a >= 0 && b >= 0) {
	console.log(a - b);
} else if (a < 0 && b < 0) {
	console.log(a * b);
} else {
	console.log(a + b);
}

// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

a = Math.floor(Math.random() * 16);
// console.log(a);

switch (a) {
	case 0:
		console.log(0);
	case 1:
		console.log(1);
	case 2:
		console.log(2);
	case 3:
		console.log(3);
	case 4:
		console.log(4);
	case 5:
		console.log(5);
	case 6:
		console.log(6);
	case 7:
		console.log(7);
	case 8:
		console.log(8);
	case 9:
		console.log(9);
	case 10:
		console.log(10);
	case 11:
		console.log(11);
	case 12:
		console.log(12);
	case 13:
		console.log(13);
	case 14:
		console.log(14);
	case 15:
		console.log(15);
}

// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return.

function calcAdd(x, y) {
	return x + y;
}

function calcSub(x, y) {
	return x - y;
}

function calcMul(x, y) {
	return x * y;
}

function calcDiv(x, y) {
	return x / y;
}

console.log(calcAdd(5, 10));
console.log(calcSub(10, 3));
console.log(calcMul(3, 3));
console.log(calcDiv(15, 5));

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов,
// operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций
// (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case 'add':
			console.log(calcAdd(arg1, arg2));
			break;
		case 'sub':
			console.log(calcSub(arg1, arg2));
			break;
		case 'mul':
			console.log(calcMul(arg1, arg2));
			break;
		case 'div':
			console.log(calcDiv(arg1, arg2));
	}
}

mathOperation(5, 10, 'add');
mathOperation(10, 3,'sub');
mathOperation(3, 3, 'mul');
mathOperation(15, 5, 'div');

// 7. *Сравнить null и 0. Попробуйте объяснить результат.

console.log(null == 0);   // false
console.log(null === 0);  // falseЮ

// 8. *С помощью рекурсии организовать функцию возведения числа в степень.
// Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
	if (pow > 1) {
		return val * power(val, pow - 1);
	} else if (pow == 1) {
		return val;
	} else {
		return 1;
	}
}

console.log(power(2, 3));
