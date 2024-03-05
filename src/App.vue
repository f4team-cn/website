<script setup lang="ts">
import HomeHeader from './components/Header.vue';
import HomeFooter from './components/Footer.vue';
import Introduce from './components/Introduce.vue';
import Members from './components/Members.vue';
import Contact from './components/Contact.vue';
</script>

<template>
	<div>
		<home-header></home-header>
		<introduce></introduce>
		<members></members>
		<contact></contact>
		<home-footer></home-footer>
	</div>
</template>