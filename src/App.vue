<script setup lang="ts">
import HomeHeader from './components/Header.vue';
import HomeFooter from './components/Footer.vue';
import Introduce from './components/Introduce.vue';
import Members from './components/Members.vue';
import Contact from './components/Contact.vue';
import Product from './components/Product.vue';
</script>

<template>
	<div>
		<home-header></home-header>
		<introduce></introduce>
		<product></product>
		<members></members>
		<contact></contact>
		<home-footer></home-footer>
	</div>
</template>