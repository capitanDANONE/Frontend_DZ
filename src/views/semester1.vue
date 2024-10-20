<template>
	<main>
        <aside>
			<Navigation :navs="arr"/>
        </aside>
        
        <div class="content">
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
			<section id="sem"></section>
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
			
            <!-- Встроенный PDF -->
			<section id="doc">
				<h2>Документ</h2>
				<object data="/doc.pdf" type="application/pdf" width="600" height="400">
					<p>Ваш браузер не поддерживает встраивание PDF. <a href="/doc.pdf">Скачайте PDF</a>.</p>
				</object>
			</section>
            <!-- Яндекс карта -->
			<section id="map">
				<h2>Карта</h2>
				<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aexample" width="600" height="400"></iframe>
			</section>
            <!-- Видеофайлы -->
			<section id="video">
				<h2>Видео</h2>
				<video width="600" height="340" controls>
					<source src="/KEROSENE x COTTON EYE JOE.mp4" type="video/mp4">
					Ваш браузер не поддерживает видео.
				</video>
			</section>
        </div>
    </main>
</template>

<script setup lang="ts">
import Navigation from '../components/Navigation.vue'
const arr: [string, string][] = [
  ["sem", "Первый семестр"],
  ["doc", "Документ"],
  ["map", "Карта"],
  ["video", "Видео"],
]
</script>

<style lang="sass" scoped >
@use "../assets/gloabalstyles/aside" 
@use "../assets/gloabalstyles/stlyes.sass" as s
table 
	width: 100%
	border-collapse: collapse
	margin-bottom: 20px
th, td 
	border: 1px solid #ddd
	padding: 8px
	text-align: center
th
	background-color: #f2f2f2
	color: #333
td
	background-color: #fff

tr:hover
	> *
		background-color: s.$clrlight1
.content
	align-content: center
	width: 100%
	margin-top: 2%
	margin-right: 1%
#doc
	width: 100%
	justify-content: center
	object
		display: block
		margin: auto
#map
	width: 100%
	justify-content: center
	iframe
		width: 100%
		display: block
		margin: auto
#video
	width: 100%
	justify-content: center
	video
		display: block
		margin: auto

</style>