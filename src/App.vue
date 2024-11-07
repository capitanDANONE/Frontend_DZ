<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
const Togle = () => {
	mobmen.value=!mobmen.value
}
const mobmen = ref(false)
</script>
<template>
	<div class="mobile_menu" v-if="mobmen">
		<ul>
			<li><RouterLink to="/">Главная</RouterLink></li>
			<li><RouterLink to="/semester1">Первый семестр</RouterLink></li>
			<li><RouterLink to="/">Второй семестр</RouterLink></li>
			<li><RouterLink to="/services">Услуги</RouterLink></li>
			<li><RouterLink to="/">Авторизация</RouterLink></li>
			<li><RouterLink to="/javascript">JavaScript</RouterLink></li>
		</ul>
	</div>
    <div class="page-wrapper">
        <nav class="navbar">
            <ul>
                <li><RouterLink to="/">Главная</RouterLink></li>
                <li><RouterLink to="/semester1">Первый семестр</RouterLink></li>
                <li><RouterLink to="/">Второй семестр</RouterLink></li>
                <li><RouterLink to="/services">Услуги</RouterLink></li>
                <li><RouterLink to="/">Авторизация</RouterLink></li>
				<li><RouterLink to="/javascript">JavaScript</RouterLink></li>
            </ul>
			<div class="menu">
				<img style="height: 30px; display: block;" src="../public/menu-svgrepo-com.svg" alt="" @click="Togle">
			</div>
            <header>
                <div class="container">
                    <div>Группа ЭФБО 07 23</div>
                    <div>Прокошин Кирилл Дмитриевич</div>
                </div>
				<img style="display: block;" src="/vite.svg" alt="">
            </header>
        </nav>
        <main class="content">
			
            <RouterView />
        </main>
        <footer>
            <div>© Прокошин Кирилл Дмитриевич, 2024</div>
            <div>
                <img style="height: 20px;" src="https://www.svgrepo.com/show/110197/whatsapp.svg" alt="WhatsApp">
                <img style="height: 20px;" src="https://www.svgrepo.com/show/343532/vk-communication-internet-network-chat-interaction.svg" alt="VK">
            </div>
        </footer>
    </div>
</template>
<style lang="sass" scoped>
@use "./assets/gloabalstyles/stlyes" as s
.navbar
	width: 100%
	display: flex
	justify-content: space-between
	align-content: center
	margin: auto
	padding: 5px 0
	background-color: s.$clrbluey3
	ul
		align-content: center
		margin: auto 0
		display: flex
		li
			padding: 0 10px
			a
				color: s.$clrbluey2
				&:active
					color: s.$clrlight1
	.menu
		display: none
	header
		display: flex
		.container
			margin-right: 30px
			*
				color: s.$clrbluey2
				font-family: "Kablammo", system-ui
				
html, body
	height: 100%
	margin: 0
	padding: 0
.page-wrapper
	min-height: 100vh
	display: flex
	flex-direction: column
.content
	flex: 1 0 auto
	.mobile_menu
		display: none
footer
	flex-shrink: 0
	padding: 1% 0
	justify-content: center	
	background-color: s.$clrbluey3
	display: flex
	flex-direction: column
	*
		color: s.$clrbluey2
		margin: auto
		display: flex
		flex-direction: row
@media (max-width: 800px)
	.navbar
		height: 60px
		justify-content: space-between
		ul
			display: none
		.menu
			align-content: center
			display: block
			padding-left: 40px
			img
				margin: auto
		header
			padding-right: 60px 
			.container
				display: none
	.mobile_menu
		margin-top: 65px 
		background-color: s.$clrbluey3
		position: absolute
		display: block
		width: 100%
		z-index: 100
		ul
			li
				text-align: center	
				a
					display: block
					color: s.$clrbluey2
					font-size: 2rem
					padding: 20px 0
</style>