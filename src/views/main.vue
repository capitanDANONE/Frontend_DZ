<template>
	<main>
		<aside>
			<Navigation :navs="arr"/>
		</aside>
		<div class="content">
			<div class="content_container">
				<div>
					<h1>Добро пожаловать на мой сайт</h1>
					<div>Меня зовут Прокошин Кирилл Дмитриевич и я начинающий специалист по веб-разработке.</div>
				</div>
				<div class="profile-image"></div>
			</div>            
			
			<section id="front">
			<div class="video_container">
				<video width="320" height="240" controls>
					<source src="/KEROSENE x COTTON EYE JOE.mp4" type="video/mp4">
					Ваш браузер не поддерживает видео.
				</video>
			</div>
				<h2>Фронтенд</h2>
				<p>
					Фронтенд (или клиентская часть) — это то, что видит пользователь. 
					Он включает в себя все визуальные элементы веб-сайта или приложения: кнопки, формы, изображения и текст. 
					Фронтенд разработчики используют языки разметки и стилизации, такие как HTML, CSS и JavaScript, чтобы создавать интерактивные и привлекательные интерфейсы. 
					Основная задача фронтенда — обеспечить удобство использования и эстетическую привлекательность.
				</p>
			</section>
			<section id="back">
				<div class="video_container">
					<video width="320" height="240" controls>
						<source src="/KEROSENE x COTTON EYE JOE.mp4" type="video/mp4">
						Ваш браузер не поддерживает видео.
					</video>
				</div>
				<h2>Бэкенд</h2>
				<p>
					Бэкенд (или серверная часть) — это "за кулисами" веб-приложения. Он отвечает за обработку данных, управление пользователями и взаимодействие с базами данных.
					Бэкенд разработчики используют языки программирования, такие как Python, Ruby, Java или PHP, а также фреймворки и базы данных для создания логики приложения. 
					Основная задача бэкенда — обеспечить стабильную работу приложения и безопасность данных.
				</p>
			</section>
		</div>
	</main>
</template>

<script setup lang="ts">
import Navigation from '../components/Navigation.vue'
const arr: [string, string][] = [
  ["front", "Фронтенд"],
  ["back", "Бэкенд"]
]
</script>

<style scoped lang="sass">
@use "../assets/gloabalstyles/stlyes.sass" as s
@use "../assets/gloabalstyles/aside"
p
	margin: 20px 100px 20px 0
.content_container
	margin-top: 40px
	h1
		margin-bottom: 19px
.video_container
	width: 100%
	justify-content: center
	video
		display: block
		margin: auto
</style>