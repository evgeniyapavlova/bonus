<script>
	import IqOptionLogo from './svg/IQOptionLogo.svelte';
</script>

<div class="company">
	<div class="logo">
		<IqOptionLogo />
	</div>
	<div class="caption">This competition is sponsored by IQ Option</div>
</div>
<div class="small">
	<b>Disclaimer:</b>
	Please note that this promotion is not endorsed, sponsored, or administered by any third-party company.
	All prizes and rewards are provided solely by Exnova. Thank you for your understanding and good luck!
</div>
<div class="small">
	You have <span class="timer">00 minutes and 00 seconds</span>
	to claim this offer before we give your prize to another happy user! Good luck!
</div>

<style>
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
	.timer {
		color: #3578e5;
		text-decoration: underline;
	}
</style>
