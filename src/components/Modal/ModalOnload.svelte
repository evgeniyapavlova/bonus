<script>
	import { onMount } from 'svelte';
	import Modal from './Modal1.svelte';
	import FMPopup from './FMPopup.svelte';

	export let lang;

	let showModal = false;

	onMount(() => {
		showModal = true;
	});
</script>

<Modal bind:showModal>
	<FMPopup {lang} />
</Modal>
