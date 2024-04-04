<script>
	import IqOptionLogo from './svg/IQOptionLogo.svelte';
	import { timer1 } from '../lib/stores/timer';
	export let lang;

	const content = {
		en: {
			caption: 'This competition is sponsored by IQ Option',
			disclaimer: 'Disclaimer:',
			discText:
				'Please note that this promotion is not endorsed, sponsored, or administered by any third-party company. All prizes and rewards are provided solely by Exnova. Thank you for your understanding and good luck!'
		},
		pt: {
			caption: 'Esta competição é patrocinada pela IQ Option',
			disclaimer: 'Aviso Legal:',
			discText:
				'Observe que esta promoção não é endossada, patrocinada ou administrada por nenhuma empresa terceirizada. Todos os prêmios e recompensas são fornecidos exclusivamente pela Exnova. Obrigado pela sua compreensão e boa sorte!'
		}
	};
</script>

<div class="company">
	<div class="logo">
		<IqOptionLogo />
	</div>
	<div class="caption">{content[lang].caption}</div>
</div>
<div class="small">
	<b>{content[lang].disclaimer}</b>
	{content[lang].discText}
</div>

{#if lang === 'pt'}
	<div class="small small-1">
		Você tem <span class="timer"
			><span class="min">{$timer1.min}</span> minutos e <span class="sec">{$timer1.sec}</span> segundos</span
		> para reivindicar esta oferta antes de darmos seu prêmio a outro felizardo! Boa sorte!
	</div>{:else}
	<div class="small small-1">
		You have <span class="timer"
			><span class="min">{$timer1.min}</span> minutes and <span class="sec">{$timer1.sec}</span> seconds</span
		> to claim this offer before we give your prize to another happy user! Good luck!
	</div>
{/if}

<style>
	.caption {
		margin-top: 9px;
	}
	.company {
		margin-top: 24px;
	}
	.small {
		text-align: center;
		margin-top: 16px;
		padding-top: 16px;
		border-top: 1px solid #efefef;
		line-height: 1.4;
		color: #999;
		font-size: 0.75rem;
	}
	.small-1 {
		margin-bottom: 32px;
	}
</style>
