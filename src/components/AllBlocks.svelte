<script>
	import Intro from './Intro.svelte';
	import Spin from './Spin.svelte';
	import Footer from './Footer.svelte';
	import Reviews from '../Reviews.svelte';
</script>

<section>
	<Intro />
	<Spin />
	<Footer />
	<Reviews />
</section>

<style>
	section {
		max-width: 700px;
		width: 94%;
		border: 1px solid #e6e6e6;
		border-radius: 3px;
		background-color: white;
		margin: 20px auto 0;
		text-align: center;
		padding: 24px;
	}
</style>
