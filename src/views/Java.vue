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
	<div>
	  <h1>{{ UtmHeading }}</h1>
	  <button @click="ToggleVisibility">Toggle button</button>
	  <button @click="ResetBackgroundColor"> Reset color</button>
	  <button @click="LogCurrentTime"> Log current time</button>
	  <div v-if="ContentVisible" class="content" :style="`width:100px; height:100px; background-color:${Background}`">

	  </div>
	</div>
	<div>
		<h1>13 тетрадь</h1>
		<img @dblclick="AlertDbclick" @mouseover="ToggleImage" :src="ImageSrc" :style="StyleImg">
		<input type="checkbox" id="check" @change="ToggleSemestr">
		<label v-if="Semestr" for="check">Первый семестр</label>
		<label v-else for="check">Второй семестр</label>
		<div v-if="Semestr">
			<h2>Первый семестр - Практики</h2>
			<table>
				<thead>
					<tr>
						<th>№</th>
						<th>Тема</th>
						<th>Отметка о посещении</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Основы языка HTML</td>
						<td><input type="checkbox" name="" id=""></td>
					</tr>
					<tr>
						<td>2</td>
						<td>Углубленное изучение HTML</td>
						<td><input type="checkbox" name="" id=""></td>
					</tr>
					<tr>
						<td>3</td>
						<td>Основы работы с CSS</td>
						<td><input type="checkbox" name="" id=""></td>
					</tr>
					<tr>
						<td>4</td>
						<td>Адаптивная верстка, Flexbox и Grid Layout</td>
						<td><input type="checkbox" name="" id=""></td>
					</tr>
					<tr>
						<td>5</td>
						<td>Bootstrap — работа с фреймворком</td>
						<td><input type="checkbox" name="" id=""></td>
					</tr>
					<tr>
						<td>6</td>
						<td>Основы языка JavaScript</td>
						<td><input type="checkbox" name="" id=""></td>
					</tr>
					<tr>
						<td>7</td>
						<td>Работа с DOM и событиями в JavaScript</td>
						<td><input type="checkbox" name="" id=""></td>
					</tr>
					<tr>
						<td>8</td>
						<td>Введение в GitHub и GitHub Pages</td>
						<td><input type="checkbox" name="" id=""></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div v-else>
			<h2>Второй семестр - Практики</h2>
			<table>
				<thead>
					<tr>
						<th>№</th>
						<th>Тема</th>
						<th>Отметка о посещении</th>
						<th>Отметка о выполнении</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Основы языка HTML</td>
						<td><input type="checkbox" name="" id=""></td>
						<td><input type="checkbox" name="" id=""></td>
					</tr>
					<tr>
						<td>2</td>
						<td>Формы и кнопки в HTML</td>
						<td><input type="checkbox" name="" id=""></td>
						<td><input type="checkbox" name="" id=""></td>
					</tr>
					<tr>
						<td>3</td>
						<td>Таблицы и интерактивные элементы HTML</td>
						<td><input type="checkbox" name="" id=""></td>
						<td><input type="checkbox" name="" id=""></td>
					</tr>
					<tr>
						<td>4</td>
						<td>Основы работы с CSS</td>
						<td><input type="checkbox" name="" id=""></td>
						<td><input type="checkbox" name="" id=""></td>
					</tr>
					<tr>
						<td>5</td>
						<td>Работа с классами в CSS</td>
						<td><input type="checkbox" name="" id=""></td>
						<td><input type="checkbox" name="" id=""></td>
					</tr>
					<tr>
						<td>6</td>
						<td>Работа с сетками и разметкой в HTML</td>
						<td><input type="checkbox" name="" id=""></td>
						<td><input type="checkbox" name="" id=""></td>
					</tr>
					<tr>
						<td>7</td>
						<td>Адаптивная верстка</td>
						<td><input type="checkbox" name="" id=""></td>
						<td><input type="checkbox" name="" id=""></td>
					</tr>
					<tr>
						<td>8</td>
						<td>Bootstrap</td>
						<td><input type="checkbox" name="" id=""></td>
						<td><input type="checkbox" name="" id=""></td>
					</tr>
					<tr>
						<td>9</td>
						<td>Основы языка JavaScript</td>
						<td><input type="checkbox" name="" id=""></td>
						<td><input type="checkbox" name="" id=""></td>
					</tr>
					<tr>
						<td>10</td>
						<td>Базовые задачи на JS</td>
						<td><input type="checkbox" name="" id=""></td>
						<td><input type="checkbox" name="" id=""></td>
					</tr>
					<tr>
						<td>11</td>
						<td>DOM-структура приложений и работа с объектами в языке JS</td>
						<td><input type="checkbox" name="" id=""></td>
						<td><input type="checkbox" name="" id=""></td>
					</tr>
					<tr>
						<td>12</td>
						<td>Сценарии</td>
						<td><input type="checkbox" name="" id=""></td>
						<td><input type="checkbox" name="" id=""></td>
					</tr>
					<tr>
						<td>13</td>
						<td>Анимации и работа с nimi</td>
						<td><input type="checkbox" name="" id=""></td>
						<td><input type="checkbox" name="" id=""></td>
					</tr>
					<tr>
						<td>14</td>
						<td>Github</td>
						<td><input type="checkbox" name="" id=""></td>
						<td><input type="checkbox" name="" id=""></td>
					</tr>
					<tr>
						<td>15</td>
						<td>Скрипты</td>
						<td><input type="checkbox" name="" id=""></td>
						<td><input type="checkbox" name="" id=""></td>
					</tr>
					<tr>
						<td>16</td>
						<td>Защита проекта</td>
						<td><input type="checkbox" name="" id=""></td>
						<td><input type="checkbox" name="" id=""></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div>
    <!-- Заголовок H1 с эффектом увеличения -->
    <h1 class="animated-heading">Пример H1</h1>

    <!-- Параграф с анимацией изменения фона -->
    <p class="animated-paragraph" @click="changeParagraphBackground">
      Нажмите, чтобы изменить цвет фона
    </p>

    <!-- Кнопка для показа лекций -->
    <button @click="toggleLectures" class="lecture-button">Показать лекции</button>
    <div class="lecture-table-container" :class="{ 'visible': showLectures, 'hidden': !showLectures }">
      <table class="lecture-table">
			<thead>
				<tr>
					<th>№</th>
					<th>Тема</th>
					<th>Отметка о посещении</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>Основы языка HTML</td>
					<td><input type="checkbox" name="" id=""></td>
				</tr>
				<tr>
					<td>2</td>
					<td>Углубленное изучение HTML</td>
					<td><input type="checkbox" name="" id=""></td>
				</tr>
				<tr>
					<td>3</td>
					<td>Основы работы с CSS</td>
					<td><input type="checkbox" name="" id=""></td>
				</tr>
				<tr>
					<td>4</td>
					<td>Адаптивная верстка, Flexbox и Grid Layout</td>
					<td><input type="checkbox" name="" id=""></td>
				</tr>
				<tr>
					<td>5</td>
					<td>Bootstrap — работа с фреймворком</td>
					<td><input type="checkbox" name="" id=""></td>
				</tr>
				<tr>
					<td>6</td>
					<td>Основы языка JavaScript</td>
					<td><input type="checkbox" name="" id=""></td>
				</tr>
				<tr>
					<td>7</td>
					<td>Работа с DOM и событиями в JavaScript</td>
					<td><input type="checkbox" name="" id=""></td>
				</tr>
				<tr>
					<td>8</td>
					<td>Введение в GitHub и GitHub Pages</td>
					<td><input type="checkbox" name="" id=""></td>
				</tr>
			</tbody>
      </table>
    </div>

    <!-- Анимация вращения фотографии -->
    <img
      class="student-photo"
      src="/photo_ыегвуте.jpg"
      alt="Фото студента"
    />

    <!-- Форма с обработчиком события -->
    <form @submit.prevent="handleFormSubmit" class="styled-form">
      <label for="name">Имя:</label>
      <input id="name" type="text" />

      <label for="email">E-mail:</label>
      <input id="email" type="email" />

      <button type="submit">Отправить</button>
    </form>
    <p class="form-message" v-if="formSubmitted">Форма отправлена!</p>
  </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue'
