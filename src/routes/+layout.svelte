<script>
	import Header from '../components/Header.svelte';

	import './styles.css';
	import './animation.css';
</script>

<div class="app">
	<Header />
	<slot />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
