<template>
	<div class="sidebar" style="width: 15%;">
		<header> Навигация по странице </header>
		<ul>
			<li v-for="pair in navs">
				<a :href="`#${pair[0]}`">
					{{ pair[1] }}
				</a>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
defineProps<{
  navs: [string, string][]
}>()
</script>

<style lang="sass" scoped>
@use "../assets/gloabalstyles/stlyes.sass" as s
header
	color: s.$clrbluey2
	font-weight: bold
	font-size: 1.2rem
	padding: 30px 5px
li
	padding-left: 10px 
	a
		color: s.$clrbluey2
</style>