let userName = ref<string>("");
let userAge = ref<number | null>(null);
// 10 тетрадь
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
// 11 тетрадь
// object nujen
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
// 12 тетрадь
const Background = ref<string|null>('red')
const ContentVisible = ref(true)
const UtmHeading = ref<string|null>('12 тетрадь')
const ShowMessage = () => {
	alert('Скрипт загружен')
}
const ChangeBackgroundColor = (Back: string) => {
	Background.value = Back
}
const ToggleVisibility = () => {
	ContentVisible.value = !ContentVisible.value
}
const LogCurrentTime = () => {
	const now: Date = new Date()
	console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`)
}
const ResetBackgroundColor = () => {
	ChangeBackgroundColor('red')
}
onMounted(()=>{
	ShowMessage() 
	ChangeBackgroundColor('green')
	ToggleVisibility()
	UtmHeading.value = new URLSearchParams(window.location.search).get('utm_term')
})
// 13 тетрадь
const Semestr = ref<boolean>(false)
const ImageSrc = ref<string>('/photo_ыегвуте.jpg')
const StyleImg = ref<string>('height: 400px; display: block;')
const ToggleSemestr = () => {
	Semestr.value = !Semestr.value
}
const ToggleImage = () => {
	ImageSrc.value = '/baldi.jpg '
	StyleImg.value = 'height: 440px; display: block;'
}
const AlertDbclick = () => {
	alert('Не налегай, у меня не так много любимых преподавателей')
}
// 14 тетрадь
const showLectures = ref(false);
const formSubmitted = ref(false);

const toggleLectures = () => {
  showLectures.value = !showLectures.value;
};

const changeParagraphBackground = (event: MouseEvent) => {
  const paragraph = event.target as HTMLElement;
  paragraph.classList.toggle('bg-changed');
};

const handleFormSubmit = () => {
  formSubmitted.value = true;
  setTimeout(() => {
    formSubmitted.value = false;
  }, 3000);
};

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
}
form > * {
  display: block;
}
form > #comment {
  overflow: hidden;
  resize: vertical;
}

.animated-heading {
  text-align: center; /* Centers the text within its container */
  transform-origin: center; /* Ensures scaling happens from the center */
  transition: transform 0.3s ease;
  white-space: nowrap; /* Prevents text from breaking into multiple lines */
  overflow: hidden; /* Ensures content stays within bounds */
}
.animated-heading:hover {
  transform: scale(1.2);
}

/* Pараграф с анимацией изменения фона */
.animated-paragraph {
  transition: background-color 0.5s ease;
  padding: 10px;
  cursor: pointer;
}
.animated-paragraph.bg-changed {
  background-color: lightblue;
}

/* Кнопка показа лекций и анимация появления таблицы */
.lecture-button {
  margin: 10px 0;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}
.lecture-table-container {
  overflow: hidden;
  transition: max-height 0.5s ease;
  max-height: 0;
}

.lecture-table-container[style*='display: block'] {
  max-height: 1000px; /* Adjust as needed, large enough to fit your content */
}

.lecture-table-container.visible {
  display: block;
  max-height: 1000px; /* Ensure it's large enough to display the table */
}

.lecture-table-container.hidden {
  display: none;
}


/* Фотография с вращением */
.student-photo {
  display: block;
  margin: 20px auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  transition: transform 0.5s ease;
}
.student-photo:hover {
  transform: rotate(360deg);
}

/* Стиль формы и сообщение об отправке */
.styled-form {
  margin-top: 20px;
}
.styled-form label,
.styled-form input,
.styled-form button {
  display: block;
  margin-bottom: 10px;
}
.form-message {
  margin-top: 10px;
  color: green;
  font-size: 16px;
  animation: fade-in 0.5s ease;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

