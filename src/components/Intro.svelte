<script>
	import { city } from '$lib/stores/city';
	export let lang;
</script>

{#if lang === 'pt'}
	<h1>PARABÉNS!</h1>
	<h2>
		Você foi selecionado como vencedor entre todos os usuários em {$city || 'cidade'}! Para
		reivindicar seu prêmio, basta girar a roda e ver o que você ganhou. É fácil e divertido, então
		não perca a chance de ganhar muito.
	</h2>
	<h2 style="margin-bottom: 24px;">Clique no botão “GIRAR” agora e aproveite sua recompensa!</h2>
{:else}
	<h1>CONGRATULATIONS!</h1>
	<h2>
		You have been selected as a winner from all users in {$city || 'your city'}! To claim your
		prize, simply spin the wheel and see what you've won. It's easy and fun, so don't miss out on
		your chance to win big.
	</h2>
	<h2 style="margin-bottom: 24px;">Click the 'SPIN' button now and enjoy your reward!</h2>
{/if}

<style>
	h1 {
		font-size: 1.625rem;
		font-weight: 600;
		text-align: center;
		letter-spacing: 0.5px;
		color: var(--orange);
	}
	h2 {
		font-size: small;
		margin: 12px 0;
		text-align: center;
		line-height: 1.4;
		font-weight: bold;
	}
</style>
