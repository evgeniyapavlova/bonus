<script>
	export let showModal;

	let dialog;

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	class="bounceIn animated"
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<slot />
		<!-- svelte-ignore a11y-autofocus -->
		<button class="close-btn" aria-label="Close modal" autofocus on:click={() => dialog.close()} />
		<button on:click={() => dialog.close()}>OK</button>
	</div>
</dialog>

<style>
	button {
		background-color: var(--orange);
		color: #fff;
		border: none;
		box-shadow: none;
		font-size: 17px;
		font-weight: 600;
		border-radius: 4px;
		padding: 10px 32px;
		margin: 0 auto 24px;
		cursor: pointer;
	}
	dialog {
		max-width: 86%;
		border-radius: 0.5rem;
		border: none;
		padding: 0;
		top: calc(50% - 210px);
		margin: 0 auto;
		width: 500px;
	}

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}

	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
	.close-btn {
		cursor: pointer;
		display: block;
		box-sizing: border-box;
		position: absolute;
		z-index: 1000;
		top: 1rem;
		right: 1rem;
		margin: 0;
		padding: 0;
		width: 1.5rem;
		height: 1.5rem;
		border: 0;
		color: black;
		border-radius: 1.5rem;
		background: white;
		box-shadow: 0 0 0 1px black;
		transition:
			transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
			background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
		appearance: none;
		-webkit-appearance: none;
	}
	.close-btn::after,
	.close-btn::before {
		content: '';
		display: block;
		box-sizing: border-box;
		position: absolute;
		top: 50%;
		width: 1rem;
		height: 1px;
		background: black;
		transform-origin: center;
		transition:
			height 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
			background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
	}
	.close-btn::before {
		-webkit-transform: translate(0, -50%) rotate(45deg);
		-moz-transform: translate(0, -50%) rotate(45deg);
		transform: translate(0, -50%) rotate(45deg);
		left: 0.25rem;
	}
	.close-btn::after {
		-webkit-transform: translate(0, -50%) rotate(-45deg);
		-moz-transform: translate(0, -50%) rotate(-45deg);
		transform: translate(0, -50%) rotate(-45deg);
		left: 0.25rem;
	}
	.close-btn:hover::before,
	.close-btn:hover::after {
		height: 2px;
		background: white;
	}
	.close-btn:hover {
		background: black;
		outline: none;
	}
</style>
