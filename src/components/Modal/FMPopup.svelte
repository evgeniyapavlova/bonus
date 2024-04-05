<script>
	import { city } from '../../lib/stores/city';
	import { browser } from '../../lib/stores/browser';
	import prize from '../../lib/images/prize.png';

	export let lang;

	const content = {
		en: { title: 'Congratulations, User!', ok: "Simply click 'OK' to try your luck!" },
		pt: { title: 'Parabéns, usuário!', ok: "Basta clicar em 'OK' para tentar a sua sorte!" }
	};
</script>

<div class="sweet-alert">
	<img alt="Prize" id="gift-image" src={prize} style="width:115px" />
	<h2 id="first-title">{content[lang].title}</h2>

	{#if lang === 'pt'}
		<p class="text">
			Estamos dando a todos os usuários do {$browser} de {$city} uma oportunidade especial de ganhar
			dinheiro e experimentar um novo método de ganho. Estamos entusiasmados por tê-lo a bordo e mal
			podemos esperar para ver o que você realizará.
		</p>
	{:else}
		<p class="text">
			We're giving all {$browser} users from {$city} a special opportunity to win money and try out a
			new earning method. We're excited to have you on board and can't wait to see what you'll accomplish.
		</p>
	{/if}

	<br />

	<p>{content[lang].ok}</p>
</div>

<style>
	p {
		color: #797979;
		font-size: 15px;
		font-weight: 300;
		position: relative;
		text-align: inherit;
		float: none;
		margin: 0;
		padding: 0;
		line-height: normal;
	}

	.sweet-alert {
		padding: 24px 16px;
		text-align: center;
		font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	}
	h2 {
		color: #575757;
		font-size: 25px;
		text-align: center;
		font-weight: 600;
		text-transform: none;
		position: relative;
		margin: 10px 0;
		padding: 0;
		line-height: 40px;
		display: block;
	}
	.text {
		display: block;
		margin-left: auto;
		margin-right: auto;
		max-width: 450px;
		line-height: 1.4;
	}
</style>
