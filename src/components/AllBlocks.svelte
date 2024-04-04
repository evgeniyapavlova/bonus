<script>
	import { onMount } from 'svelte';
	import { city } from '../lib/stores/city';
	import { count } from '../lib/stores/count_spin';
	import { timer, timer1 } from '../lib/stores/timer';

	import Modal from 'svelte-simple-modal';
	import Intro from './Intro.svelte';
	import Result from './Result.svelte';
	import Spin from './Spin.svelte';
	import Footer from './Footer.svelte';
	import Reviews from './Reviews/Reviews.svelte';
	import FirstModal from './Modal/FirstModal.svelte';
	export let lang;

	let currentYear = new Date().getFullYear();

	const myAPIKey = '83da9b2dcf134505beb00f51915dff53';

	onMount(async () => {
		const res = await fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=${myAPIKey}`);
		const result = await res.json();
		city.set(result.city.name);
	});

	onMount(() => {
		timer(180, timer1);
	});
</script>

<FirstModal />
<section>
	{#if $count === 2}
		<Result {lang} />
	{:else}
		<Intro {lang} />
		<Modal>
			<Spin {lang} />
		</Modal>
		<Footer {lang} />
	{/if}

	<Reviews {lang} />
	<div class="year">© {currentYear}</div>
</section>

<style>
	.year {
		font-size: 0.75rem;
		color: #c7c7c7;
		text-transform: uppercase;
		margin: 24px 0 0;
	}
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
