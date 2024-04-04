<script>
	import { city } from '../../lib/stores/city';
	import { browser } from '../../lib/stores/browser';
	import { getContext } from 'svelte';
	const { close } = getContext('simple-modal');
	import prize from '../../lib/images/prize.png';
</script>

<div class="sweet-alert animated bounceIn">
	<img alt="Prize" id="gift-image" src={prize} style="width:115px" />
	<h2 id="first-title">Congratulations, User!</h2>

	<p class="text">
		We're giving all {$browser} users from {$city} a special opportunity to win money and try out a new
		earning method. We're excited to have you on board and can't wait to see what you'll accomplish.
	</p>
	<br />
	<p>Simply click 'OK' to try your luck!</p>
	<p></p>
	<div class="sa-button-container">
		<div class="sa-confirm-button-container">
			<button on:click={close}>OK</button>
		</div>
	</div>
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
	button {
		background-color: var(--orange);
		color: #fff;
		border: none;
		box-shadow: none;
		font-size: 17px;
		font-weight: 600;
		border-radius: 4px;
		padding: 10px 32px;
		margin: 26px 5px 0;
		cursor: pointer;
	}
	.sweet-alert {
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
	@keyframes bounceIn {
		0%,
		100%,
		20%,
		40%,
		60%,
		80% {
			-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
			animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		}
		0% {
			opacity: 0;
			-webkit-transform: scale3d(0.3, 0.3, 0.3);
			transform: scale3d(0.3, 0.3, 0.3);
		}
		20% {
			-webkit-transform: scale3d(1.1, 1.1, 1.1);
			transform: scale3d(1.1, 1.1, 1.1);
		}
		40% {
			-webkit-transform: scale3d(0.9, 0.9, 0.9);
			transform: scale3d(0.9, 0.9, 0.9);
		}
		60% {
			opacity: 1;
			-webkit-transform: scale3d(1.03, 1.03, 1.03);
			transform: scale3d(1.03, 1.03, 1.03);
		}
		80% {
			-webkit-transform: scale3d(0.97, 0.97, 0.97);
			transform: scale3d(0.97, 0.97, 0.97);
		}
		100% {
			opacity: 1;
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
	}
	.bounceIn {
		-webkit-animation-name: bounceIn;
		animation-name: bounceIn;
	}
</style>
