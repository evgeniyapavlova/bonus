<span class="loader"> </span>

<style>
	.loader {
		display: block;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background-color: #fff;
		box-shadow:
			12px 0 #fff,
			-12px 0 #fff;
		position: absolute;
		animation: flash 1s ease-out infinite alternate;
		left: 50%;
		transform: translate(-50%, -50%);
		top: 50%;
	}

	@keyframes flash {
		0% {
			background-color: #fff2;
			box-shadow:
				12px 0 #fff2,
				-12px 0 #fff;
		}
		50% {
			background-color: #fff;
			box-shadow:
				12px 0 #fff2,
				-12px 0 #fff2;
		}
		100% {
			background-color: #fff2;
			box-shadow:
				12px 0 #fff,
				-12px 0 #fff2;
		}
	}
</style>
