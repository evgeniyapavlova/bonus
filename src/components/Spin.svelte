<script>
	import { base } from '$app/paths';
	import { getContext } from 'svelte';
	import { count } from '../lib/stores/count_spin';
	import Popup from './Modal/Popup.svelte';

	import money from '../lib/images/money.png';
	import wheel from '../lib/images/wheel2.jpg';
	import mark from '../lib/images/rotate_mark.png';
	import spin from '../lib/images/spin.png';

	const { open } = getContext('simple-modal');

	const showFirst = () => open(Popup, { message: text[lang].sorry });

	export let lang;

	const text = {
		en: { spin: 'SPIN', sorry: 'Sorry.<br />Please try again.<br />We give you ONE more chance!' },
		pt: {
			spin: 'GIRAR',
			sorry: 'Desculpe.<br />Por favor, tente novamente.<br />Nós te damos mais UMA chance!'
		}
	};

	function spinF() {
		if ($count === 0 || $count === 1) {
			const audio = document.getElementById('myAudio');
			audio.play();

			const dWheel = document.getElementById('wheel');
			if ($count === 0) {
				dWheel.className = 'spinAround';
				count.update((n) => n + 1);
				setTimeout(() => {
					showFirst();
				}, 6800);
			} else if ($count === 1) {
				const device = document.getElementById('money');
				dWheel.className = 'spinAround2';
				setTimeout(() => {
					const dSpin = document.getElementById('spin');
					dWheel.className = dWheel.className + ' transparent';
					dSpin.className = dSpin.className + ' transparent';
				}, 6800);
				setTimeout(() => {
					device.style.display = 'block';
				}, 7000);
				setTimeout(() => {
					count.set(2);
				}, 10000);
			}
		}
	}
</script>

<div class="wrap">
	<img src={wheel} alt="" id="wheel" class="wheel" />
	<img src={mark} alt="" id="mark" class="mark" />
	<img src={spin} alt="" id="spin" class="spin" />

	<button class="circle-shadow" on:click={spinF}><span>{text[lang].spin}</span></button>
	<img class="animated rotateIn money" src={money} alt="" id="money" />
</div>
<audio id="myAudio">
	<source src="{base}/sound.mp3?v2" type="audio/mpeg" />
</audio>

<style>
	.money {
		left: 50%;
		top: 50%;
		position: absolute;
		height: auto;
		z-index: 3;
		margin-left: -25%;
		margin-top: -25%;
		max-width: 50%;
		display: none;
	}
	.wrap {
		position: relative;
		overflow: hidden;
	}
	.mark {
		position: absolute;
		left: calc(50% - 12.5px);
		top: 0;
	}
	.spin {
		position: absolute;
		left: calc(50% - 63px);
		top: calc(50% - 63px);
	}
	.circle-shadow:active {
		transform: scale(0.95);
	}
	.circle-shadow {
		width: var(--circleCenterSize);
		height: var(--circleCenterSize);
		border-radius: var(--circleCenterSize);
		position: absolute;
		left: calc(50% - (var(--circleCenterSize) / 2));
		top: calc(50% - (var(--circleCenterSize) / 2));
		box-shadow: 2px 2px 29px 5px rgba(0, 0, 0, 0.37);
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: white;
		font-weight: bold;
		font-size: 22px;
		cursor: pointer;
	}

	@-webkit-keyframes rotateIn {
		0% {
			-webkit-transform-origin: center;
			transform-origin: center;
			-webkit-transform: rotate3d(0, 0, 1, -200deg);
			transform: rotate3d(0, 0, 1, -200deg);
			opacity: 0;
		}
		100% {
			-webkit-transform-origin: center;
			transform-origin: center;
			-webkit-transform: none;
			transform: none;
			opacity: 1;
		}
	}
	@keyframes rotateIn {
		0% {
			-webkit-transform-origin: center;
			transform-origin: center;
			-webkit-transform: rotate3d(0, 0, 1, -200deg);
			transform: rotate3d(0, 0, 1, -200deg);
			opacity: 0;
		}
		100% {
			-webkit-transform-origin: center;
			transform-origin: center;
			-webkit-transform: none;
			transform: none;
			opacity: 1;
		}
	}
	.rotateIn {
		-webkit-animation-name: rotateIn;
		animation-name: rotateIn;
	}

	@media only screen and (max-width: 400px) {
		.spin {
			width: 100px;
			height: 100px;
			left: calc(50% - 50px);
			top: calc(50% - 50px);
		}
		.circle-shadow {
			width: var(--circleCenterSizeSmall);
			height: var(--circleCenterSizeSmall);
			border-radius: var(--circleCenterSizeSmall);
			left: calc(50% - (var(--circleCenterSizeSmall) / 2));
			top: calc(50% - (var(--circleCenterSizeSmall) / 2));
			font-size: 16px;
		}
		.mark {
			width: 18px;
			left: calc(50% - 9px);
		}
	}
</style>
