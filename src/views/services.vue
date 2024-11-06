<template>
	<main>
        <section>
            <h1>Разработка веб-приложений</h1>
            <div class="projects">
                <div class="project">
                    <div class="image-placeholder" id="img1"></div>
                    <div class="container">
                        <h4>Сайт визитка</h4>
                        <button @click="ToggleForm">заказать услугу</button>
                    </div>
                </div>
                <div class="project">
                    <div class="image-placeholder" id="img2"></div>
                    <div class="container">
                        <h4>Корпоративный сайт</h4>
                        <button @click="ToggleForm">заказать услугу</button>
                    </div>
                </div>
                <div class="project">
                    <div class="image-placeholder" id="img3"></div>
                    <div class="container">
                        <h4>Интернет магазин</h4>
                        <button @click="ToggleForm">заказать услугу</button>
                    </div>
                </div>
            </div>
            <p class="description">
				<b>Пошаговый рецепт с фото</b> <br> <br>
				1) Нарезать лук тонкими полукольцами, мясо нарезать тонкими полосочками в длину примерно 5 см в ширину по 5 мм, 
				перец порезать небольшими тонкими полосочками, морковь натереть на крупной терке, мелко нарезать чеснок. <br>
				2) Нарезанное мясо замариновать в миске в соевом соусе с чесноком на 10-15 минут.<br>
				3) Сварить лапшу по инструкции на упаковке.<br>
				4) На умеренном огне обжарить лук до золотистого цвета добавить морковку жарить 5-7 минут помешивая, 
				добавить болгарский перец жарить еще 5 минут, добавить 10-15 мл соевого соуса, накрыть крышкой и тушить 2-3 минуты, 
				мясо вместе с маринадом выложить на сковородку к овощам и тушить до готовности мяса. <br>
				5) Добавить к овощам и мясу лапшу жарить 5-7 минут на медленном огне. <br>

				Как и с чем подавать: Подавать в горячем виде и сверху обсыпать кунжутом.
			</p>
        </section>
    </main>
    <component id="modal" class="modal" v-if="showform">
        <div class="modal-content">
            <span class="close" @click="ToggleForm">&times;</span>
            <form id="serviceForm">
                <h2>Заказ услуги</h2>
                <label for="name">Имя:</label>
                <input type="text" id="name" name="name" placeholder="например Иванов Иван Иванович" required>
            
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="test@mail.ru" required>
            
                <label for="phone">Телефон:</label>
                <input type="tel" id="phone" name="phone" placeholder="+7 919 999 99 99" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required>
            
                <label for="country">Страна:</label>
                <select id="country" name="country" required>
                    <option value="Россия">Россия</option>
                    <option value="США">США</option>
                    <option value="Китай">Китай</option>
                </select>
            
                <label for="date">Дата:</label>
                <input type="date" id="date" name="date" required>
            
                <label for="comments">Комментарий:</label>
                <textarea id="comments" name="comments" placeholder="Ваш комментарий..."></textarea>
            
                <div class="agreement">
                    <input type="checkbox" id="agreement" name="agreement" required>
                    <label for="agreement">Согласен на обработку моих персональных данных</label>
                </div>
            
                <button class="submition" type="submit">Отправить заявку</button>
            </form>            
        </div>
    </component>   
</template>

<script setup lang="ts">
import { ref } from 'vue';
const showform = ref(true)
const ToggleForm = () => {
	showform.value = !showform.value 
}
</script>

<style lang="sass" scoped>
@use "../assets/gloabalstyles/stlyes.sass" as s
@use "../assets/gloabalstyles/aside"
section
	flex-grow: 1
	h1
		margin-left: 40px
		padding: 20px 0

.projects
	display: grid
	gap: 20px
	grid-template-columns: repeat(3, 1fr)

.project
	text-align: center
	display: flex
	flex-direction: column
	align-items: center

.image-placeholder
	width: 150px
	height: 150px
	background-color: #e0e0e0
	margin: 10px

.description
	margin: 40px

.container
	padding: 5px
	border: solid black 1px
	box-shadow: 5px 0px 5px 5px #00000083

#img1
	background: url("/vite.svg")
	background-size: cover

#img2
	background: url("/vite.svg")
	background-size: cover

#img3
	background: url("/vite.svg")
	background-size: cover

.modal
	position: fixed
	z-index: 1
	left: 0
	top: 0
	width: 100%
	height: 100%
	background-color: rgba(0,0,0,0.5)

	.modal-content
		background-color: white
		margin: 15% auto
		padding: 20px
		border: 1px solid #888
		width: 80%
		position: relative
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5)
		background-color: #fff
		border: 1px solid #000
		width: 400px
		margin: 100px auto

		h2
			font-family: Arial, sans-serif
			font-size: 18px
			margin-bottom: 20px

		label
			display: block
			margin-bottom: 5px
			font-family: Arial, sans-serif
			font-size: 14px

		input[type="text"],
		input[type="email"],
		input[type="tel"],
		input[type="date"],
		select,
		textarea
			width: 100%
			padding: 10px
			margin-bottom: 15px
			border: 1px solid #000
			font-family: Arial, sans-serif
			font-size: 14px
			box-sizing: border-box

		input[type="checkbox"]
			margin-right: 10px

		textarea
			height: 80px
			resize: none

		.submition
			background-color: #fff
			color: #000
			border: 1px solid #000
			padding: 10px 20px
			cursor: pointer
			font-family: Arial, sans-serif
			font-size: 14px

			&:hover
				background-color: #f0f0f0

		.close
			position: absolute
			top: 10px
			right: 10px
			font-size: 20px
			cursor: pointer

		.agreement
			display: flex
			align-items: center
			margin-bottom: 15px

			label
				font-size: 12px

.close
	color: #aaa
	float: right
	font-size: 28px
	font-weight: bold

	&:hover, &:focus
		color: black
		text-decoration: none
		cursor: pointer
@media (max-width: 800px)
	.projects
		display: flex
		flex-direction: column
</style>