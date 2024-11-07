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
			<h1>bootstrap</h1>
			<div class="container my-4">
				<div class="row row-cols-1 row-cols-md-3 g-4">
					<div class="col">
						<div class="card">
							<img src="" class="card-img-top" alt="Товар 1">
							<div class="card-body">
								<h5 class="card-title">Товар 1</h5>
								<p class="card-text">Описание товара 1.</p>
								<a href="#" class="btn btn-primary">Купить</a>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card">
							<img src="" class="card-img-top" alt="Товар 2">
							<div class="card-body">
								<h5 class="card-title">Товар 2</h5>
								<p class="card-text">Описание товара 2.</p>
								<a href="#" class="btn btn-primary">Купить</a>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card">
							<img src="" class="card-img-top" alt="Товар 3">
							<div class="card-body">
								<h5 class="card-title">Товар 3</h5>
								<p class="card-text">Описание товара 3.</p>
								<a href="#" class="btn btn-primary">Купить</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Аккордеон для дополнительной информации -->
			<div class="container my-4">
				<div class="accordion" id="infoAccordion">
					<div class="accordion-item">
						<h2 class="accordion-header" id="headingOne">
							<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
								Информация 1
							</button>
						</h2>
						<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#infoAccordion">
							<div class="accordion-body">
								Подробное описание информации 1.
							</div>
						</div>
					</div>
					<div class="accordion-item">
						<h2 class="accordion-header" id="headingTwo">
							<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
								Информация 2
							</button>
						</h2>
						<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#infoAccordion">
							<div class="accordion-body">
								Подробное описание информации 2.
							</div>
						</div>
					</div>
					<div class="accordion-item">
						<h2 class="accordion-header" id="headingThree">
							<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
								Информация 3
							</button>
						</h2>
						<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#infoAccordion">
							<div class="accordion-body">
								Подробное описание информации 3.
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Слайдер изображений -->
			<div id="carouselExample" class="carousel slide my-4" data-bs-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img style="height: 60px;" src="../../public/number-1-square-svgrepo-com.svg" class="d-block w-100" alt="Слайд 1">
					</div>
					<div class="carousel-item">
						<img style="height: 60px;" src="../../public/number-2-square-svgrepo-com.svg" class="d-block w-100" alt="Слайд 2">
					</div>
					<div class="carousel-item">
						<img style="height: 60px;" src="../../public/number-3-square-svgrepo-com.svg" class="d-block w-100" alt="Слайд 3">
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span>Предыдущий</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span>Следующий</span>
				</button>
			</div>

			<!-- Адаптивная форма -->
			<div class="container my-4">
				<form>
					<div class="mb-3">
						<label for="name" class="form-label">Имя</label>
						<input type="text" class="form-control" id="name" placeholder="Введите ваше имя">
					</div>
					<div class="mb-3">
						<label for="email" class="form-label">Email</label>
						<input type="email" class="form-control" id="email" placeholder="Введите ваш email">
					</div>
					<div class="mb-3">
						<label for="category" class="form-label">Категория</label>
						<select class="form-select" id="category">
							<option selected>Выберите категорию</option>
							<option value="1">Категория 1</option>
							<option value="2">Категория 2</option>
							<option value="3">Категория 3</option>
						</select>
					</div>
					<button type="submit" class="btn btn-primary">Отправить</button>
				</form>
			</div>

			<!-- Таблица с использованием Bootstrap -->
			<div class="container my-4">
				<table class="table table-striped table-responsive">
					<thead>
						<tr>
							<th>Название</th>
							<th>Описание</th>
							<th>Цена</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Товар 1</td>
							<td>Описание товара 1</td>
							<td>1000 руб.</td>
						</tr>
						<tr>
							<td>Товар 2</td>
							<td>Описание товара 2</td>
							<td>2000 руб.</td>
						</tr>
					</tbody>
				</table>
			</div>
			<!-- Встроенное видео -->
			<div class="container my-4">
				<h5>Видео-пример</h5>
				<div class="ratio ratio-16x9">
					<iframe src="../../public/KEROSENE x COTTON EYE JOE.mp4" title="YouTube video" allowfullscreen></iframe>
				</div>
			</div>

			<!-- Встроенный PDF-документ -->
			<div class="container my-4">
				<h5>PDF-документ</h5>
				<div class="ratio ratio-4x3">
					<iframe src="../../public/doc.pdf" title="PDF document"></iframe>
				</div>
			</div>
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