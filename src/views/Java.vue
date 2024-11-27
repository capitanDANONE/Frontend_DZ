<template>
	<div>
	  <h1>10 тетрадь</h1>
	  <button @click="greetUser">Задание 1: Приветствие</button>
	  <button @click="checkAge">Задание 2: Проверка возраста</button>
	  <button @click="guessNumber">Задание 3: Угадай число</button>
	  <button @click="checkPassword">Задание 4: Проверка пароля</button>
	  <button @click="calculate">Задание 5: Простой калькулятор</button>
	</div>
	<div>
	  <h1>11 тетрадь</h1>
	  <form @submit.prevent="submitForm">
		<label for="name">Name</label>
		<input id="name" type="text">

		<lablel for="e-mail">E-mail</lablel>
		<input type="email" id="e-mail">

		<lablel for="tele">Telephone</lablel>
		<input type="tel" id="tele">

		<lablel for="date">Date</lablel>
		<input type="date" id="date">

		<lablel for="comment">Comment</lablel>
		<textarea type="text" id="comment"></textarea>

		<lablel for="submit">Submit</lablel>
		<input id="submit" type="submit">
	  </form>
	</div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
let userName = ref<string>("");
let userAge = ref<number | null>(null);
const greetUser = () => {
	userName.value = prompt("Введите ваше имя") || "";
	userAge.value = Number(prompt("Введите ваш возраст"));
	if (userName.value && !isNaN(userAge.value)) {
		alert(`Привет, ${userName.value}! Тебе ${userAge.value} лет.`);
		console.log(`Привет, ${userName.value}! Тебе ${userAge.value} лет.`);
	} else {
		alert("Неправильный ввод данных.");
	}
}
const checkAge = () => {
	if (userAge.value === null) {
		alert("Сначала выполните приветствие и введите возраст.");
		return;
	}

	if (userAge.value >= 18) {
		alert("Вы совершеннолетний");
		console.log("Вы совершеннолетний");
	} else {
		alert("Вы несовершеннолетний");
		console.log("Вы несовершеннолетний");
	}
}
const guessNumber = () => {
	const randomNumber = Math.floor(Math.random() * 10) + 1;
	const guess = Number(prompt("Угадайте число от 1 до 10"));

	if (!isNaN(guess)) {
		if (guess === randomNumber) {
		alert("Поздравляем! Вы угадали число!");
		} else {
		alert(
			guess < 5
			? "Вы не угадали. Введенное число меньше 5."
			: "Вы не угадали. Введенное число больше 5."
		);
		}
		console.log(`Загаданное число: ${randomNumber}, введенное число: ${guess}`);
	} else {
		alert("Введите корректное число.");
	}
}
const checkPassword = () => {
	const correctPassword = "12345";
	const userPassword = prompt("Введите пароль") || "";

	if (userPassword) {
		if (userPassword === correctPassword) {
		alert("Доступ разрешен");
		console.log("Доступ разрешен");
		} else {
		alert("Доступ запрещен");
		console.log("Доступ запрещен");
		}
	} else {
		alert("Пароль не может быть пустым.");
	}
}
const calculate = () => {
	const num1 = Number(prompt("Введите первое число"));
	const num2 = Number(prompt("Введите второе число"));
	const operator = prompt("Введите оператор (+, -, *, /)");

	if (!isNaN(num1) && !isNaN(num2)) {
		let result: number | string;
		switch (operator) {
		case "+":
			result = num1 + num2;
			break;
		case "-":
			result = num1 - num2;
			break;
		case "*":
			result = num1 * num2;
			break;
		case "/":
			result = num2 !== 0 ? num1 / num2 : "Деление на ноль!";
			break;
		default:
			result = "Неверный оператор";
		}
		alert(`Результат: ${result}`);
		console.log(`Результат операции ${num1} ${operator} ${num2} = ${result}`);
	} else {
		alert("Некорректный ввод чисел.");
	}
}
const submitForm = (event: Event) => {
	const submitEvent = event as SubmitEvent;
	const form = submitEvent.target as HTMLFormElement
	const name = (form.elements.namedItem('name') as HTMLInputElement).value;
	const email = (form.elements.namedItem('e-mail') as HTMLInputElement).value;
	const telephone = (form.elements.namedItem('tele') as HTMLInputElement).value;
	const date = (form.elements.namedItem('date') as HTMLInputElement).value;
	const comment = (form.elements.namedItem('comment') as HTMLTextAreaElement).value;
	console.log(`
	Имя: ${name}\n
	E-mail: ${email}\n
	Телефон: ${telephone}\n
	Дата: ${date}\n
	Коммениарий: ${comment}\n`)
}
</script>

<style scoped>
button {
	display: block;
	margin: 10px 0;
	padding: 8px 16px;
	font-size: 16px;
}
form {
	display: flex;
	flex-direction: column;
	width: 250px;
	> * {
		display: block;
	}
	> #comment{
		overflow: hidden;
		resize: vertical;
	}
}
</style>
