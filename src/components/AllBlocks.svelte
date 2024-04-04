<script>
	import { onMount } from 'svelte';
	import { city } from '../lib/stores/city';
	import { count } from '../lib/stores/count_spin';
	import { browser } from '../lib/stores/browser';
	import { timer, timer1, timer2 } from '../lib/stores/timer';

	import Modal from 'svelte-simple-modal';
	import Intro from './Intro.svelte';
	import Result from './Result.svelte';
	import Spin from './Spin.svelte';
	import Footer from './Footer.svelte';
	import Reviews from './Reviews/Reviews.svelte';

	export let lang;

	let currentYear = new Date().getFullYear();

	const myAPIKey = '83da9b2dcf134505beb00f51915dff53';

	onMount(() => {
		let browserName = (function (agent) {
			switch (true) {
				case agent.indexOf('edge') > -1:
					return 'MS Edge';
				case agent.indexOf('edg/') > -1:
					return 'Edge (chromium based)';
				case agent.indexOf('opr') > -1 && !!window.opr:
					return 'Opera';
				case agent.indexOf('chrome') > -1 && !!window.chrome:
					return 'Chrome';
				case agent.indexOf('trident') > -1:
					return 'MS IE';
				case agent.indexOf('firefox') > -1:
					return 'Mozilla Firefox';
				case agent.indexOf('safari') > -1:
					return 'Safari';
				default:
					return 'other';
			}
		})(window.navigator.userAgent.toLowerCase());

		browser.set(browserName);
	});

	onMount(async () => {
		const res = await fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=${myAPIKey}`);
		const result = await res.json();
		city.set(result.city.name);
	});

	onMount(() => {
		timer(180, timer1);
		timer(600, timer2);
	});
</script>

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

	<Modal>
		<Reviews {lang} />
	</Modal>
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
		margin: 20px auto;
		text-align: center;
		padding: 24px;
	}
	@media only screen and (max-width: 650px) {
		section {
			padding: 24px 16px;
		}
	}
</style>
